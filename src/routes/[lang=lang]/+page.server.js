// console.log(`==> Running on the sever side only @home page`);

import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

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
	}
`;

const getHeroSectionDate = async () => {
	const theData = await request(`${CMS_URL}/graphql`, query);

	const backgroundImageURL =
		theData.heroSection.data.attributes.BackgroundImage.data.attributes.url;

	const enSectionTitle = theData.heroSection.data.attributes.SectionTitle;
	const enSectionMessage = theData.heroSection.data.attributes.SectionMessage;
	const enButtonText = theData.heroSection.data.attributes.ButtonText;

	const arSectionTitle =
		theData.heroSection.data.attributes.localizations.data[0].attributes.SectionTitle;
	const arSectionMessage =
		theData.heroSection.data.attributes.localizations.data[0].attributes.SectionMessage;
	const arButtonText =
		theData.heroSection.data.attributes.localizations.data[0].attributes.ButtonText;

	return {
		backgroundImageURL,
		enSectionTitle,
		enSectionMessage,
		enButtonText,
		arSectionTitle,
		arSectionMessage,
		arButtonText
	};
};

export function load() {
	return getHeroSectionDate();
}
