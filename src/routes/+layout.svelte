<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import Header from '$lib/Header.svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	console.info($LL.log({ fileName: '+layout.svelte' }));
</script>

<Header />

<main>
	<slot />
</main>

<svelte:head>
	<title>{$page.data.title || 'BTEC'}</title>
	<HeadHrefLangs />
</svelte:head>
