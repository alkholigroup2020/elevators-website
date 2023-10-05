<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { onMount } from 'svelte';

	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import SingleProjectDetails from '$lib/generalComponents/SingleProjectDetails.svelte';

	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	// export let sectionData: any = [];
	let sectionData: any = [];

	// The $: syntax creates a reactive statement.
	// Whenever the values on the right-hand side of the equation change, the code within the statement will re-run.
	let sortedProducts: any[] = [];
	$: {
		sortedProducts = orderByProjectOrder(sectionData);
	}

	function orderByProjectOrder(arr: any[]) {
		arr.sort((a, b) => a.attributes.projectOrder - b.attributes.projectOrder);
		return arr;
	}

	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: SingleProjectDetails,
		// Add the component properties as key/value pairs
		props: { background: 'bg-surface-100-800-token' },
		// Provide a template literal for the default component slot
		slot: '<p>Skeleton</p>'
	};

	function showModal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalComponent,

			backdropClasses: 'backdrop-blur-md',
			// modalClasses: 'bg-primary-100-800-token',

			meta: {
				projectName: projectData.projectTitle,
				projectImages: projectData.projectImages_500x600.data,
				projectDescription: projectData.projectDescription,
				projectTableData: projectData.projectTable,
				projectNameAr: projectData.localizations.data[0].attributes.projectTitle,
				projectDescriptionAr: projectData.localizations.data[0].attributes.projectDescription
			}
		};
		modalStore.trigger(modal);
	}

	let projectData: any;

	const updateProjectData = (payload: any) => {
		projectData = payload;
		showModal();
	};

	let elemProjects: HTMLDivElement;

	function multiColumnLeft(): void {
		let x = elemProjects.scrollWidth;
		if (elemProjects.scrollLeft !== 0) x = elemProjects.scrollLeft - elemProjects.clientWidth;
		elemProjects.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemProjects.scrollLeft < elemProjects.scrollWidth - elemProjects.clientWidth - 1)
			x = elemProjects.scrollLeft + elemProjects.clientWidth;
		elemProjects.scroll(x, 0);
	}

	const getProjectsData = async () => {
		try {
			const response = await fetch('/api/projects-data/');

			const projectsData = await response.json();

			sectionData = projectsData;

			// Check if the request was successful
			if (!response.ok) {
				throw new Error();
			}
		} catch (error) {
			console.error('🚀 Error:', error);
		}
	};

	onMount(() => {
		getProjectsData();
	});
</script>

<section class="section-bg" id="projects">
	<div class="container mx-auto pb-16 px-3 2xl:px-0">
		<!-- title section -->
		<div class="text-center py-9 md:py-12 2xl:py-[70px]">
			<h2 class="heading-{$currentAppLang}-2 font-semibold">
				<span class="text-primary-500">{$LL.projects.title()}</span>
			</h2>
		</div>

		<!-- projects slider -->
		<div>
			<div class="grid grid-cols-[auto_1fr_auto] gap-2 sm:gap-4 items-center min-h-96">
				<!-- Button: Left -->
				<button
					type="button"
					aria-label="a button to move the slider to the left"
					class="btn-icon bg-surface-600 border-2"
					on:click={multiColumnLeft}
				>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"
							><path
								d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
							/></svg
						>
					</span>
				</button>

				{#if sortedProducts === undefined}
					<div class="w-full md:h-32 flex justify-center items-center">
						<ConicGradient stops={conicStops} width="w-8 md:w-16 2xl:w-20" spin />
					</div>
				{:else}
					<!-- Carousel -->
					<div
						bind:this={elemProjects}
						class="snap-x snap-mandatory scroll-smooth flex gap-4 pb-3 overflow-x-auto"
					>
						{#each sortedProducts as project}
							<div
								class="bg-secondary-500 rounded-lg text-white shrink-0 w-[100%] sm:w-[50%] lg:w-[32%] 2xl:w-[24%] snap-start"
							>
								<div class="rounded-lg border border-surface-300-600-token">
									<button
										on:click={() => {
											updateProjectData(project.attributes);
										}}
										class=" w-full rounded-lg"
										aria-label="a button to open the project modal"
									>
										<div>
											<img
												class="rounded-t-lg w-full aspect-[6/5] hover:brightness-125"
												src={`https://cms.buildingtec-elevators.com${project.attributes.projectCover_600x500.data.attributes.url}`}
												alt={`A picture for ${project.attributes.projectTitle} project.`}
											/>
										</div>
									</button>

									<div class="p-5">
										{#if $currentAppLang === 'en' ? true : false}
											<h3
												class="mb-1 large-{$currentAppLang}-text font-light leading-9 line-clamp-2 md:h-[5.5rem]"
											>
												{project.attributes.projectTitle}
											</h3>
										{:else}
											<h3
												dir="rtl"
												class="mb-1 large-{$currentAppLang}-text font-light leading-9 line-clamp-2 md:h-[5.5rem]"
											>
												{project.attributes.localizations.data[0].attributes.projectTitle}
											</h3>
										{/if}

										<div class="flex justify-end" dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
											<button
												aria-label="a button to open the project modal"
												class="btn variant-ghost rounded-lg border border-surface-500 sub-main-{$currentAppLang}-text"
												on:click={() => {
													updateProjectData(project.attributes);
												}}><span>{$LL.projects.more()}</span></button
											>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Button-Right -->
				<button
					type="button"
					class="btn-icon bg-surface-600 border-2"
					aria-label="a button to move the slider to the right"
					on:click={multiColumnRight}
				>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"
							><path
								d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
							/></svg
						>
					</span>
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.section-bg {
		background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;
	}
</style>
