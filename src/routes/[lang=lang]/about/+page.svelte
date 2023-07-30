<script>
	import FooterSection from '$lib/footer/FooterSection.svelte';
	import LL from '$i18n/i18n-svelte';
	import LazyImage from '$lib/generalComponents/LazyImage.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { onMount } from 'svelte';

	/**
	 * @type {Element}
	 */
	let imageHolder; // This will hold the reference to the second div
	let dimensions = { width: 0, height: 0 };

	onMount(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				dimensions = entry.contentRect;
			}
		});

		resizeObserver.observe(imageHolder);
	});

	async function fetchHeaderData() {
		const w800 = await fetch('/about-us/header/About us Final_800x400.webp');
		const w1600 = await fetch('/about-us/header/About us Final_1600x640.webp');
		const w2000 = await fetch('/about-us/header/About us Final_2000x500.webp');

		const result = {
			w800,
			w1600,
			w2000
		};

		// const data = await res.json();

		if (w800.ok && w1600.ok && w2000.ok) {
			return result;
		} else {
			throw new Error('Something Went Wrong!');
		}
	}

	async function fetchOurStoryData() {
		// An array of URLs
		const urls = [
			'/about-us/our-story/story_800x480.webp',
			'/about-us/our-story/story_1600x1120.webp',
			'/about-us/our-story/story_2000x1500.webp'
		];

		// Create an array of fetch promises
		const fetchPromises = urls.map((url) => fetch(url));

		try {
			// Use Promise.all to wait until all fetch requests are completed
			const responses = await Promise.all(fetchPromises);

			// Check if any of the responses have an error
			if (responses.some((response) => !response.ok)) {
				throw new Error('Something Went Wrong!');
			}

			// Construct the result object
			const result = {
				w800: responses[0],
				w1600: responses[1],
				w2000: responses[2]
			};

			return result;
		} catch (error) {
			console.error(error);
			throw new Error('Something Went Wrong!');
		}
	}

	async function fetchOurValuesData() {
		const response = await fetch('/about-us/My project_400x400.webp');

		// Handling HTTP error status
		if (!response.ok) {
			const message = `An error has occurred: ${response.status}`;
			throw new Error(message);
		}

		const result = {
			w400: response
		};

		return result;
	}

	async function fetchWhyUsData() {
		// An array of URLs
		const urls = [
			'/about-us/why-us/Why Choose Us Final_600x420.webp',
			'/about-us/why-us/Why Choose Us Final_800x480.webp'
		];

		// Create an array of fetch promises
		const fetchPromises = urls.map((url) => fetch(url));

		try {
			// Use Promise.all to wait until all fetch requests are completed
			const responses = await Promise.all(fetchPromises);

			// Check if any of the responses have an error
			if (responses.some((response) => !response.ok)) {
				throw new Error('Something Went Wrong!');
			}

			// Construct the result object
			const result = {
				w600: responses[0],
				w800: responses[1]
			};

			return result;
		} catch (error) {
			console.error(error);
			throw new Error('Something Went Wrong!');
		}
	}
</script>

