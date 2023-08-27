<script lang="ts">
	import CabinsGallery from '$lib/generalComponents/CabinsGallery.svelte';
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';

	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	export let data;

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

	const imgURLs = transformData(data.pageCMSData);

	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: CabinsGallery
		// Add the component properties as key/value pairs
		// props: { background: 'bg-surface-100-800-token' },
		// Provide a template literal for the default component slot
		// slot: '<p>Skeleton</p>'
	};

	function showModal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalComponent,

			backdropClasses: 'backdrop-blur-2xl',
			// modalClasses: 'bg-primary-100-800-token',

			meta: {
				imgURLs
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

<section>
	<div class="container mx-auto py-5 md:py-16">
		<div
			class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 p-5 2xl:p-0"
		>
			{#each imgURLs as one}
				<!-- 
					on:click={() => {
						showModal();
					}}
					aria-label="a button to open the project modal"
			 -->
				<div class=" w-full rounded-lg">
					<div
						class="px-6 py-2 min-[400px]:px-12 min-[400px]:py-4 min-[500px]:px-0 min-[500px]:py-0"
					>
						<!-- srcset="/about-us/why-us/Why_Choose_Us_Final_600x420.webp 768w, /about-us/why-us/Why_Choose_Us_Final_800x480.webp 99999w" -->
						<!-- 400px -->
						<img
							src={`https://cms.buildingtec-elevators.com${one.medium}`}
							alt={one.alt}
							class="w-[450px] rounded-md aspect-[1/1.2]"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
