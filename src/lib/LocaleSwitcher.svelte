<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../utils';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again <=== This what is making hover over the btn changes the language!! - But also makes the title name not changing from lang to another!
		// invalidateAll();

		// to solve the title lang issue above
		location.reload();
	};

	// update `lang` attribute
	// ===> $: browser && document.querySelector('html').setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	let currentLang: string; // my addition

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		currentLang = lang; // my addition
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

{#if currentLang === 'en'}
	<button type="button" class="btn !bg-transparent h-2">
		<a href={`${replaceLocaleInUrl($page.url, 'ar')}`} aria-label="language switch link">العربية</a>
	</button>
{/if}

{#if currentLang === 'ar'}
	<button type="button" class="btn !bg-transparent h-2">
		<a href={`${replaceLocaleInUrl($page.url, 'en')}`} aria-label="language switch link">english</a>
	</button>
{/if}

<!-- <div class="flex flex-column">
	<a href={`${replaceLocaleInUrl($page.url, 'ar')}`} class="btn variant-filled">arabic</a>
	<a href={`${replaceLocaleInUrl($page.url, 'en')}`} class="btn variant-filled mx-3">english</a>
</div> -->

<!-- <div>
	<a class="p-5" class:active={'en' === $locale} href={`${replaceLocaleInUrl($page.url, 'en')}`}>
		English
	</a>
</div>
<div>
	<a class="p-5" class:active={'ar' === $locale} href={`${replaceLocaleInUrl($page.url, 'ar')}`}>
		Arabic
	</a>
</div> -->

<!-- <ul class="flex">
	{#each locales as l}
		<li>
			<a class="p-5" class:active={l === $locale} href={`${replaceLocaleInUrl($page.url, l)}`}>
				{l}
			</a>
		</li>
	{/each}
</ul> -->
