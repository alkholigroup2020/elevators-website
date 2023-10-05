import { json } from '@sveltejs/kit';

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
					projectCover_600x500 {
						data {
							attributes {
								url
							}
						}
					}
					projectImages_500x600 {
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

export async function GET() {
	const projectsData: any = await request(`${CMS_URL}/graphql`, query);
	return json(projectsData.projects.data);
}
