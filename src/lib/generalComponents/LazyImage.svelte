<script lang="ts">
	import { lazyLoad } from './lazyLoad';
	export let src: string;
	export let alt: string = '';
</script>

<img use:lazyLoad={src} {alt} />

<style>
	img {
		opacity: 0;
		transition: all 5s ease;
	}
</style>
