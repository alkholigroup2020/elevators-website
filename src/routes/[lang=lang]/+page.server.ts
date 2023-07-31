// console.log(`==> Running on the sever side only @home page`);

import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { sendEmail } from '$lib/serverFiles/emailService.js';

// BackgroundImage {
// 	data {
// 		attributes {
// 			formats
// 			url
// 		}
// 	}
// }

const query = gql`
	{
		heroSection {
			data {
				attributes {
					SectionTitle
					SectionMessage
					ButtonText
					localizations {
						data {
							attributes {
								SectionTitle
								SectionMessage
								ButtonText
							}
						}
					}
				}
			}
		}
		homeProducts {
			data {
				attributes {
					localizations {
						data {
							attributes {
								productTitle
								productBrief
							}
						}
					}
					productTitle
					productBrief
					linkName
					productOrder
					productImage {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
		projects {
			data {
				attributes {
					localizations {
						data {
							attributes {
								projectTitle
								projectDescription
							}
						}
					}
					projectTitle
					projectDescription
					projectTable
					projectOrder
					projectCover {
						data {
							attributes {
								url
							}
						}
					}
					projectImages {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

const homePageData = async () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);

	// const backgroundImageURL =
	// 	theData.heroSection.data.attributes.BackgroundImage.data.attributes.url;
	// const lgBackgroundImageURL =
	// 	theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.large.url;
	// const mdBackgroundImageURL =
	// 	theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.medium.url;
	// const smBackgroundImageURL =
	// 	theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.small.url;
	// const thumBackgroundImageURL =
	// 	theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.thumbnail.url;

	const enSectionTitle = theData.heroSection.data.attributes.SectionTitle;
	const enSectionMessage = theData.heroSection.data.attributes.SectionMessage;
	const enButtonText = theData.heroSection.data.attributes.ButtonText;

	const arSectionTitle =
		theData.heroSection.data.attributes.localizations.data[0].attributes.SectionTitle;
	const arSectionMessage =
		theData.heroSection.data.attributes.localizations.data[0].attributes.SectionMessage;
	const arButtonText =
		theData.heroSection.data.attributes.localizations.data[0].attributes.ButtonText;

	const heroSectionData = {
		// backgroundImageURL,
		// lgBackgroundImageURL,
		// mdBackgroundImageURL,
		// smBackgroundImageURL,
		// thumBackgroundImageURL,
		enSectionTitle,
		enSectionMessage,
		enButtonText,
		arSectionTitle,
		arSectionMessage,
		arButtonText
	};

	const homeProductsArray = theData.homeProducts.data;

	const projectsData = theData.projects.data;

	return {
		heroSectionData,
		homeProductsArray,
		projectsData
	};
};

const schema = z.object({
	name: z.string().min(3).max(60),
	email: z.string().email().optional(),
	mobile: z.string().min(10).max(10).optional(),
	textArea: z.string().min(3).max(500)
});

export async function load() {
	const homePageCMSData = homePageData();

	// Server API:
	const footerFormSettings = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { footerFormSettings, homePageCMSData };
}

export const actions = {
	default: async ({ request }) => {
		const footerForm = await superValidate(request, schema);

		if (footerForm.data.email === undefined && footerForm.data.mobile === undefined) {
			return fail(406, { footerForm });
		}

		if (!footerForm.valid) {
			return fail(400, { footerForm });
		}

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
				<tr>
					<td bgcolor="#70bbd9" style="padding: 40px 30px 40px 30px;">
						<img src="https://cms.buildingtec-elevators.com/uploads/logo_text_white_Small_9774aace41.png" alt="Creating Email Magic." width="210" height="45" style="display: block;" />
					</td>
				</tr>
				<tr>
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<h1>Footer Form</h1>
						<p style="font-size: 18px;"><strong>Name:</strong> ${footerForm.data.name}</p>
						<p style="font-size: 18px;"><strong>Email:</strong> ${footerForm.data.email || 'Not provided!'}</p>
						<p style="font-size: 18px;"><strong>Mobile:</strong> ${
							footerForm.data.mobile || 'Not provided!'
						}</p>
						<p style="font-size: 18px;"><strong>Message:</strong> ${footerForm.data.textArea}</p>
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
			'Website Messages - Footer Form.',
			emailTemplate,
			emailTemplate
		);

		// reset the form values
		footerForm.data.name = '';
		footerForm.data.email = undefined;
		footerForm.data.mobile = undefined;
		footerForm.data.textArea = '';

		return { footerForm };
	}
};
