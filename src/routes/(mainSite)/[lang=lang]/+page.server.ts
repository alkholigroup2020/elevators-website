// console.log(`==> Running on the sever side only @home page`);

import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
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

	const projectsData = theData.projects.data;

	return {
		projectsData
	};
};

export async function load() {
	const homePageCMSData = homePageData();
	return { homePageCMSData };
}
