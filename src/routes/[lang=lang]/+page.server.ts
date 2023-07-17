// console.log(`==> Running on the sever side only @home page`);

import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const query = gql`
	{
		heroSection {
			data {
				attributes {
					SectionTitle
					SectionMessage
					ButtonText
					BackgroundImage {
						data {
							attributes {
								formats
								url
							}
						}
					}
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
	}
`;

const getHeroSectionDate = async () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);

	const backgroundImageURL =
		theData.heroSection.data.attributes.BackgroundImage.data.attributes.url;
	const lgBackgroundImageURL =
		theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.large.url;
	const mdBackgroundImageURL =
		theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.medium.url;
	const smBackgroundImageURL =
		theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.small.url;
	const thumBackgroundImageURL =
		theData.heroSection.data.attributes.BackgroundImage.data.attributes.formats.thumbnail.url;

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
		backgroundImageURL,
		lgBackgroundImageURL,
		mdBackgroundImageURL,
		smBackgroundImageURL,
		thumBackgroundImageURL,
		enSectionTitle,
		enSectionMessage,
		enButtonText,
		arSectionTitle,
		arSectionMessage,
		arButtonText
	};

	const homeProductsArray = theData.homeProducts.data;

	return {
		heroSectionData,
		homeProductsArray
	};
};

const schema = z.object({
	name: z.string().min(3).max(60),
	email: z.string().email().optional(),
	mobile: z.string().min(10).max(10).optional(),
	textArea: z.string().min(3).max(500)
});

export async function load() {
	const heroSectionDate = getHeroSectionDate();

	// Server API:
	const footerFormSettings = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { footerFormSettings, heroSectionDate };
}

export const actions = {
	default: async ({ request }) => {
		const footerForm = await superValidate(request, schema);
		console.log('POST', footerForm);

		if (footerForm.data.email === undefined && footerForm.data.mobile === undefined) {
			return fail(406, { footerForm });
		}

		if (!footerForm.valid) {
			return fail(400, { footerForm });
		}

		// TODO: Do something with the validated data

		// reset the form values
		footerForm.data.name = '';
		footerForm.data.email = undefined;
		footerForm.data.mobile = undefined;
		footerForm.data.textArea = '';

		return { footerForm };
	}
};
