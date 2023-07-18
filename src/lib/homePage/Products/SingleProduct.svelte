<script>
	/**
	 * @type {any}
	 */
	export let product;

	import { currentAppLang } from '$lib/stores/store';
</script>

<a
	class="card bg-transparent card-hover overflow-hidden shadow-md"
	href={`${$currentAppLang}/product/${product.attributes.linkName}`}
>
	<header>
		<!-- aspect-[21/11] lg:aspect-[21/14] xl:aspect-[21/13]  -->
		<img
			src={`https://cms.buildingtec-elevators.com${product.attributes.productImage.data.attributes.url}`}
			class="w-full aspect-[8/5]"
			alt={`${product.attributes.productTitle} product image`}
		/>
	</header>
	<div class="p-4 space-y-4">
		{#if $currentAppLang === 'en'}
			<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
				{product.attributes.productTitle}
			</h3>
			<article>
				<p class="text-xl leading-9 pb-3">
					{product.attributes.productBrief}
				</p>
			</article>
		{:else}
			<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
				{product.attributes.localizations.data[0].attributes.productTitle}
			</h3>
			<article>
				<p class="text-xl leading-9 pb-3">
					{product.attributes.localizations.data[0].attributes.productBrief}
				</p>
			</article>
		{/if}
	</div>
</a>
