<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { modeCurrent } from '@skeletonlabs/skeleton';

	import { currentAppLang } from '$lib/stores/store';

	export let data;

	import { footerFormSettingsStore } from '$lib/stores/store.js';
	footerFormSettingsStore.set(data.footerFormSettings);

	import VeryTopNav from '$lib/navComponents/VeryTopNav.svelte';
	import Navbar from '$lib/navComponents/Navbar.svelte';

	import { Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';

	import FooterSection from '$lib/footer/FooterSection.svelte';

	import VeryButtonFooter from '$lib/footer/VeryButtonFooter.svelte';

	import { navigating } from '$app/stores';

	import LL from '$i18n/i18n-svelte';
	import ScrollTopButton from '$lib/generalComponents/ScrollTopButton.svelte';

	import { goto } from '$app/navigation';
	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';

	let navigate = async (event: Event) => {
		event.preventDefault();

		let targetId = (event.target as HTMLAnchorElement).hash;
		let target = document.querySelector(targetId);

		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			drawerStore.close();
		} else {
			// If the target doesn't exist on the current page, navigate to the homepage
			// and then scroll to the target.

			await goto(`/${$currentAppLang}`);
			target = document.querySelector(targetId);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
			drawerStore.close();
		}
	};
</script>

<!-- {#if $navigating}
	<LoadingSpinner />
{:else}
	
{/if} -->

<Drawer>
	{#if $drawerStore.id === 'id-1'}
		<div class="px-10 pt-8 max-w-[250px]">
			<!-- text logo -->
			{#if $modeCurrent}
				<img
					loading="lazy"
					src="/logo_text_black_240x60.webp"
					alt="company's logo"
					class="w-full aspect-[4/1] max-h-9"
				/>
			{:else}
				<img
					loading="lazy"
					src="/logo_text_white_240x60.webp"
					alt="company's logo"
					class="w-full aspect-[4/1] max-h-9"
				/>
			{/if}
		</div>
		<div class="px-10 py-5">
			<hr />
		</div>
		<nav class="space-y-4 flex flex-col px-10">
			<a
				href={`/${$currentAppLang}`}
				on:click={() => {
					drawerStore.close();
				}}
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
				on:click={() => {
					drawerStore.close();
				}}
				aria-label="a link to the about page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.about()}
			</a>
			<a
				href={`/${$currentAppLang}/cabins`}
				on:click={() => {
					drawerStore.close();
				}}
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
				on:click={() => {
					drawerStore.close();
				}}
				aria-label="a link to the media page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.media()}
			</a>
			<a
				href={`/${$currentAppLang}/career`}
				on:click={() => {
					drawerStore.close();
				}}
				aria-label="a link to the career page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.career()}
			</a>
			<a
				href={`/${$currentAppLang}/blog`}
				on:click={() => {
					drawerStore.close();
				}}
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
