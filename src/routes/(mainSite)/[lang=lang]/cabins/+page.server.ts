import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		cabinImages {
			data {
				attributes {
					description
					thumb_100_100 {
						data {
							attributes {
								url
							}
						}
					}
					small_380_570 {
						data {
							attributes {
								url
							}
						}
					}
					medium_450_540 {
						data {
							attributes {
								url
							}
						}
					}
					large_550_605 {
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

const pageData = async () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);
	return theData.cabinImages.data;
};

export async function load() {
	const pageCMSData = pageData();

	return { pageCMSData };
}
