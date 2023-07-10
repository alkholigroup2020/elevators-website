<script>
	import LL from '$i18n/i18n-svelte';
	/**
	 * @type {string}
	 */
	export let currentLocal;
	import SingleProduct from './Products/SingleProduct.svelte';
	/**
	 * @type {any}
	 */
	export let sectionData;
</script>

<!-- Product section -->
<section class="container mx-auto px-8 md:px-4" dir={currentLocal === 'en' ? 'ltr' : 'rtl'}>
	<div>
		<h3 class="text-4xl lg:text-4xl 2xl:text-5xl font-semibold text-primary-500 py-12">
			{$LL.productsSection.heading()}
		</h3>
	</div>

	<!-- <pre>{sectionData[0].attributes.localizations.data[0].attributes.productBrief}</pre> -->

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 pb-12">
		{#each sectionData as product}
			<SingleProduct {product} {currentLocal} />
		{/each}

		<!-- <SingleProduct /> -->
	</div>
</section>
