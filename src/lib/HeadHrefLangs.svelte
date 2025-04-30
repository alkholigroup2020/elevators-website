<script lang="ts">
	import { locales, baseLocale } from '$i18n/i18n-util';
	import { page } from '$app/stores';
	import { replaceLocaleInUrl } from '../utils';

	const domain = 'https://www.buildingtec-elevators.com';
</script>

{#each locales as l}
	<link rel="alternate" hreflang={l} href={`${domain}${replaceLocaleInUrl($page.url, l, true)}`} />
{/each}
<link
	rel="alternate"
	hreflang="x-default"
	href={`${domain}${replaceLocaleInUrl($page.url, baseLocale, true)}`}
/>
