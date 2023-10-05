<script lang="ts">
	import CabinsGallery from '$lib/generalComponents/CabinsGallery.svelte';
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { onMount } from 'svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	let server_response: any;

	type InputData = {
		attributes: {
			description: string;
			thumb_100_100: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
			small_380_570: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
			medium_450_540: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
			large_550_605: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
		};
	}[];

	type OutputData = {
		alt: string;
		thumb: string;
		small: string;
		medium: string;
		large: string;
	}[];

	function transformData(input: InputData): OutputData {
		return input.map((item) => {
			return {
				alt: item.attributes.description,
				thumb: item.attributes.thumb_100_100.data.attributes.url,
				small: item.attributes.small_380_570.data.attributes.url,
				medium: item.attributes.medium_450_540.data.attributes.url,
				large: item.attributes.large_550_605.data.attributes.url
			};
		});
	}

	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: CabinsGallery
		// Add the component properties as key/value pairs
		// props: { background: 'bg-surface-100-800-token' },
		// Provide a template literal for the default component slot
		// slot: '<p>Skeleton</p>'
	};

	// Sort function
	const sortImages = (videos: any) => {
		// Use the sort method which mutates the original array
		return videos.sort(
			(a: { attributes: { image_order: number } }, b: { attributes: { image_order: number } }) =>
				a.attributes.image_order - b.attributes.image_order
		);
	};

	function showModal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalComponent,

			backdropClasses: 'backdrop-blur-2xl',
			// modalClasses: 'bg-primary-100-800-token',

			meta: {
				server_response
				// projectName: projectData.projectTitle,
				// projectImages: projectData.projectImages.data,
				// projectDescription: projectData.projectDescription,
				// projectTableData: projectData.projectTable,
				// projectNameAr: projectData.localizations.data[0].attributes.projectTitle,
				// projectDescriptionAr: projectData.localizations.data[0].attributes.projectDescription
			}
		};
		modalStore.trigger(modal);
	}

	const getCabinsData = async () => {
		try {
			const response = await fetch('/api/cabins-data');

			const cabinsData = await response.json();

			server_response = transformData(sortImages(cabinsData));
			// console.log('🚀 server_response:', server_response);
			// Check if the request was successful
			if (!response.ok) {
				throw new Error();
			}
		} catch (error) {
			console.error('🚀 Error:', error);
		}
	};

	onMount(() => {
		getCabinsData();
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
					class="heading-{$currentAppLang}-1 font-normal text-white"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.cabins.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

{#if server_response === undefined}
	<section>
		<div class="container mx-auto py-5 md:py-16">
			<div
				class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 p-5 2xl:p-0"
			>
				{#each Array(12).fill(0) as A}
					<div class="placeholder h-96 rounded-lg animate-pulse" />
				{/each}
			</div>
		</div>
	</section>
{:else}
	<section>
		<div class="container mx-auto py-5 md:py-16">
			<div
				class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 p-5 2xl:p-0"
			>
				{#each server_response as one}
					<!-- on:click={() => {
						showModal();
					}} -->
					<button
						class="cursor-default w-full rounded-lg"
						aria-label="a button to open the project modal"
					>
						<!-- <div class="w-full rounded-lg"> -->
						<div
							class="px-6 py-2 min-[400px]:px-12 min-[400px]:py-4 min-[500px]:px-0 min-[500px]:py-0"
						>
							<img
								src={`https://cms.buildingtec-elevators.com${one.medium}`}
								alt={one.alt}
								class="w-[450px] rounded-md aspect-[1/1.2]"
							/>
						</div>
						<!-- </div> -->
					</button>
				{/each}
			</div>
		</div>
	</section>
{/if}
