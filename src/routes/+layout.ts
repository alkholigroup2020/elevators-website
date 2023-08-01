// import type { LayoutLoad } from './$types';
// import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load = async (data: any) => {
	// load dictionary into memory
	await loadLocaleAsync(data.data.locale);

	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(data.data.locale);

	const locale = data.data.locale;
	// const cmsNavData = data.data.cmsNavData;
	const footerFormSettings = data.data.footerFormSettings;
	// pass locale to the "rendering context"
	// , cmsNavData
	return { locale, footerFormSettings };
};
//
