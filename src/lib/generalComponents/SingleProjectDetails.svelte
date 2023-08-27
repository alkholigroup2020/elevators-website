<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';

	import { modalStore } from '@skeletonlabs/skeleton';

	import { modeCurrent } from '@skeletonlabs/skeleton';

	$: arrowColor = $modeCurrent ? '#000' : '#fff';

	// export let parent: any;

	//
	// console.log('🚀 parent:', parent);

	// console.log('🚀 $modalStore[0]:', $modalStore[0].component.props);

	let elemCarousel: HTMLDivElement;

	let projectTableData = Object.entries($modalStore[0].meta.projectTableData);

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
</script>

{#if $modalStore[0]}
	<!-- $modalStore[0].component.props.background -->
	<!-- mx-5 md:mx-8 2xl:mx-0 -->
	<div
		class="bg-surface-100-800-token border rounded-xl h-fit max-w-[90%] xl:max-w-[80%] px-5 pt-5 pb-8 xl:pb-12 my-auto overflow-auto"
	>
		<!-- title -->
		{#if $currentAppLang === 'en' ? true : false}
			<h3 class="heading-{$currentAppLang}-3 px-3 py-5 mb-3">{$modalStore[0].meta.projectName}</h3>
		{:else}
			<h3 class="heading-{$currentAppLang}-3 px-3 py-5 mb-3" dir="rtl">
				{$modalStore[0].meta.projectNameAr}
			</h3>
		{/if}

		<div class="grid grid-cols-1 xl:grid-cols-2 pb-5">
			<!-- carousel xl:order-last -->
			<div
				class="pb-8 xl:pb-0 px-0 lg:px-5 2xl:px-3 {$currentAppLang === 'en'
					? 'xl:order-last'
					: 'order-start'}"
			>
				<div class="mx-auto grid grid-cols-1 items-center justify-items-center">
					<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center w-fit">
						<!-- Button: Left -->
						<button
							type="button"
							aria-label="a button to move the slider to the left"
							class="btn-icon bg-surface-100-800-token border-2 border-surface-700-200-token"
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
							class=" snap-x snap-mandatory scroll-smooth flex overflow-x-hidden max-w-[500px] max-h-[600px]"
						>
							{#each $modalStore[0].meta.projectImages as projectImage}
								<img
									class="snap-center rounded-container-token w-full aspect-[5/6]"
									src={`https://cms.buildingtec-elevators.com${projectImage.attributes.url}`}
									alt={`An image of our ${$modalStore[0].meta.projectName} project.`}
									loading="lazy"
								/>
							{/each}
						</div>

						<!-- Button: Right -->
						<button
							type="button"
							aria-label="a button to move the slider to the right"
							class="btn-icon bg-surface-100-800-token border-2 border-surface-700-200-token"
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
				</div>
			</div>

			<!-- content -->
			<div class="px-3">
				<div>
					{#if $currentAppLang === 'en' ? true : false}
						<p class="main-{$currentAppLang}-text leading-9 pb-5">
							{$modalStore[0].meta.projectDescription}
						</p>
					{:else}
						<p class="main-{$currentAppLang}-text leading-9 pb-5" dir="rtl">
							{$modalStore[0].meta.projectDescriptionAr}
						</p>
					{/if}
				</div>
				<!-- table -->
				<div class="mt-1 xl:mt-3">
					<table
						class="table-auto rounded-md border-separate border-spacing-2 border-surface-800-100-token border min-w-full"
					>
						<tbody>
							{#each projectTableData as entry}
								<tr>
									<td
										class="border border-surface-800-100-token rounded-md px-2 sub-main-{$currentAppLang}-text"
										>{entry[0]}</td
									>
									<td
										class="border border-surface-800-100-token rounded-md px-2 sub-main-{$currentAppLang}-textsub-"
										>{entry[1]}</td
									>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
{/if}
