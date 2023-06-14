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
	class="relative min-h-[75%] flex items-center justify-center"
	dir={currentLocal === 'en' ? 'ltr' : 'rtl'}
>
	<!-- Image container -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- <img
			src="http://10.11.10.66:1337/uploads/landing_BG_4mw_W_Wt_Scai_8a1f78c5c9.jpg"
			alt="Background image"
			class="object-cover w-full h-full"
		/> -->
		<img
			class="object-cover w-full h-full"
			src={`http://10.11.10.66:1337${sectionData.backgroundImageURL}`}
			alt=""
		/>
	</div>

	<!-- Dimmer layer -->
	<div class="absolute inset-0 bg-black bg-opacity-40" />

	<!-- Text container -->
	<div class="relative z-10 flex flex-col items-center space-y-4 px-[250px]">
		{#if currentLocal === 'en'}
			<!-- en Heading -->
			<h1 class="text-4xl md:text-6xl text-white font-bold">{sectionData.enSectionTitle}</h1>
			<!-- en Subheading -->
			<h2 class="text-2xl md:text-3xl px-2 text-white font-semibold py-12">
				{sectionData.enSectionMessage}
			</h2>
			<!-- en Call-to-action button -->
			<button
				class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded"
			>
				{sectionData.enButtonText}
			</button>
		{:else}
			<!-- ar Heading -->
			<h1 class="text-4xl md:text-6xl text-white font-bold">{sectionData.arSectionTitle}</h1>
			<!-- ar Subheading -->
			<h2 class="text-2xl md:text-3xl px-2 text-white font-semibold py-12">
				{sectionData.arSectionMessage}
			</h2>
			<!-- ar Call-to-action button -->
			<button
				class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded"
			>
				{sectionData.arButtonText}
			</button>
		{/if}
	</div>
</section>
