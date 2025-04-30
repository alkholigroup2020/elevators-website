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

	$: devOrProduction = process.env.NODE_ENV === 'development' ? true : false;

	onMount(() => {
		// hotjar
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
	<!-- DNS Prefetch -->
	<link rel="dns-prefetch" href="https://www.buildingtec-elevators.com" />

	<!-- Preconnect to required origins -->
	<link rel="preconnect" href="https://www.buildingtec-elevators.com" />

	<title>{$LL.title()}</title>

	<meta name="description" content={$LL.seo.description1()} />

	<meta name="keywords" content={$LL.seo.keywords()} />

	<!-- Cache control -->
	<meta http-equiv="Cache-Control" content="public, max-age=31536000" />

	<!-- Meta Robots -->
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

	<!-- Canonical Tag -->
	<link rel="canonical" href="https://www.buildingtec-elevators.com/" />

	<HeadHrefLangs />

	<!-- Open Graph Tags -->
	<meta property="og:type" content="website" />

	<!-- en -->
	<meta
		property="og:title"
		content="BuildingTec Elevators - Quality Elevator Installation and Maintenance"
	/>
	<meta property="og:url" content="https://www.buildingtec-elevators.com/" />
	<meta property="og:site_name" content="BuildingTec Elevators" />

	<meta
		name="description"
		content="BuildingTec Elevators, the top elevator installation and maintenance company offering quality services and cutting-edge products including passenger elevators, car elevators, cargo lifts, and more"
	/>
	<meta name="description" content="Elevator" />
	<meta name="description" content="Best Elevator company in Saudi Arabia" />
	<meta name="description" content="Elevators Company in Jeddah" />
	<meta name="description" content="Elevator Company in Riyadh" />
	<meta name="description" content="Elevator company in Saudi Arabia" />
	<meta name="description" content="Elevator company in KSA" />
	<meta name="description" content="Elevator Riyadh" />
	<meta name="description" content="Elevator Jeddah" />
	<meta name="description" content="Home elevator in Riyadh" />
	<meta name="description" content="Home elevator in Jeddah" />
	<meta name="description" content="Home elevator in saudi arabia" />
	<meta name="description" content="Car Elevator in Saudi Arabia" />
	<meta name="description" content="Car Elevator in Riyadh" />
	<meta name="description" content="Car Elevator in Jeddah" />
	<meta name="description" content="Cargo lift in Saudi arabia" />
	<meta name="description" content="Cargo lift in Riyadh" />
	<meta name="description" content="Cargo lift in jeddah" />
	<meta name="description" content="Dumbwaiter in riyadh" />
	<meta name="description" content="Dumbwaiter in jeddah" />
	<meta name="description" content="Dumbwaiter in Saudi arabia" />
	<meta name="description" content="Escalator in Saudi Arabia" />
	<meta name="description" content="Escalator in riyadh" />
	<meta name="description" content="Escalator in Jeddah" />
	<meta name="description" content="Panoramic Elevators in jeddah" />
	<meta name="description" content="Panoramic elevator in riyadh" />
	<meta name="description" content="Panoramic elevator in Saudi arabia" />
	<meta name="description" content="parking system in jeddah" />
	<meta name="description" content="parking system in riyadh" />
	<meta name="description" content="parking system in Saudi arabia" />

	<meta
		name="keywords"
		content="BuildingTec Elevators, the top elevator installation and maintenance company offering quality services and cutting-edge products including passenger elevators, car elevators, cargo lifts, and more"
	/>
	<meta name="keywords" content="Elevator" />
	<meta name="keywords" content="Best Elevator company in Saudi Arabia" />
	<meta name="keywords" content="Elevators Company in Jeddah" />
	<meta name="keywords" content="Elevator Company in Riyadh" />
	<meta name="keywords" content="Elevator company in Saudi Arabia" />
	<meta name="keywords" content="Elevator company in KSA" />
	<meta name="keywords" content="Elevator Riyadh" />
	<meta name="keywords" content="Elevator Jeddah" />
	<meta name="keywords" content="Home elevator in Riyadh" />
	<meta name="keywords" content="Home elevator in Jeddah" />
	<meta name="keywords" content="Home elevator in saudi arabia" />
	<meta name="keywords" content="Car Elevator in Saudi Arabia" />
	<meta name="keywords" content="Car Elevator in Riyadh" />
	<meta name="keywords" content="Car Elevator in Jeddah" />
	<meta name="keywords" content="Cargo lift in Saudi arabia" />
	<meta name="keywords" content="Cargo lift in Riyadh" />
	<meta name="keywords" content="Cargo lift in jeddah" />
	<meta name="keywords" content="Dumbwaiter in riyadh" />
	<meta name="keywords" content="Dumbwaiter in jeddah" />
	<meta name="keywords" content="Dumbwaiter in Saudi arabia" />
	<meta name="keywords" content="Escalator in Saudi Arabia" />
	<meta name="keywords" content="Escalator in riyadh" />
	<meta name="keywords" content="Escalator in Jeddah" />
	<meta name="keywords" content="Panoramic Elevators in jeddah" />
	<meta name="keywords" content="Panoramic elevator in riyadh" />
	<meta name="keywords" content="Panoramic elevator in Saudi arabia" />
	<meta name="keywords" content="parking system in jeddah" />
	<meta name="keywords" content="parking system in riyadh" />
	<meta name="keywords" content="parking system in Saudi arabia" />

	<!-- ar -->
	<meta property="og:url" content="https://www.buildingtec-elevators.com/ar/" />
	<meta property="og:title" content="مصاعد فن المعمار - تركيب وصيانة المصاعد بجودة عالية" />
	<meta property="og:site_name" content="مصاعد فن المعمار" />

	<meta
		name="description"
		content="مصاعد فن المعمار، الشركة الرائدة في تركيب وصيانة المصاعد، تقدم خدمات عالية الجودة ومنتجات ذات تكنولوجيا متقدمة بما في ذلك المصاعد الركاب، المصاعد السيارات، المصاعد البضائع، وأكثر من ذلك."
	/>
	<meta name="description" content="مصاعد" />
	<meta name="description" content="نحن أفضل شركة مصاعد في المملكة العربية السعودية" />
	<meta name="description" content="شركة مصاعد في جدة" />
	<meta name="description" content="شركة مصاعد في الرياض" />
	<meta name="description" content="شركة مصاعد في المملكة العربية السعودية" />
	<meta name="description" content="شركة مصاعد في السعودية" />
	<meta name="description" content="مصاعد في الرياض" />
	<meta name="description" content="مصاعد في جدة" />
	<meta name="description" content="مصعد منزلي بالرياض" />
	<meta name="description" content="مصعد منزلي في جدة" />
	<meta name="description" content="مصعد منزلي في السعودية" />
	<meta name="description" content="مصعد سيارات في السعودية" />
	<meta name="description" content="مصعد سيارات في الرياض" />
	<meta name="description" content="مصعد سيارات في جدة" />
	<meta name="description" content="مصعد بضائع في السعودية" />
	<meta name="description" content="مصعد بضائع في الرياض" />
	<meta name="description" content="مصعد بضائع في جدة" />
	<meta name="description" content="مصعد طعام في الرياض" />
	<meta name="description" content="مصعد طعام في جدة" />
	<meta name="description" content="مصعد طعام في السعودية" />
	<meta name="description" content="سلالم متحركة في السعودية" />
	<meta name="description" content="سلالم متحركة في الرياض" />
	<meta name="description" content="سلالم متحركة في جدة" />
	<meta name="description" content="مصاعد بانوراما في جدة" />
	<meta name="description" content="مصاعد بانوراما في الرياض" />
	<meta name="description" content="مصاعد بانوراما في السعودية" />
	<meta name="description" content="مواقف السيارات الذكية في جدة" />
	<meta name="description" content="مواقف السيارات الذكية في الرياض" />
	<meta name="description" content="مواقف السيارات الذكية في السعودية" />

	<meta
		name="keywords"
		content="مصاعد فن المعمار، الشركة الرائدة في تركيب وصيانة المصاعد، تقدم خدمات عالية الجودة ومنتجات ذات تكنولوجيا متقدمة بما في ذلك المصاعد الركاب، المصاعد السيارات، المصاعد البضائع، وأكثر من ذلك."
	/>
	<meta name="keywords" content="مصاعد" />
	<meta name="keywords" content="نحن أفضل شركة مصاعد في المملكة العربية السعودية" />
	<meta name="keywords" content="شركة مصاعد في جدة" />
	<meta name="keywords" content="شركة مصاعد في الرياض" />
	<meta name="keywords" content="شركة مصاعد في المملكة العربية السعودية" />
	<meta name="keywords" content="شركة مصاعد في السعودية" />
	<meta name="keywords" content="مصاعد في الرياض" />
	<meta name="keywords" content="مصاعد في جدة" />
	<meta name="keywords" content="مصعد منزلي بالرياض" />
	<meta name="keywords" content="مصعد منزلي في جدة" />
	<meta name="keywords" content="مصعد منزلي في السعودية" />
	<meta name="keywords" content="مصعد سيارات في السعودية" />
	<meta name="keywords" content="مصعد سيارات في الرياض" />
	<meta name="keywords" content="مصعد سيارات في جدة" />
	<meta name="keywords" content="مصعد بضائع في السعودية" />
	<meta name="keywords" content="مصعد بضائع في الرياض" />
	<meta name="keywords" content="مصعد بضائع في جدة" />
	<meta name="keywords" content="مصعد طعام في الرياض" />
	<meta name="keywords" content="مصعد طعام في جدة" />
	<meta name="keywords" content="مصعد طعام في السعودية" />
	<meta name="keywords" content="سلالم متحركة في السعودية" />
	<meta name="keywords" content="سلالم متحركة في الرياض" />
	<meta name="keywords" content="سلالم متحركة في جدة" />
	<meta name="keywords" content="مصاعد بانوراما في جدة" />
	<meta name="keywords" content="مصاعد بانوراما في الرياض" />
	<meta name="keywords" content="مصاعد بانوراما في السعودية" />
	<meta name="keywords" content="مواقف السيارات الذكية في جدة" />
	<meta name="keywords" content="مواقف السيارات الذكية في الرياض" />
	<meta name="keywords" content="مواقف السيارات الذكية في السعودية" />
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
