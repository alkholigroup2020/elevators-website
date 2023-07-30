<script lang="ts">
	import { onMount } from 'svelte';
	let imageHolder: Element; // This will hold the reference to the second div
	let dimensions = { width: 0, height: 0 };

	onMount(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				dimensions = entry.contentRect;
			}
		});

		resizeObserver.observe(imageHolder);
	});
</script>

<div bind:this={imageHolder} class="relative">
	<div class="absolute left-1 top-1 rounded-md p-3 opacity-50 text-2xl text-white bg-black z-[999]">
		<p>Width: {Math.round(dimensions.width)}px</p>
		<p>Height: {Math.round(dimensions.height)}px</p>
	</div>
</div>
