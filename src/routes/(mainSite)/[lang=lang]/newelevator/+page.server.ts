import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { sendEmail } from '$lib/serverFiles/emailService.js';

const newElevatorSchema = z.object({
	name: z.string().min(3).max(60).nonempty(),
	companyName: z.string().min(2).max(60).nonempty(),
	mobileNumber: z.string().min(10).max(10),
	email: z.string().email().optional(),
	textArea: z.string().min(10).max(2000).optional()
});

export async function load() {
	const newElevatorFormSettings = await superValidate(newElevatorSchema);
	return { newElevatorFormSettings };
}

export const actions = {
	default: async ({ request }) => {
		const newElevatorForm = await superValidate(request, newElevatorSchema);

		if (!newElevatorForm.valid) {
			return fail(400, { newElevatorForm });
		}

		const msg = newElevatorForm.data.textArea || 'No Message';
		const email = newElevatorForm.data.email || 'No Email Address';

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
				<tr>
					<td bgcolor="#70bbd9" style="padding: 40px 30px 40px 30px;">
						<h1>Message From The New Elevator Quote Request</h1>
					</td> 
				</tr> 
				<tr>
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<h1>Footer Form</h1>
						<p style="font-size: 18px;"><strong>Name:</strong> ${newElevatorForm.data.name}</p>
						<p style="font-size: 18px;"><strong>Company Name:</strong> ${newElevatorForm.data.companyName}</p>
						<p style="font-size: 18px;"><strong>Mobile Number:</strong> ${newElevatorForm.data.mobileNumber}</p>
						<p style="font-size: 18px;"><strong>Email Address:</strong> ${email}</p>
						<p style="font-size: 18px;"><strong>Message:</strong> ${msg}</p>
					</td>
				</tr>
				<tr>
					<td bgcolor="#70bbd9" style="padding: 30px 30px; color: white;">
						<p style="color: #ffffff; font-size: 18px;">This message is sent from the new elevator quote request.</p>
					</td>
				</tr>
			</table>
			<div style="width: 50px; height: 50px;"></div>
		`;

		await sendEmail(
			'fawzy.mohamed@alkholi.com, info@buildingtec.com',
			'Website Messages - New Elevator Quote Request.',
			emailTemplate,
			emailTemplate
		);

		// reset the form values
		newElevatorForm.data.name = '';
		newElevatorForm.data.companyName = '';
		newElevatorForm.data.mobileNumber = '';
		newElevatorForm.data.email = '';
		newElevatorForm.data.textArea = '';

		return { newElevatorForm };
	}
};
