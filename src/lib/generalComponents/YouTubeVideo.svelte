<script lang="ts">
	import { onMount } from 'svelte';

	// Declare the exported prop with its type
	export let videoId: string = '';
	let iframeLoaded: boolean = false;
	let videoContainer: HTMLElement;

	onMount(() => {
		// Define the callback function for the IntersectionObserver
		const handleIntersect: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !iframeLoaded) {
					iframeLoaded = true;
				}
			});
		};

		// Create the IntersectionObserver instance with the callback and options
		const observer: IntersectionObserver = new IntersectionObserver(handleIntersect, {
			threshold: 0.2 // Adjust this value to control when the iframe should load (0.5 means 50% of the element is visible)
		});

		// Start observing the videoContainer element
		if (videoContainer) {
			observer.observe(videoContainer);
		}

		// Clean up: stop observing the videoContainer when the component is destroyed
		return () => {
			if (videoContainer) {
				observer.unobserve(videoContainer);
			}
		};
	});
</script>

<div class="the-video" bind:this={videoContainer}>
	{#if !iframeLoaded}
		<!-- Video thumbnail placeholder -->
		<img
			src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
			alt="video thumbnail"
			class="w-full h-full object-cover"
		/>
		<!-- Play button overlay -->
		<div class="absolute inset-0 flex items-center justify-center">
			<svg class="h-12 w-12 text-white" viewBox="0 0 24 24">
				<path d="M8 5.14v14l11-7-11-7z" />
			</svg>
		</div>
	{/if}
	{#if iframeLoaded}
		<iframe
			title="advertisement video"
			src={`https://www.youtube.com/embed/${videoId}?controls=1&autoplay=1&mute=1&disablekb=1&loop=1&playlist=${videoId}`}
			frameborder="0"
			allowfullscreen
			class="w-full h-full"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		/>
	{/if}
</div>

<style>
	.the-video {
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 0px;
		height: 0px;
	}
	.the-video iframe {
		position: absolute;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 0px;
		height: 100%;
		width: 100%;
	}
</style>
