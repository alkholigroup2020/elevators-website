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

	import { onMount } from 'svelte';

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
	import Analytics from '$lib/Analytics.svelte';
	import { any } from 'zod';

	$: devOrProduction = process.env.NODE_ENV === 'development' ? true : false;

	onMount(() => {
		(function (h, o, t, j, a, r) {
			// @ts-ignore
			h.hj =
				// @ts-ignore
				h.hj ||
				function () {
					// @ts-ignore
					(h.hj.q = h.hj.q || []).push(arguments);
				};
			// @ts-ignore
			h._hjSettings = { hjid: 2670023, hjsv: 6 };
			// @ts-ignore
			a = o.getElementsByTagName('head')[0];
			// @ts-ignore
			r = o.createElement('script');
			// @ts-ignore
			r.async = 1;
			// @ts-ignore
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			// @ts-ignore
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
	});
</script>

<svelte:head>
	<title>{$LL.title()}</title>

	<meta name="description" content={$LL.seo.description1()} />

	<meta name="keywords" content={$LL.seo.keywords()} />

	<!-- Meta Robots -->

	<meta name="robots" content="index, follow" />

	<!-- Canonical Tag -->

	<link rel="canonical" href="https://www.buildingtec-elevators.com/" />

	<!-- Hreflang Tags -->

	<link rel="alternate" href="https://www.buildingtec-elevators.com/en/" hreflang="en" />

	<link rel="alternate" href="https://www.buildingtec-elevators.com/ar/" hreflang="ar" />

	<!-- Open Graph Tags -->

	<!-- en -->
	<meta
		property="og:title"
		content="BuildingTec Elevators - Quality Elevator Installation and Maintenance"
	/>
	<meta
		property="og:description"
		content="BuildingTec Elevators, the top elevator installation and maintenance company offering quality services and cutting-edge products including passenger elevators, car elevators, cargo lifts, and more."
	/>
	<meta property="og:url" content="https://www.buildingtec-elevators.com/" />
	<meta property="og:site_name" content="BuildingTec Elevators" />
	<meta property="og:type" content="website" />

	<!-- ar -->
	<meta property="og:title" content="مصاعد فن المعمار - تركيب وصيانة المصاعد بجودة عالية" />
	<meta
		property="og:description"
		content="مصاعد فن المعمار، الشركة الرائدة في تركيب وصيانة المصاعد، تقدم خدمات عالية الجودة ومنتجات ذات تكنولوجيا متقدمة بما في ذلك المصاعد الركاب، المصاعد السيارات، المصاعد البضائع، وأكثر من ذلك."
	/>
	<meta property="og:url" content="https://www.buildingtec-elevators.com/ar/" />
	<meta property="og:site_name" content="مصاعد فن المعمار" />
	<meta property="og:type" content="website" />

	<HeadHrefLangs />
</svelte:head>

{#if devOrProduction}
	<WindowSize />
{/if}

<Modal />

<Analytics />

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
</style>
