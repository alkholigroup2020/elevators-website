<script lang="ts">
	import DopplerSection from '$lib/homePage/DopplerSection.svelte';
	import HeroSection from '$lib/homePage/HeroSection.svelte';
	import IntroSection from '$lib/homePage/IntroSection.svelte';
	import PartnersSection from '$lib/homePage/BrandsSection.svelte';
	import ProductsSection from '$lib/homePage/ProductsSection.svelte';
	import ServicesSection from '$lib/homePage/ServicesSection.svelte';
	import WelcomeSection from '$lib/homePage/WelcomeSection.svelte';

	export let data;
	const currentLocal = data.locale;
</script>

<HeroSection sectionData={data.data.heroSectionData} {currentLocal} />

<IntroSection {currentLocal} />

<WelcomeSection {currentLocal} />

<ProductsSection sectionData={data.data.homeProductsArray} {currentLocal} />

<DopplerSection {currentLocal} />

<ServicesSection {currentLocal} />

<div class="h-[50px] w-full bg-surface-300" />

<PartnersSection {currentLocal} />

<div class="h-[500px] w-full bg-surface-300" />
