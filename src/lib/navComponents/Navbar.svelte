<script lang="ts">
	import { browser } from '$app/environment';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	// : DrawerSettings
	const drawerSettings: DrawerSettings = {
		id: 'id-1',
		bgDrawer: 'bg-secondary-200-700-token',
		width: 'w-5/6 md:w-3/6',
		rounded: 'rounded-xl'
		// bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		// padding: 'p-4',
	};

	$: hamburgerIconColor = $modeCurrent ? '#212121' : '#d3d3d3';

	import type { NavData } from '../../types/nav.type';

	export let theNavbarData: NavData;

	import { currentAppLang } from '$lib/stores/store';
</script>

<AppBar
	background="bg-surface-50-800-token text-secondary-800-100-token text-lg"
	shadow="shadow-md"
	regionRowMain="container mx-auto"
>
	<svelte:fragment slot="lead">
		<div class="flex">
			<button
				class="lg:hidden mt-2"
				aria-label="a button to open the side drawer"
				on:click={() => {
					drawerStore.open(drawerSettings);
				}}
			>
				<span>
					<svg
						width="33px"
						height="33px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Menu / Hamburger_LG">
							<path
								id="Vector"
								d="M3 17H21M3 12H21M3 7H21"
								stroke={hamburgerIconColor}
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
					</svg>
				</span>
			</button>

			<div class="ml-5 lg:ml-0">
				<a href={`/${$currentAppLang}`} aria-label="a link to the home page">
					{#if theNavbarData !== undefined}
						<div class="flex max-h-12">
							<div class="aspect-w-603 aspect-h-1181 -mt-1">
								<!-- <img
									class="w-7 h-[105%] object-cover"
									src={`https://cms.buildingtec-elevators.com${theNavbarData.logoImageURL}`}
									srcset={`https://cms.buildingtec-elevators.com${theNavbarData.smLogoImageURL} 300w,
										https://cms.buildingtec-elevators.com${theNavbarData.mdLogoImageURL} 600w,
										https://cms.buildingtec-elevators.com${theNavbarData.lgLogoImageURL} 1200w,`}
									sizes="(max-width: 600px) 300px,
										(max-width: 1200px) 600px,
										1200px"
									alt="company's logo"
								/> -->
								<img
									class="w-7 h-[105%] object-cover"
									src={`https://cms.buildingtec-elevators.com${theNavbarData.logoImageURL}`}
									alt="company's logo"
								/>
							</div>

							{#if $modeCurrent}
								<img
									class="ml-5 w-40 h-[80%] mt-auto pb-1"
									src={`https://cms.buildingtec-elevators.com${theNavbarData.blackTextLogoURL}`}
									alt="company's logo text"
								/>
								<!-- <img
									class="ml-3 w-40 h-[80%] mt-auto"
									src={`https://cms.buildingtec-elevators.com${theNavbarData.blackTextLogoURL}`}
									srcset={`https://cms.buildingtec-elevators.com${theNavbarData.smBlackTextLogoURL} 300w,
										https://cms.buildingtec-elevators.com${theNavbarData.mdBlackTextLogoURL} 600w,
										https://cms.buildingtec-elevators.com${theNavbarData.lgBlackTextLogoURL} 1200w,`}
									sizes="(max-width: 600px) 300px,
										(max-width: 1200px) 600px,
										1200px"
									alt="company's logo text"
								/> -->
							{:else}
								<img
									class="ml-5 w-40 h-[80%] mt-auto pb-1"
									src={`https://cms.buildingtec-elevators.com${theNavbarData.whiteTextLogoURL}`}
									alt="company's logo text"
								/>
								<!-- <img
									class="ml-3 w-40 h-[80%] mt-auto"
									src={`https://cms.buildingtec-elevators.com${theNavbarData.whiteTextLogoURL}`}
									srcset={`https://cms.buildingtec-elevators.com${theNavbarData.smWhiteTextLogoURL} 300w,
										https://cms.buildingtec-elevators.com${theNavbarData.mdWhiteTextLogoURL} 600w,
										https://cms.buildingtec-elevators.com${theNavbarData.lgWhiteTextLogoURL} 1200w,`}
									sizes="(max-width: 600px) 300px,
										(max-width: 1200px) 600px,
										1200px"
									alt="company's logo text"
								/> -->
							{/if}
						</div>
					{/if}
				</a>
			</div>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<nav class="hidden lg:block space-x-6">
			<a href="/" aria-label="a link to a page #1" class="hover:text-secondary-300">Link 1</a>
			<a href="/" aria-label="a link to a page #2" class="hover:text-secondary-300">Link 2</a>
			<a href="/" aria-label="a link to a page #3" class="hover:text-secondary-300">Link 3</a>
			<a href="/" aria-label="a link to a page #4" class="hover:text-secondary-300">Link 4</a>
			<a href="/" aria-label="a link to a page #5" class="hover:text-secondary-300">Link 5</a>
			<a href="/" aria-label="a link to a page #" class="hover:text-secondary-300">Link 6</a>
			<a href="/" aria-label="a link to a page #1" class="hover:text-secondary-300">Link 7</a>
			<a href="/" aria-label="a link to a page #1" class="hover:text-secondary-300">Link 8</a>
			<a href="/" aria-label="a link to a page #1" class="hover:text-secondary-300">Link 9</a>
		</nav>
	</svelte:fragment>
</AppBar>

<!-- Include FontAwesome icons CDN -->
<!-- <svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js" crossorigin="anonymous"></script>
</svelte:head> -->
