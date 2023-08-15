import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { sendEmail } from '$lib/serverFiles/emailService.js';

const newSubscriptionSchema = z.object({
	level: z.string().nonempty(),
	name: z.string().min(3).max(60).nonempty(),
	companyName: z.string().min(2).max(60).nonempty(),
	mobileNumber: z.string().min(10).max(10),
	email: z.string().email().optional(),
	textArea: z.string().min(10).max(2000).optional()
});

export async function load() {
	const newSubscriptionFormSettings = await superValidate(newSubscriptionSchema);
	return { newSubscriptionFormSettings };
}

export const actions = {
	default: async ({ request }) => {
		const newSubscriptionForm = await superValidate(request, newSubscriptionSchema);

		if (!newSubscriptionForm.valid) {
			return fail(400, { newSubscriptionForm });
		}

		const msg = newSubscriptionForm.data.textArea || 'No Message';
		const email = newSubscriptionForm.data.email || 'No Email Address';

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
				<tr>
					<td bgcolor="#70bbd9" style="padding: 40px 30px 40px 30px;">
						<img
							src="https://cms.buildingtec-elevators.com/uploads/logo_text_white_240x60_cbf67ff00d.webp"
							alt="company's logo"
							width="210"
							height="45"
							style="display: block;"
						/>
					</td> 
				</tr> 
				<tr>
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<h1>Subscription Quote Request</h1>
						<p style="font-size: 18px;"><strong>Name:</strong> ${newSubscriptionForm.data.name}</p>
						<p style="font-size: 18px;"><strong>Subscription Level:</strong> ${newSubscriptionForm.data.level}</p>
						<p style="font-size: 18px;"><strong>Company Name:</strong> ${newSubscriptionForm.data.companyName}</p>
						<p style="font-size: 18px;"><strong>Mobile Number:</strong> ${newSubscriptionForm.data.mobileNumber}</p>
						<p style="font-size: 18px;"><strong>Email Address:</strong> ${email}</p>
						<p style="font-size: 18px;"><strong>Message:</strong> ${msg}</p>
					</td>
				</tr>
				<tr>
					<td bgcolor="#70bbd9" style="padding: 30px 30px; color: white;">
						<p style="color: #ffffff; font-size: 18px;">This message is sent from the footer form.</p>
					</td>
				</tr>
			</table>
			<div style="width: 50px; height: 50px;"></div>
		`;

		await sendEmail(
			'fawzy.mohamed@alkholi.com',
			'Website Messages - New Elevator Quote Request.',
			emailTemplate,
			emailTemplate
		);

		// reset the form values
		newSubscriptionForm.data.name = '';
		newSubscriptionForm.data.level = '';
		newSubscriptionForm.data.companyName = '';
		newSubscriptionForm.data.mobileNumber = '';
		newSubscriptionForm.data.email = '';
		newSubscriptionForm.data.textArea = '';

		return { newSubscriptionForm };
	}
};
