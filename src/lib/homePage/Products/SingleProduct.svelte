<script>
	/**
	 * @type {any}
	 */
	export let product;
	/**
	 * @type {string}
	 */
	export let currentLocal;
</script>

<a
	class="card bg-transparent card-hover overflow-hidden shadow-md"
	href={`${currentLocal}/product/${product.attributes.linkName}`}
>
	<header>
		<img
			src={`https://cms.buildingtec-elevators.com${product.attributes.productImage.data.attributes.url}`}
			class="aspect-[21/11] lg:aspect-[21/14] xl:aspect-[21/13] w-full"
			alt={`${product.attributes.productTitle} product image`}
		/>
	</header>
	<div class="p-4 space-y-4">
		{#if currentLocal === 'en'}
			<h3 class="h3 text-primary-500" data-toc-ignore>{product.attributes.productTitle}</h3>
			<article>
				<p class="pb-3">
					{product.attributes.productBrief}
				</p>
			</article>
		{:else}
			<h3 class="h3 text-primary-500" data-toc-ignore>
				{product.attributes.localizations.data[0].attributes.productTitle}
			</h3>
			<article>
				<p class="pb-3">
					{product.attributes.localizations.data[0].attributes.productBrief}
				</p>
			</article>
		{/if}
	</div>
</a>
