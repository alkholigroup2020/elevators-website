import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		mediaLiberaries {
			data {
				id
				attributes {
					videoID
					title
					description {
						description_line
					}
					localizations {
						data {
							attributes {
								title
								description {
									description_line
								}
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
	return theData.mediaLiberaries.data;
};

export async function load() {
	const pageCMSData = pageData();

	// Always return { form } in load and form actions.
	return { pageCMSData };
}
