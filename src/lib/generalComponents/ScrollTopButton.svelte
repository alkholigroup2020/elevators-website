<script lang="ts">
	import { onMount } from 'svelte';

	let y: number;

	onMount(() => {
		window.addEventListener('scroll', () => {
			y = window.scrollY;
		});
	});

	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<button
	class="fixed bottom-6 right-3 z-50 variant-filled-primary shadow-xl rounded-full w-12 md:w-14 h-12 md:h-14"
	on:click={scrollToTop}
	hidden={y > 800 ? false : true}
>
	<div class="flex justify-center">
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF"
				><path
					d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"
				/></svg
			>
		</span>
	</div>
</button>
