import type { PageServerLoad } from './$types';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		blogs {
			data {
				attributes {
					Blog_Title
					ID_And_Order
					Blog_Brief
					Blog_Main_Image_w550_h385 {
						data {
							attributes {
								url
							}
						}
					}
					localizations {
						data {
							attributes {
								Blog_Title
								Blog_Brief
							}
						}
					}
				}
			}
		}
	}
`;

const pageData = async () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);
	return theData.blogs.data;
};

// export const load = (async () => {
// 	const pageCMSData = pageData();
// 	return { pageCMSData };
// }) satisfies PageServerLoad;

export const load: PageServerLoad = async () => {
	try {
		const pageCMSData = await pageData();
		return { props: { pageCMSData } };
	} catch (error) {
		console.error('Failed to load page data:', error);
		return { props: {} };
	}
};
