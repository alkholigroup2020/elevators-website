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

export async function load() {
	const homePageCMSData = homePageData();

	// Always return { form } in load and form actions.
	return { homePageCMSData };
}
