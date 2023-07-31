<script lang="ts">
	export let sectionData: any;
	import { currentAppLang } from '$lib/stores/store';
</script>

<section>
	<div class="relative">
		<img
			src="/home-page/header/landingBG_4mwWWtScai_2000x660.webp"
			alt="main hero section background"
			srcset="/home-page/header/landingBG_4mwWWtScai_650x780.webp 640w, /home-page/header/landingBG_4mwWWtScai_800x800.webp 768w, /home-page/header/landingBG_4mwWWtScai_1200x840.webp 1024w, /home-page/header/landingBG_4mwWWtScai_1400x700.webp 1280w, /home-page/header/landingBG_4mwWWtScai_1600x720.webp 1536w, /home-page/header/landingBG_4mwWWtScai_2000x660.webp 99999w"
			class="w-full aspect-[1/1] sm:aspect-[1/0.7] md:aspect-[1/0.7] lg:aspect-[1/0.5] xl:aspect-[1/0.45] 2xl:aspect-[1/0.33]"
		/>
		<div class="absolute inset-0 bg-black opacity-40" />

		<div class="absolute inset-0 flex items-center justify-center">
			<div class="container mx-auto grid grid-cols-6 relative inset-0 z-10 text-center">
				{#if $currentAppLang === 'en'}
					<div
						class="col-span-6 space-y-12 min-[350px]:space-y-3 min-[470px]:space-y-8 sm:space-y-12 xl:space-y-12 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
					>
						<!-- en Heading -->
						<h1
							class="text-4xl min-[350px]:text-5xl md:text-6xl xl:text-7xl text-white font-bold px-2 md:px-0"
							style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
						>
							{sectionData.enSectionTitle}
						</h1>
						<!-- en Subheading -->
						<p
							class="text-lg min-[390px]:text-xl md:text-2xl lg:text-3xl text-white max-[768px]:text-justify section-msg px-5 lg:px-[50px] xl:px-[150px] hidden min-[350px]:block"
						>
							<span class="leading-2 min-[390px]:leading-8 md:leading-loose">
								{sectionData.enSectionMessage}
							</span>
						</p>
						<!-- en Call-to-action button -->
						<button
							type="button"
							class="btn variant-filled-secondary border border-success-500 btn-md md:btn-xl text-lg md:text-[22px]"
						>
							{sectionData.enButtonText}
						</button>
					</div>
				{:else}
					<div
						dir="rtl"
						class="col-span-6 space-y-12 min-[350px]:space-y-3 min-[470px]:space-y-8 sm:space-y-12 xl:space-y-12 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
					>
						<!-- en Heading -->
						<h1
							class="text-4xl min-[350px]:text-5xl md:text-6xl xl:text-7xl text-white font-bold px-2 md:px-0"
							style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
						>
							{sectionData.arSectionTitle}
						</h1>
						<!-- en Subheading -->
						<p
							class="text-lg min-[390px]:text-xl md:text-2xl lg:text-3xl text-white max-[768px]:text-justify section-msg px-5 lg:px-[50px] xl:px-[150px] hidden min-[380px]:block"
						>
							<span class="leading-2 min-[390px]:leading-8 md:leading-loose">
								{sectionData.arSectionMessage}
							</span>
						</p>
						<!-- en Call-to-action button -->
						<button
							type="button"
							class="btn variant-filled-secondary border border-success-500 btn-md md:btn-xl text-lg md:text-[22px]"
						>
							{sectionData.arButtonText}
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.section-msg {
		text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);
	}
</style>
