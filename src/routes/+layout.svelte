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

	import type { LayoutData } from './$types';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store
	// and before the actual rendering takes place
	setLocale(data.locale);

	import { AppShell } from '@skeletonlabs/skeleton';
	import VeryTopNav from '$lib/navComponents/VeryTopNav.svelte';
</script>

<svelte:head>
	<title>{$page.data.title || 'BTEC'}</title>
	<meta name="description" content="An Elevators Co." />
	<HeadHrefLangs />
</svelte:head>

<!-- bg-surface-100-800-token -->

<AppShell>
	<!-- <svelte:fragment slot="pageHeader" /> -->
	<VeryTopNav />
	<!-- <svelte:fragment slot="sidebarLeft">
		Hidden below Tailwind's large breakpoint lg:block
		<div id="sidebar-left" class="block md:hidden">Sidebar</div>
	</svelte:fragment> -->

	<!-- Router Slot -->
	<slot />

	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
