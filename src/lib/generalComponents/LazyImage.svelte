<script lang="ts">
	import { lazyLoad } from './lazyLoad';
	export let src: string;
	export let alt: string = '';
	export let appliedClass: string = '';
	export let srcset: string = '';
</script>

<img use:lazyLoad={src} {alt} class={appliedClass} {srcset} />

<style>
	/* img {
		opacity: 0;
		transition: opacity 5s ease;
	} */
</style>
