<script lang="ts">
	// import { page } from '$app/stores';
	// import { browser } from '$app/environment';

	import HeroSection from '$lib/homePage/HeroSection.svelte';
	import IntroSection from '$lib/homePage/IntroSection.svelte';

	// const lang = $page.params.lang;
	// if (browser) {
	// 	localStorage.setItem('language', lang);
	// }

	export let data;

	const currentLocal = data.locale;
</script>

<HeroSection sectionData={data.data} {currentLocal} />

<IntroSection {currentLocal} />

<div class="h-[1200px] w-full bg-slate-400" />
<!-- <p>{data.enSectionTitle}</p> -->

<!-- <div
	dir={`${lang === 'ar' ? 'rtl' : 'ltr'}`}
	class="container h-full mx-auto flex justify-center items-center"
>
	<div class="space-y-5">
		<h1 class="h1">{$LL.mainTitle()}</h1>
		<div dir="ltr" class="py-12">
			<LightSwitch />
		</div>
		<div>
			<LocaleSwitcher />
		</div>
		<div>
			<p>The current Lang is: {lang}</p>
		</div>
	</div>
</div> -->
