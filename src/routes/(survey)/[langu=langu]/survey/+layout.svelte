<script lang="ts">
	import VeryButtonFooter from '$lib/footer/VeryButtonFooter.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
	import { currentAppLang } from '$lib/stores/store';
	import { navigating } from '$app/stores';
	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';

	export let data;
	import { setLocale } from '$i18n/i18n-svelte';

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);
</script>

{#if $navigating}
	<LoadingSpinner />
{:else}
	<div class="h-screen flex flex-col">
		<div class="bg-primary-500 w-screen min-h-[120px] flex items-center justify-center">
			<div>
				<img
					loading="lazy"
					src="/white_logo_and_text_270x90.webp"
					alt="company's logo"
					class="w-[270px] h-[90px] aspect-[3/1] px-12 md:px-8"
				/>
			</div>
		</div>

		<div class="bg-surface-500 w-screen h-8">
			<div class="flex container mx-auto px-12 md:px-5 h-full">
				<div class="flex-none my-auto">
					<div>
						<a
							aria-label="a link to the main webpage"
							href={`/${$currentAppLang}`}
							class="flex items-center space-x-2"
						>
							<span>
								<svg
									width="20px"
									height="20px"
									viewBox="0 0 64 64"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="3"
									stroke="#FFF"
									fill="none"
									><path
										d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"
									/><path d="M37.86,51.1A47,47,0,0,1,32,56.7" /><path
										d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"
									/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" /><line
										x1="10.37"
										y1="19.9"
										x2="53.75"
										y2="19.9"
									/><line x1="32" y1="6.99" x2="32" y2="56.7" /><line
										x1="11.05"
										y1="45.48"
										x2="37.04"
										y2="45.48"
									/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85" /><path
										d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"
									/></svg
								>
							</span>
							<span class="text-white">{$LL.survey.ourWebsite()}</span>
						</a>
					</div>
				</div>

				<div class="grow">
					<!-- spacer -->
				</div>

				<div class="flex-none my-auto">
					<div class="flex space-x-5">
						<LocaleSwitcher />
						<LightSwitch width="w-10" height="h-5" />
					</div>
				</div>
			</div>
		</div>

		<div class="flex-grow">
			<slot />
		</div>

		<div>
			<VeryButtonFooter />
		</div>
	</div>
{/if}
