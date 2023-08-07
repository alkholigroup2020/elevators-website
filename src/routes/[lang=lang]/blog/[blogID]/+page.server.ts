import type { PageServerLoad } from './$types';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const pageData = async (query: string) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);
	return theData.blogs.data[0].attributes;
};

export const load = (async ({ params }) => {
	const query = gql`
	{
		blogs(filters: { ID_And_Order: { eq: ${params.blogID} } }) {
			data {
				attributes {
					Blog_Title
					Blog_Details {
						__typename
						... on ComponentBlogSimpleParagraph {
							simple_paragraph
						}
						__typename
						... on ComponentBlogParagraphWithTitle {
							paragraph_title
							paragraph
						}
						__typename
						... on ComponentBlogList {
							list_title
							list_introduction
							blog_list_item {
								line
							}
						}
					}
					localizations {
						data {
							attributes {
								Blog_Title
								Blog_Details {
									__typename
									... on ComponentBlogSimpleParagraph {
										simple_paragraph
									}
									__typename
									... on ComponentBlogParagraphWithTitle {
										paragraph_title
										paragraph
									}
									__typename
									... on ComponentBlogList {
										list_title
										list_introduction
										blog_list_item {
											line
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

	const pageCMSData = pageData(query);
	return { pageCMSData };
}) satisfies PageServerLoad;
