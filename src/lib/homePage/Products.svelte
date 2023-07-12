<script>
	import LL from '$i18n/i18n-svelte';
	/**
	 * @type {string}
	 */
	export let currentLocal;
	import SingleProduct from './products/SingleProduct.svelte';
	/**
	 * @type {any}
	 */
	export let sectionData;

	/**
	 * @param {any[]} arr
	 */
	function orderByProductOrder(arr) {
		arr.sort((a, b) => a.attributes.productOrder - b.attributes.productOrder);
		return arr;
	}

	const sortedProducts = orderByProductOrder(sectionData);
</script>

<!-- Product section -->
<section class="container mx-auto px-8 md:px-4 pb-10" dir={currentLocal === 'en' ? 'ltr' : 'rtl'}>
	<div>
		<h3 class="text-4xl lg:text-4xl 2xl:text-5xl font-semibold text-primary-500 py-12">
			{$LL.productsSection.heading()}
		</h3>
	</div>

	<!-- <pre>{sectionData[0].attributes.localizations.data[0].attributes.productBrief}</pre> -->

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-[90px] gap-y-15 pb-12">
		{#each sortedProducts as product}
			<SingleProduct {product} {currentLocal} />
		{/each}

		<!-- <SingleProduct /> -->
	</div>
</section>
