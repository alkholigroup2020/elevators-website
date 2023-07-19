<script>
	import { page } from '$app/stores';
	import FooterSection from '$lib/footer/FooterSection.svelte';
	const productID = $page.params.productID;
</script>

<div class="h-[2000px]">
	<h1>{productID}</h1>
</div>

<FooterSection />
