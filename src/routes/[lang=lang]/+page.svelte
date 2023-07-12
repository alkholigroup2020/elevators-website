<script lang="ts">
	import DopplerSection from '$lib/homePage/DopplerSection.svelte';
	import HeroSection from '$lib/homePage/HeroSection.svelte';
	import IntroSection from '$lib/homePage/IntroSection.svelte';
	import Products from '$lib/homePage/Products.svelte';
	import WelcomeSection from '$lib/homePage/WelcomeSection.svelte';

	export let data;
	const currentLocal = data.locale;
</script>

<HeroSection sectionData={data.data.heroSectionData} {currentLocal} />

<IntroSection {currentLocal} />

<WelcomeSection {currentLocal} />

<Products sectionData={data.data.homeProductsArray} {currentLocal} />

<DopplerSection {currentLocal} />

<div class="h-[1200px] w-full bg-surface-300" />
