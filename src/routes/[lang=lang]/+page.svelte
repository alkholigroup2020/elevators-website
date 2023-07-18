<script lang="ts">
	import DopplerSection from '$lib/homePage/DopplerSection.svelte';
	import HeroSection from '$lib/homePage/HeroSection.svelte';
	import IntroSection from '$lib/homePage/IntroSection.svelte';
	import BrandsSection from '$lib/homePage/BrandsSection.svelte';
	import ProductsSection from '$lib/homePage/ProductsSection.svelte';
	import ServicesSection from '$lib/homePage/ServicesSection.svelte';
	import WelcomeSection from '$lib/homePage/WelcomeSection.svelte';
	import ProjectsSection from '$lib/homePage/ProjectsSection.svelte';
	import QuoteSection from '$lib/homePage/QuoteSection.svelte';
	import FooterSection from '$lib/footer/FooterSection.svelte';

	export let data;
	const currentLocal = data.locale;

	import { footerFormSettingsStore } from '$lib/stores/store.js';
	footerFormSettingsStore.set(data.data.footerFormSettings);
</script>

<HeroSection sectionData={data.data.heroSectionDate.heroSectionData} {currentLocal} />

<IntroSection {currentLocal} />

<WelcomeSection {currentLocal} />

<ProductsSection sectionData={data.data.heroSectionDate.homeProductsArray} {currentLocal} />

<DopplerSection {currentLocal} />

<ServicesSection {currentLocal} />

<ProjectsSection />

<QuoteSection />

<BrandsSection />

<FooterSection {currentLocal} />
