// console.log(`==> Running on the sever side only @home page`);

import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	name: z.string().min(3).max(60),
	email: z.string().email().optional(),
	mobile: z.string().min(10).max(10).optional(),
	textArea: z.string().min(3).max(500)
});

export async function load({ locals: { locale } }) {
	// Server API:
	const footerFormSettings = await superValidate(schema);

	// pass locale information from "server-context" to "shared server + client context"
	return { locale, footerFormSettings };
}
