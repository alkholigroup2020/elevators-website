import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return { contractID: params.client };
}) satisfies PageServerLoad;
