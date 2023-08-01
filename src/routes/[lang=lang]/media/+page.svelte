<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
	import YouTubeVideo from '$lib/generalComponents/YouTubeVideo.svelte';
	import FooterSection from '$lib/footer/FooterSection.svelte';

	export let data;

	const videos = data.pageCMSData;
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
					class="text-4xl lg:text-6xl font-medium text-white"
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
						<h2 class="text-3xl lg:text-4xl font-medium text-primary-500 pb-3 lg:pb-8">
							{video.attributes.title}
						</h2>
						<ul class="text-xl space-y-4 leading-9 pr-8">
							{#each video.attributes.description as paragraph}
								<li>
									<p>{paragraph.description_line}</p>
								</li>
							{/each}
						</ul>
					</div>
				{:else}
					<div dir="rtl">
						<h2 class="text-3xl lg:text-4xl font-medium text-primary-500 pb-3 lg:pb-8">
							{video.attributes.localizations.data[0].attributes.title}
						</h2>
						<ul class="text-xl space-y-4 leading-9 pl-8">
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
	</div>
</section>

<FooterSection />
