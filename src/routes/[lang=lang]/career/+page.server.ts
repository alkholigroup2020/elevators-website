import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { sendEmail } from '$lib/serverFiles/emailService.js';

function convertDate(originalDate: Date): string {
	const date = new Date(originalDate);

	let day: any = date.getUTCDate();

	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const month = monthNames[date.getUTCMonth()];
	const year = date.getUTCFullYear();

	// prepend a zero to the day if it is less than 10
	if (day < 10) {
		day = '0' + day;
	}

	// return the formatted date
	return `${day}-${month}-${year}`;
}

const careerSchema = z.object({
	name: z.string().min(3).max(60).nonempty(),
	email: z.string().email(),
	mobile: z.string().min(10).max(10),
	textArea: z.string().min(10).max(2000).optional(),
	position: z.string().nonempty(),
	nationality: z.string().nonempty(),
	dateOfBirth: z
		.date()
		.min(new Date('1940-01-01'), { message: 'Dates before 1940 are not allowed.' }),
	degreeLevel: z.string().nonempty(),
	careerLevel: z.string().nonempty(),
	address: z.string().min(3).max(30).nonempty(),
	employeeCV: z.instanceof(File).optional()
});

export async function load() {
	const careerFormSettings = await superValidate(careerSchema);
	return { careerFormSettings };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const careerForm = await superValidate(formData, careerSchema);

		if (!careerForm.valid) return fail(400, { careerForm });

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
				<tr>
					<td bgcolor="#70bbd9" style="padding: 40px 30px 40px 30px;">
						<img src="https://cms.buildingtec-elevators.com/uploads/logo_text_white_Small_9774aace41.png" alt="company logo" width="210" height="45" style="display: block;" />
					</td>
				</tr>
				<tr>
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<h1>Career Form:</h1>
						<p style="font-size: 18px;"><strong>Name:</strong> ${careerForm.data.name}</p>
						<p style="font-size: 18px;"><strong>Email:</strong> ${careerForm.data.email}</p>
						<p style="font-size: 18px;"><strong>Position:</strong> ${careerForm.data.position}</p>
						<p style="font-size: 18px;"><strong>Nationality:</strong> ${careerForm.data.nationality}</p>
						<p style="font-size: 18px;"><strong>Mobile:</strong> ${careerForm.data.mobile}</p>
						<p style="font-size: 18px;"><strong>Date Of Birth:</strong> ${convertDate(
							careerForm.data.dateOfBirth
						)}</p>
						<p style="font-size: 18px;"><strong>Degree Level:</strong> ${careerForm.data.degreeLevel}</p>
						<p style="font-size: 18px;"><strong>Career Level:</strong> ${careerForm.data.careerLevel}</p>
						<p style="font-size: 18px;"><strong>Address:</strong> ${careerForm.data.address}</p>

						<pre style="font-size: 18px;"><strong>Cover Letter:</strong> ${careerForm.data.textArea}</pre>
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

		const file = formData.get('employeeCV');

		if (file instanceof File) {
			const fileBuffer = await file.arrayBuffer();
			await sendEmail(
				'fawzy.mohamed@alkholi.com',
				'Website Messages - Career Form.',
				emailTemplate,
				emailTemplate,
				[{ filename: file.name, content: Buffer.from(fileBuffer) }]
			);
		} else {
			return fail(400, { careerForm });
		}

		// await sendEmail(
		// 	'fawzy.mohamed@alkholi.com',
		// 	'Website Messages - Career Form.',
		// 	emailTemplate,
		// 	emailTemplate
		// );

		// reset the form values

		careerForm.data.name = '';
		careerForm.data.email = '';
		careerForm.data.mobile = '';
		careerForm.data.textArea = '';
		careerForm.data.position = '';
		careerForm.data.nationality = '';
		careerForm.data.degreeLevel = '';
		careerForm.data.careerLevel = '';
		careerForm.data.address = '';

		return { careerForm };
	}
};
