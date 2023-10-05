<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
	import YouTubeVideo from '$lib/generalComponents/YouTubeVideo.svelte';
	import { onMount } from 'svelte';

	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	// export let data;

	// const videos = data.pageCMSData;

	// Sort function
	const sortVideos = (videos: any) => {
		// Use the sort method which mutates the original array
		return videos.sort(
			(a: { attributes: { media_order: number } }, b: { attributes: { media_order: number } }) =>
				a.attributes.media_order - b.attributes.media_order
		);
	};

	let videos: any;
	let sortedVideos: any;

	const getVideosData = async () => {
		try {
			const response = await fetch('/api/media/');

			videos = await response.json();

			sortedVideos = sortVideos(videos);

			// Check if the request was successful
			if (!response.ok) {
				throw new Error();
			}
		} catch (error) {
			console.error('🚀 Error:', error);
		}
	};

	onMount(() => {
		getVideosData();
	});
</script>

<section>
	<div
		dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}
		class="h-[180px] md:h-[250px] relative"
		style="background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;"
	>
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="heading-{$currentAppLang}-1 font-medium text-white"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.media.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container mx-auto px-5 2xl:px-0">
		{#if sortedVideos}
			{#each videos as video, index}
				<div class="grid lg:grid-cols-2 gap-4 lg:gap-12 py-5 lg:py-12">
					<div
						class="w-full {index % 2 !== 0
							? 'order-last lg:order-first'
							: 'order-first lg:order-last'}"
					>
						<div class="aspect-w-16 aspect-h-9 max-lg:py-5">
							<YouTubeVideo videoId={video.attributes.videoID} />
						</div>
					</div>

					{#if $currentAppLang === 'en'}
						<div>
							<h2 class="heading-{$currentAppLang}-3 font-meduim text-primary-500 pb-3 lg:pb-8">
								{video.attributes.title}
							</h2>
							<ul class="main-{$currentAppLang}-text space-y-4 leading-9 pr-8">
								{#each video.attributes.description as paragraph}
									<li>
										<p>{paragraph.description_line}</p>
									</li>
								{/each}
							</ul>
						</div>
					{:else}
						<div dir="rtl">
							<h2 class="heading-{$currentAppLang}-3 font-medium text-primary-500 pb-3 lg:pb-8">
								{video.attributes.localizations.data[0].attributes.title}
							</h2>
							<ul class="main-{$currentAppLang}-text space-y-4 leading-9 pl-8">
								{#each video.attributes.localizations.data[0].attributes.description as paragraph}
									<li>
										<p>{paragraph.description_line}</p>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>

				{#if videos.length - index !== 1}
					<hr />
				{/if}
			{/each}
		{:else}
			<div class="w-full h-[750px] flex justify-center items-top">
				<div class="mt-32">
					<ConicGradient stops={conicStops} width="w-8 md:w-16 2xl:w-20" spin />
				</div>
			</div>
		{/if}
	</div>
</section>
