// console.log(`Running on the client and server sides @home page`);

import type { PageLoad } from './$types';
import LL, { setLocale } from '$i18n/i18n-svelte';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ parent, data }) => {
	/*
		This data property is coming from the +page.server.js.
		And this is how we pass the data to the +page.svelte when 
		we have both +page.server.js & +page.js
	*/

	// wait for `+layout.ts` to load dictionary and pass locale information
	const { locale } = await parent();
	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale);

	// get the translation functions value from the store
	const $LL = get(LL);

	return {
		// setting the website title
		title: $LL.title(),
		data
	};
};
