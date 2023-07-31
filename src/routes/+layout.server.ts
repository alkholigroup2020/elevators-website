// console.log(`==> Running on the sever side only @home page`);

// import { CMS_URL } from '$env/static/private';
// import { request, gql } from 'graphql-request';

// import type { NavData } from '../types/nav.type';

// const query = gql`
// 	{
// 		generalWebsiteImages {
// 			data {
// 				attributes {
// 					UID
// 					websiteImage {
// 						data {
// 							attributes {
// 								url
// 								formats
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

// const getHeroSectionDate = async () => {
// 	const result: Partial<NavData> = {};
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const theData: any = await request(`${CMS_URL}/graphql`, query);

// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	theData.generalWebsiteImages.data.forEach((element: any) => {
// 		if (element.attributes.UID === 'main-logo') {
// 			const logoImageURL = element.attributes.websiteImage.data.attributes.url;
// 			// const smLogoImageURL = element.attributes.websiteImage.data.attributes.formats.large.url;
// 			// const mdLogoImageURL = element.attributes.websiteImage.data.attributes.formats.medium.url;
// 			// const lgLogoImageURL = element.attributes.websiteImage.data.attributes.formats.small.url;
// 			result.logoImageURL = logoImageURL;
// 			// result.smLogoImageURL = smLogoImageURL;
// 			// result.mdLogoImageURL = mdLogoImageURL;
// 			// result.lgLogoImageURL = lgLogoImageURL;
// 		} else if (element.attributes.UID === 'logo-text-white') {
// 			const whiteTextLogoURL = element.attributes.websiteImage.data.attributes.url;
// 			// const smWhiteTextLogoURL = element.attributes.websiteImage.data.attributes.formats.large.url;
// 			// const mdWhiteTextLogoURL = element.attributes.websiteImage.data.attributes.formats.medium.url;
// 			// const lgWhiteTextLogoURL = element.attributes.websiteImage.data.attributes.formats.small.url;
// 			result.whiteTextLogoURL = whiteTextLogoURL;
// 			// result.smWhiteTextLogoURL = smWhiteTextLogoURL;
// 			// result.mdWhiteTextLogoURL = mdWhiteTextLogoURL;
// 			// result.lgWhiteTextLogoURL = lgWhiteTextLogoURL;
// 		} else if (element.attributes.UID === 'logo-text-black') {
// 			const blackTextLogoURL = element.attributes.websiteImage.data.attributes.url;
// 			// const smBlackTextLogoURL = element.attributes.websiteImage.data.attributes.formats.large.url;
// 			// const mdBlackTextLogoURL = element.attributes.websiteImage.data.attributes.formats.medium.url;
// 			// const lgBlackTextLogoURL = element.attributes.websiteImage.data.attributes.formats.small.url;
// 			result.blackTextLogoURL = blackTextLogoURL;
// 			// result.smBlackTextLogoURL = smBlackTextLogoURL;
// 			// result.mdBlackTextLogoURL = mdBlackTextLogoURL;
// 			// result.lgBlackTextLogoURL = lgBlackTextLogoURL;
// 		}
// 	});

// 	return result;
// };

export async function load({ locals: { locale } }) {
	// const cmsNavData = await getHeroSectionDate();

	// pass locale information from "server-context" to "shared server + client context"
	// , cmsNavData
	return { locale };
}
