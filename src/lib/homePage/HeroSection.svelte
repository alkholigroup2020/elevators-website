<script lang="ts">
	import LazyImage from '$lib/generalComponents/LazyImage.svelte';

	export let sectionData: any;
	import { currentAppLang } from '$lib/stores/store';

	async function fetchHeaderData() {
		// An array of URLs
		const urls = [
			'/home-page/header/landingBG_4mwWWtScai_650x780.webp',
			'/home-page/header/landingBG_4mwWWtScai_800x800.webp',
			'/home-page/header/landingBG_4mwWWtScai_1200x840.webp',
			'/home-page/header/landingBG_4mwWWtScai_1400x700.webp',
			'/home-page/header/landingBG_4mwWWtScai_1600x720.webp',
			'/home-page/header/landingBG_4mwWWtScai_2000x660.webp'
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
				w650: responses[0],
				w800: responses[1],
				w1200: responses[2],
				w1400: responses[3],
				w1600: responses[4],
				w2000: responses[5]
			};

			return result;
		} catch (error) {
			console.error(error);
			throw new Error('Something Went Wrong!');
		}
	}
</script>

<section>
	<div class="relative">
		{#await fetchHeaderData()}
			<div class="placeholder animate-pulse rounded-lg h-[300px]" />
		{:then items}
			<LazyImage
				src={items.w2000.url}
				srcset={`${items.w650.url} 640w,${items.w800.url} 768w, ${items.w1200.url} 1024w, ${items.w1400.url} 1280w, ${items.w1600.url} 1536w, ${items.w2000.url} 99999w`}
				alt={`Our values hero`}
				appliedClass={`w-full aspect-[1/1] sm:aspect-[1/0.7] md:aspect-[1/0.7] lg:aspect-[1/0.5] xl:aspect-[1/0.45] 2xl:aspect-[1/0.33]`}
			/>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}

		<div class="absolute inset-0 bg-black opacity-40" />

		<div class="absolute inset-0 flex items-center justify-center">
			<div class="container mx-auto grid grid-cols-6 relative inset-0 z-10 text-center">
				{#if $currentAppLang === 'en'}
					<div
						class="col-span-6 space-y-12 min-[350px]:space-y-6 min-[470px]:space-y-8 sm:space-y-12 xl:space-y-12 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
					>
						<!-- en Heading -->
						<h1
							class="text-4xl min-[350px]:text-5xl md:text-6xl xl:text-7xl text-white font-bold px-2 md:px-0"
							style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
						>
							{sectionData.enSectionTitle}
						</h1>
						<!-- en Subheading -->
						<p
							class="text-lg min-[390px]:text-xl md:text-2xl lg:text-3xl text-white max-[768px]:text-justify section-msg px-5 lg:px-[50px] xl:px-[150px] hidden min-[350px]:block"
						>
							<span class="leading-8 md:leading-loose">
								{sectionData.enSectionMessage}
							</span>
						</p>
						<!-- en Call-to-action button -->
						<button
							type="button"
							class="btn variant-filled-secondary border border-success-500 btn-md md:btn-xl text-lg md:text-[22px]"
						>
							{sectionData.enButtonText}
						</button>
					</div>
				{:else}
					<div
						dir="rtl"
						class="col-span-6 space-y-12 min-[350px]:space-y-6 min-[470px]:space-y-8 sm:space-y-12 xl:space-y-12 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
					>
						<!-- en Heading -->
						<h1
							class="text-4xl min-[350px]:text-5xl md:text-6xl xl:text-7xl text-white font-bold px-2 md:px-0"
							style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
						>
							{sectionData.arSectionTitle}
						</h1>
						<!-- en Subheading -->
						<p
							class="text-lg min-[390px]:text-xl md:text-2xl lg:text-3xl text-white max-[768px]:text-justify section-msg px-5 lg:px-[50px] xl:px-[150px] hidden min-[380px]:block"
						>
							<span class="leading-8 md:leading-loose">
								{sectionData.arSectionMessage}
							</span>
						</p>
						<!-- en Call-to-action button -->
						<button
							type="button"
							class="btn variant-filled-secondary border border-success-500 btn-md md:btn-xl text-lg md:text-[22px]"
						>
							{sectionData.arButtonText}
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.section-msg {
		/* line-height: 48px; */
		/* letter-spacing: 1.2px; */
		/* word-spacing: 2px; */
		text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);
	}
	@media screen and (max-width: 720px) {
		.section-msg {
			/* line-height: 30px; */
			/* letter-spacing: normal; */
			/* word-spacing: normal; */
			/* padding: 0px 30px; */
		}
	}
</style>
