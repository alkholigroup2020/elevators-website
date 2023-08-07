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

	export let data;
</script>

<HeroSection />

<IntroSection />

<WelcomeSection />

<ProductsSection sectionData={data.data.homePageCMSData.homeProductsArray} />

<DopplerSection />

<ServicesSection />

<ProjectsSection sectionData={data.data.homePageCMSData.projectsData} />

<QuoteSection />

<BrandsSection />
