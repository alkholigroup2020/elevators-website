// MEDIA
import { json } from '@sveltejs/kit';
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

export async function GET() {
	const mediaData: any = await request(`${CMS_URL}/graphql`, query);
	return json(mediaData.mediaLiberaries.data);
}
