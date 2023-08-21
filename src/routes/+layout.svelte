<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { setLocale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

	import { Modal } from '@skeletonlabs/skeleton';

	export let data;

	import { footerFormSettingsStore } from '$lib/stores/store.js';
	footerFormSettingsStore.set(data.footerFormSettings);

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	import LL from '$i18n/i18n-svelte';

	import WindowSize from '$lib/generalComponents/WindowSize.svelte';

	$: devOrProduction = process.env.NODE_ENV === 'development' ? true : false;
</script>

<svelte:head>
	<title>{$LL.title()}</title>
	<meta name="description" content="An Elevators Co." />
	<HeadHrefLangs />
</svelte:head>

{#if devOrProduction}
	<WindowSize />
{/if}

<Modal />

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');

	/* :global(body) {
		font-family: 'Tajawal', sans-serif;
	} */
</style>
