import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { sendEmail } from '$lib/serverFiles/emailService.js';

/**
 * Convert a date string from the format "YYYY-MM-DDTHH:mm" to "YYYY-MM-DD hh:mmAM/PM"
 *
 * @param {string} dateString - The date string to be converted.
 * @return {string} The converted date string.
 */
function formatDateString(dateString: string): string {
	// Create a Date object from the input string
	const dateObj = new Date(dateString);

	// Extract the year, month, and day from the Date object
	const year = dateObj.getFullYear();
	const month = dateObj.getMonth() + 1; // getMonth() returns month index starting from 0
	const day = dateObj.getDate();

	// Extract the hour and minute from the Date object
	const hour24 = dateObj.getHours(); // getHours() returns the hour (0-23)
	const minute = dateObj.getMinutes(); // getMinutes() returns the minutes (0-59)

	// Convert the hour from 24-hour format to 12-hour format
	const hour12 = hour24 % 12 || 12; // if hour24 is 0, return 12

	// Determine whether the time is AM or PM
	const ampm = hour24 < 12 || hour24 === 24 ? 'AM' : 'PM';

	// Format the date and time components to be two digits
	const yearStr = String(year).padStart(4, '0');
	const monthStr = String(month).padStart(2, '0');
	const dayStr = String(day).padStart(2, '0');
	const hourStr = String(hour12).padStart(2, '0');
	const minuteStr = String(minute).padStart(2, '0');

	// Combine the date and time components into a single string
	const formattedString = `${yearStr}-${monthStr}-${dayStr} ${hourStr}:${minuteStr} ${ampm}`;

	return formattedString;
}

const newMeetingSchema = z.object({
	name: z.string().min(3).max(60).nonempty(),
	dateTime: z.any(),
	mobileNumber: z.string().min(10).max(10),
	email: z.string().email().optional(),
	textArea: z.string().min(10).max(2000).optional()
});

export async function load() {
	const newMeetingFormSettings = await superValidate(newMeetingSchema);
	return { newMeetingFormSettings };
}

export const actions = {
	default: async ({ request }) => {
		const newMeetingForm = await superValidate(request, newMeetingSchema);

		if (!newMeetingForm.valid) {
			return fail(400, { newMeetingForm });
		}

		const msg = newMeetingForm.data.textArea || 'No Message';
		const email = newMeetingForm.data.email || 'No Email Address';

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
				<tr>
					<td bgcolor="#70bbd9" style="padding: 40px 30px 40px 30px;">
						<h1>New Meeting Request</h1>
					</td> 
				</tr> 
				<tr>
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Name:</strong> ${newMeetingForm.data.name}</p>
						<p style="font-size: 18px;"><strong>Preferred Time:</strong> ${formatDateString(
							newMeetingForm.data.dateTime
						)}</p>
						<p style="font-size: 18px;"><strong>Mobile Number:</strong> ${newMeetingForm.data.mobileNumber}</p>
						<p style="font-size: 18px;"><strong>Email Address:</strong> ${email}</p>
						<p style="font-size: 18px;"><strong>Message:</strong> ${msg}</p>
					</td>
				</tr>
				<tr>
					<td bgcolor="#70bbd9" style="padding: 30px 30px; color: white;">
						<p style="color: #ffffff; font-size: 18px;">This message is sent from the new meeting request page.</p>
					</td>
				</tr>
			</table>
			<div style="width: 50px; height: 50px;"></div>
		`;

		await sendEmail(
			'fawzy.mohamed@alkholi.com',
			'Website Messages - New Meeting Request.',
			emailTemplate,
			emailTemplate
		);

		// reset the form values
		newMeetingForm.data.name = '';
		newMeetingForm.data.dateTime = '';
		newMeetingForm.data.mobileNumber = '';
		newMeetingForm.data.email = '';
		newMeetingForm.data.textArea = '';

		return { newMeetingForm };
	}
};
