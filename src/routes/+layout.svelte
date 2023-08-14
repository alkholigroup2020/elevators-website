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

	// import { page } from '$app/stores';
	import { setLocale } from '$i18n/i18n-svelte';
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

	// import type { LayoutData } from './$types';

	import { currentAppLang } from '$lib/stores/store';

	import { Modal } from '@skeletonlabs/skeleton';

	export let data;

	import { footerFormSettingsStore } from '$lib/stores/store.js';
	footerFormSettingsStore.set(data.footerFormSettings);

	// at the very top, set the locale before you access the store
	// and before the actual rendering takes place
	setLocale(data.locale);

	// import { AppShell } from '@skeletonlabs/skeleton';
	import VeryTopNav from '$lib/navComponents/VeryTopNav.svelte';
	import Navbar from '$lib/navComponents/Navbar.svelte';

	import { Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';

	import FooterSection from '$lib/footer/FooterSection.svelte';

	// import type { NavData } from '../types/nav.type';
	import VeryButtonFooter from '$lib/footer/VeryButtonFooter.svelte';

	// const theNavData: NavData = data.cmsNavData;

	import { navigating } from '$app/stores';

	import LL from '$i18n/i18n-svelte';
	import ScrollTopButton from '$lib/generalComponents/ScrollTopButton.svelte';

	import { goto } from '$app/navigation';
	import WindowSize from '$lib/generalComponents/WindowSize.svelte';
	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';

	let navigate = async (event: Event) => {
		event.preventDefault();

		let targetId = (event.target as HTMLAnchorElement).hash;
		let target = document.querySelector(targetId);

		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		} else {
			// If the target doesn't exist on the current page, navigate to the homepage
			// and then scroll to the target.

			await goto(`/${$currentAppLang}`);
			target = document.querySelector(targetId);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

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

{#if $navigating}
	<LoadingSpinner />
{:else}
	<Drawer>
		{#if $drawerStore.id === 'id-1'}
			<nav class="space-y-4 flex flex-col p-10">
				<a
					href={`/${$currentAppLang}`}
					aria-label="a link to the home page"
					class="hover:text-secondary-300"
					>{$LL.mainNav.home()}
				</a>
				<a
					href={`#products`}
					on:click={navigate}
					aria-label="a link to the products section"
					class="hover:text-secondary-300"
					>{$LL.mainNav.products()}
				</a>
				<a
					href={`/${$currentAppLang}/about`}
					aria-label="a link to the about page"
					class="hover:text-secondary-300"
					>{$LL.mainNav.about()}
				</a>
				<a
					href={`/${$currentAppLang}/cabins`}
					aria-label="a link to the cabins page"
					class="hover:text-secondary-300"
					>{$LL.mainNav.cabins()}
				</a>
				<a
					href={`#projects`}
					on:click={navigate}
					aria-label="a link to the projects section"
					class="hover:text-secondary-300"
					>{$LL.mainNav.projects()}
				</a>
				<a
					href={`#brands`}
					on:click={navigate}
					aria-label="a link to the brands section"
					class="hover:text-secondary-300"
					>{$LL.mainNav.brands()}
				</a>
				<a
					href={`/${$currentAppLang}/media`}
					aria-label="a link to the media page"
					class="hover:text-secondary-300"
					>{$LL.mainNav.media()}
				</a>
				<a
					href={`/${$currentAppLang}/career`}
					aria-label="a link to the career page"
					class="hover:text-secondary-300"
					>{$LL.mainNav.career()}
				</a>
				<a
					href={`/${$currentAppLang}/blog`}
					aria-label="a link to the blog page"
					class="hover:text-secondary-300"
					>{$LL.mainNav.blog()}
				</a>
				<a
					href={`#quote`}
					on:click={navigate}
					aria-label="a link to the quote section"
					class="hover:text-secondary-300"
					>{$LL.mainNav.quote()}
				</a>
			</nav>
		{:else if $drawerStore.id === 'id-2'}
			(show 'example-2' contents)
		{:else}
			(fallback contents)
		{/if}
	</Drawer>

	<VeryTopNav />

	<Navbar />

	<ScrollTopButton />

	<slot />

	<FooterSection />

	<VeryButtonFooter />
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');

	/* :global(body) {
		font-family: 'Tajawal', sans-serif;
	} */
</style>
