<script lang="ts">
	import { browser } from '$app/environment';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import LL from '$i18n/i18n-svelte';

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

	import { goto } from '$app/navigation';

	let navigate = async (event: Event) => {
		event.preventDefault();

		let targetId = (event.target as HTMLAnchorElement).hash;
		let target = document.querySelector(targetId);

		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		} else {
			// If the target doesn't exist on the current page, navigate to the homepage
			// and then scroll to the target.

			await goto(`/${$currentAppLang}`);
			target = document.querySelector(targetId);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};
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
								<!-- w-40 h-[80%] 
								src={`https://cms.buildingtec-elevators.com${theNavbarData.blackTextLogoURL}`}
								src={`https://cms.buildingtec-elevators.com${theNavbarData.whiteTextLogoURL}`}
								-->
								<div class="mx-5 mt-1 flex items-center">
									<img
										class="w-full aspect-[4/1]"
										src="/logo_text-_Small_.webp"
										alt="company's logo text"
									/>
								</div>
							{:else}
								<div class="mx-5 mt-1 flex items-center">
									<img
										class="w-full aspect-[4/1]"
										src="/logo_text_white-_Small_.webp"
										alt="company's logo text"
									/>
								</div>
							{/if}
						</div>
					{/if}
				</a>
			</div>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<nav class="hidden lg:block space-x-6" dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
			<!-- Why I have to add ml-6 to the first link?! Arabic page only!! -->
			<a
				href={`/${$currentAppLang}`}
				aria-label="a link to the home page"
				class="hover:text-secondary-300 ml-6"
				>{$LL.mainNav.home()}
			</a>
			<a
				href={`#products`}
				on:click={navigate}
				aria-label="a link to the products section"
				class="hover:text-secondary-300"
				>{$LL.mainNav.products()}
			</a>
			<a
				href={`/${$currentAppLang}/about`}
				aria-label="a link to the about page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.about()}
			</a>
			<a
				href={`/${$currentAppLang}/cabins`}
				aria-label="a link to the cabins page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.cabins()}
			</a>
			<a
				href={`#projects`}
				on:click={navigate}
				aria-label="a link to the projects section"
				class="hover:text-secondary-300"
				>{$LL.mainNav.projects()}
			</a>
			<a
				href={`#brands`}
				on:click={navigate}
				aria-label="a link to the brands section"
				class="hover:text-secondary-300"
				>{$LL.mainNav.brands()}
			</a>
			<a
				href={`/${$currentAppLang}/media`}
				aria-label="a link to the media page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.media()}
			</a>
			<a
				href={`/${$currentAppLang}/career`}
				aria-label="a link to the career page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.career()}
			</a>
			<a
				href={`/${$currentAppLang}/blog`}
				aria-label="a link to the blog page"
				class="hover:text-secondary-300"
				>{$LL.mainNav.blog()}
			</a>
			<a
				href={`#quote`}
				on:click={navigate}
				aria-label="a link to the quote section"
				class="hover:text-secondary-300"
				>{$LL.mainNav.quote()}
			</a>
		</nav>
	</svelte:fragment>
</AppBar>

<!-- Include FontAwesome icons CDN -->
<!-- <svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js" crossorigin="anonymous"></script>
</svelte:head> -->
