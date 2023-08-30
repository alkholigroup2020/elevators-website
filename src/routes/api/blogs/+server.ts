// BLOGS
import { json } from '@sveltejs/kit';
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

export async function GET() {
	const blogsData: any = await request(`${CMS_URL}/graphql`, query);
	return json(blogsData.blogs.data);
}
