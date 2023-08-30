import { json } from '@sveltejs/kit';

import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		cabinImages(pagination: { limit: 1000 }) {
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

export async function GET() {
	const cabinsData: any = await request(`${CMS_URL}/graphql`, query);
	return json(cabinsData.cabinImages.data);
}