<div class="flex flex-col items-center" dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		{#await fetchHeaderData()}
			<div class="placeholder animate-pulse rounded-lg h-[200px]" />
		{:then items}
			<!-- opacity-0 transition-opacity duration-3000 ease-in-out -->
			<LazyImage
				src={items.w2000.url}
				srcset={`${items.w800.url} 768w, ${items.w1600.url} 1536w, ${items.w2000.url} 8000w`}
				alt={`About-us page background`}
				appliedClass={`w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]`}
			/>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
		<div class="absolute inset-0 bg-black opacity-30" />
		<div class="absolute w-screen h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-5xl lg:text-7xl font-bold text-white pb-16"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.aboutUs.title()}
				</h1>
			</div>
		</div>
	</section>

	<!-- Our Story Section -->
	<section class="container mx-auto px-5 2xl:px-0 my-12 md:my-16 sm:text-justify">
		<div>
			<p class="text-3xl lg:text-5xl text-primary-500 font-bold mb-4 xl:mb-8">
				{$LL.aboutUs.ourStory.title()}
			</p>
		</div>

		<div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
			<div>
				<ul class="text-xl leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p1()}</li>
					<li>{$LL.aboutUs.ourStory.p2()}</li>
				</ul>
			</div>
			<div>
				{#await fetchOurStoryData()}
					<div class="placeholder animate-pulse rounded-lg h-[200px]" />
				{:then items}
					<LazyImage
						src={items.w2000.url}
						srcset={`${items.w800.url} 768w, ${items.w1600.url} 1536w, ${items.w2000.url} 8000w`}
						alt={`About us page background`}
						appliedClass={`w-full lg:p-16 xl:p-0 aspect-[1/0.6] md:aspect-[1/0.7] xl:aspect-[1/0.75] opacity-0 transition-opacity duration-3000 ease-in-out`}
					/>
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</div>
		</div>

		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-12 mt-10">
			<div>
				<ul class="text-xl leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p3()}</li>
				</ul>
			</div>
			<div>
				<ul class="text-xl leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p4()}</li>
				</ul>
			</div>
		</div>

		<div class="h-[1px] w-full bg-surface-900-50-token mt-12" />
	</section>

	<!-- Our Values Section -->
	<section class="container mx-auto px-5 2xl:px-0 mb-8 md:mb-16">
		<div>
			<p class="text-3xl lg:text-5xl text-primary-500 font-bold mb-12 text-center">
				{$LL.aboutUs.ourValues.title()}
			</p>
		</div>
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
			<div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v1()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p1()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v2()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p2()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v3()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p3()}</p>
				</div>
			</div>

			<div>
				<div class="px-12 flex justify-center">
					<div class="max-w-[400px]">
						{#await fetchOurValuesData()}
							<div class="placeholder animate-pulse rounded-lg h-[200px]" />
						{:then items}
							<LazyImage
								src={items.w400.url}
								alt={`Our values hero`}
								appliedClass={`w-full aspect-[1/1] opacity-0 transition-opacity duration-3000 ease-in-out`}
							/>
						{:catch error}
							<p style="color: red">{error.message}</p>
						{/await}
					</div>
				</div>
			</div>

			<div class="xl:text-right">
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v4()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p4()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v5()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p5()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v6()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p6()}</p>
				</div>
			</div>
		</div>
		<div class="h-[1px] w-full bg-surface-900-50-token mt-10" />
	</section>

	<!-- Why Us Section -->
	<section class="container mx-auto px-5 2xl:px-0 mb-12 md:mb-16">
		<div>
			<p class="text-3xl lg:text-5xl text-primary-500 font-bold mb-4 xl:mb-8">
				{$LL.aboutUs.whyUs.title()}
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div>
				<ul class={$currentAppLang === 'en' ? 'xl:pr-12' : 'xl:pl-12'}>
					<li>
						<p class="text-xl pb-5 leading-9">{$LL.aboutUs.whyUs.r1()}</p>
					</li>
					<li>
						<p class="text-xl pb-5 leading-9">{$LL.aboutUs.whyUs.r2()}</p>
					</li>
					<li>
						<p class="text-xl pb-5 leading-9">{$LL.aboutUs.whyUs.r3()}</p>
					</li>
					<li>
						<p class="text-xl pb-5 leading-9">{$LL.aboutUs.whyUs.r4()}</p>
					</li>
				</ul>
			</div>

			<div>
				<div>
					<!-- <div bind:this={imageHolder} class="relative">
						<div
							class="absolute left-1 top-1 rounded-md p-3 opacity-50 text-2xl text-white bg-black z-[999]"
						>
							<p>Width: {Math.round(dimensions.width)}px</p>
							<p>Height: {Math.round(dimensions.height)}px</p>
						</div>
					</div> -->

					<div>
						{#await fetchWhyUsData()}
							<div class="placeholder animate-pulse rounded-lg h-[200px]" />
						{:then items}
							<LazyImage
								src={items.w800.url}
								srcset={`${items.w600.url} 768w, ${items.w800.url} 8000w`}
								alt={`Why choose us image`}
								appliedClass={`w-full aspect-[1/0.7] md:aspect-[1/0.6] opacity-0 transition-opacity duration-3000 ease-in-out`}
							/>
						{:catch error}
							<p style="color: red">{error.message}</p>
						{/await}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<FooterSection />
