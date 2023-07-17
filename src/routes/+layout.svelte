<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { page } from '$app/stores';
	import { setLocale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

	// import type { LayoutData } from './$types';

	export let data;

	// at the very top, set the locale before you access the store
	// and before the actual rendering takes place
	setLocale(data.locale);

	import { AppShell } from '@skeletonlabs/skeleton';
	import VeryTopNav from '$lib/navComponents/VeryTopNav.svelte';
	import Navbar from '$lib/navComponents/Navbar.svelte';

	import { Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';

	import type { NavData } from '../types/nav.type';
	import VeryButtonFooter from '$lib/footer/VeryButtonFooter.svelte';

	const theNavData: NavData = data.cmsData;
	const currentLocal = data.locale;
</script>

<svelte:head>
	<title>{$page.data.title || 'BTEC'}</title>
	<meta name="description" content="An Elevators Co." />
	<HeadHrefLangs />
</svelte:head>

<!-- bg-surface-100-800-token -->
<!-- {$LL.veryTopNav.mobile()} -->
<Drawer>
	{#if $drawerStore.id === 'id-1'}
		<nav class="space-y-4 flex flex-col p-10">
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link1</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link2</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link3</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link4</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link5</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link6</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link7</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link8</a>
			<a href="/" aria-label="some link" class="text-gray-500 hover:text-gray-700">Link9</a>
		</nav>
	{:else if $drawerStore.id === 'id-2'}
		<!-- (show 'example-2' contents) -->
	{:else}
		<!-- (fallback contents) -->
	{/if}
</Drawer>

<AppShell>
	<!-- <svelte:fragment slot="pageHeader" /> -->
	<VeryTopNav />

	<Navbar theNavbarData={theNavData} {currentLocal} />

	<!-- <svelte:fragment slot="sidebarLeft">
		Hidden below Tailwind's large breakpoint lg:block
		<div id="sidebar-left" class="block md:hidden">Sidebar</div>
	</svelte:fragment> -->

	<!-- Router Slot -->
	<slot />

	<VeryButtonFooter />

	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');

	:global(body) {
		font-family: 'Tajawal', sans-serif;
	}
</style>
