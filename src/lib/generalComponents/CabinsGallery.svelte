<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	$: arrowColor = $modeCurrent ? '#000' : '#fff';

	let elemCarousel: HTMLDivElement;

	const cabinsImagesData = $modalStore[0].meta.imgURLs;

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

{#if $modalStore[0]}
	<!-- <div>
		<p>{$modalStore[0].meta.imgURLs}</p>
		<img
			src={`${$modalStore[0].meta.imgURLs[0]}`}
			alt="why us"
			class="w-full rounded-md aspect-[1/1.2]"
		/>
	</div> -->

	<section
		class="max-w-[1200px] bg-surface-100-800-token border rounded-xl flex flex-col items-center"
	>
		<div class="px-4 pb-2 pt-8 xl:pt-12 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
			<!-- Button: Left -->
			<button
				type="button"
				aria-label="a button to move the slider to the left"
				class="btn-icon bg-surface-100-800-token border-2 border-surface-700-200-token hidden sm:flex"
				on:click={carouselLeft}
			>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={arrowColor}
						><path
							d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
						/></svg
					>
				</span>
			</button>
			<!-- Full Images -->
			<div
				bind:this={elemCarousel}
				class="snap-x snap-mandatory flex overflow-x-auto scroll-smooth max-w-[260px] sm:max-w-[380px] lg:max-w-[450px] xl:max-w-[550px] aspect-[1/1.5] lg:aspect-[1/1.2] xl:aspect-[1/1.1]"
			>
				<!-- the 260px was width added to fix the hidden part from images @smaller sizes -->
				{#each cabinsImagesData as cabinImage}
					<img
						class="snap-center rounded-xl min-w-[260px] sm:min-w-[380px] lg:min-w-[450px] xl:min-w-[550px] aspect-[1/1.5] lg:aspect-[1/1.2] xl:aspect-[1/1.1]"
						src={`https://cms.buildingtec-elevators.com${cabinImage.large}`}
						alt={cabinImage.alt}
						srcset={`https://cms.buildingtec-elevators.com${cabinImage.small} 1024w, https://cms.buildingtec-elevators.com${cabinImage.medium} 1280w, https://cms.buildingtec-elevators.com${cabinImage.large} 100000w`}
					/>
				{/each}
			</div>
			<!-- Button: Right -->
			<button
				type="button"
				aria-label="a button to move the slider to the right"
				class="btn-icon bg-surface-100-800-token border-2 border-surface-700-200-token hidden sm:flex"
				on:click={carouselRight}
			>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={arrowColor}
						><path
							d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
						/></svg
					>
				</span>
			</button>
		</div>

		<div class="p-4 grid grid-cols-6 gap-4">
			{#each cabinsImagesData as cabinImage, i}
				<button type="button" on:click={() => carouselThumbnail(i)}>
					<img
						class="rounded-container-token w-full aspect-[1/1]"
						src={`https://cms.buildingtec-elevators.com${cabinImage.thumb}`}
						alt={cabinImage.alt}
					/>
				</button>
			{/each}
		</div>
	</section>
{/if}
