<script>
	/**
	 * @type {any}
	 */
	export let sectionData;
	/**
	 * @type {string}
	 */
	export let currentLocal;
</script>

<!-- Hero section -->
<section
	class="relative min-h-[77%] flex items-center justify-center"
	dir={currentLocal === 'en' ? 'ltr' : 'rtl'}
>
	<!-- Image container -->
	<div class="absolute inset-0 overflow-hidden">
		<img
			class="object-cover w-full h-full"
			src={`https://cms.buildingtec-elevators.com${sectionData.backgroundImageURL}`}
			srcset={`https://cms.buildingtec-elevators.com${sectionData.smBackgroundImageURL} 300w,
			https://cms.buildingtec-elevators.com${sectionData.mdBackgroundImageURL} 600w,
			https://cms.buildingtec-elevators.com${sectionData.lgBackgroundImageURL} 1200w,`}
			sizes="(max-width: 600px) 300px,
		 (max-width: 1200px) 600px,
		 1200px"
			alt="background"
		/>
	</div>

	<!-- Dimmer layer -->
	<div class="absolute inset-0 bg-black bg-opacity-50" />

	<!-- Text container -->
	<div class="container mx-auto grid grid-cols-6 relative z-10 text-center">
		{#if currentLocal === 'en'}
			<div
				class="col-span-6 space-y-8 xl:space-y-12 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
			>
				<!-- en Heading -->
				<h1 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold px-2 md:px-0">
					{sectionData.enSectionTitle}
				</h1>
				<!-- en Subheading -->
				<h2 class="text-2xl lg:text-3xl text-white section-msg lg:px-12">
					{sectionData.enSectionMessage}
				</h2>
				<!-- en Call-to-action button -->
				<button type="button" class="btn variant-filled-secondary btn-xl">
					{sectionData.enButtonText}
				</button>
			</div>
		{:else}
			<div
				class="col-span-6 space-y-8 xl:space-y-12 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
			>
				<!-- ar Heading -->
				<h1 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold px-2 md:px-0">
					{sectionData.arSectionTitle}
				</h1>
				<!-- ar Subheading -->
				<h2 class="text-2xl lg:text-3xl text-white section-msg lg:px-12">
					{sectionData.arSectionMessage}
				</h2>
				<!-- ar Call-to-action button -->
				<button type="button" class="btn variant-filled-secondary btn-xl">
					{sectionData.arButtonText}
				</button>
			</div>
		{/if}
	</div>
</section>

<style>
	.section-msg {
		line-height: 48px;
		letter-spacing: 1.2px;
		word-spacing: 2px;
		text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);
	}
	@media screen and (max-width: 720px) {
		.section-msg {
			line-height: 40px;
			letter-spacing: normal;
			word-spacing: normal;
			padding: 0px 18px;
		}
	}
</style>
