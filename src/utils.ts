// Replaces the locale slug in a URL.
//
// If the `full` argument is set to `true`, the full URL is returned as a string.
// e.g. https://mywebsite.com/en/blog/article-1 => https://mywebsite.com/de/blog/article-1
//
// Otherwise (default) the URL relative to the base is returned.
// e.g. https://mywebsite.com/en/blog/article-1 => /de/blog/article-1

// export const replaceLocaleInUrl = (url: URL, locale: string, full = false): string => {
// 	const [, , ...rest] = url.pathname.split('/');
// 	const new_pathname = `/${[locale, ...rest].join('/')}`;
// 	if (!full) {
// 		return `${new_pathname}${url.search}`;
// 	}
// 	const newUrl = new URL(url.toString());
// 	newUrl.pathname = new_pathname;
// 	return newUrl.toString();
// };

/**
 * Replaces the locale segment in a given URL's pathname with a new locale.
 *
 * @param {URL} url - The input URL object.
 * @param {string} locale - The new locale to replace the existing one.
 * @param {boolean} [full=false] - When true, the function returns the full URL, including the origin; otherwise, it returns only the modified pathname and query parameters.
 * @returns {string} - The modified URL as a string.
 */
export const replaceLocaleInUrl = (url: URL, locale: string, full = false): string => {
	// Split the URL pathname into segments
	const [, , ...rest] = url.pathname.split('/');

	// Create a new pathname by replacing the existing locale with the new one
	const new_pathname = `/${[locale, ...rest].join('/')}`;

	// If the full parameter is false, return the modified pathname and query parameters
	if (!full) {
		return `${new_pathname}${url.search}`;
	}

	// If the full parameter is true, create a new URL object, update its pathname, and return the full URL as a string
	const newUrl = new URL(url.toString());
	newUrl.pathname = new_pathname;
	return newUrl.toString();
};
