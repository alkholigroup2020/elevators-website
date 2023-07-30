<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Define the breakpoints as specified in your Tailwind CSS configuration
	const breakpoints: any = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		'2xl': 1536
	};

	let dimensions = { width: 0, height: 0 };
	let currentBreakpoint = '';

	let updateDimensions = () => {
		dimensions.width = window.innerWidth;
		dimensions.height = window.innerHeight;

		for (let breakpoint in breakpoints) {
			if (window.innerWidth >= breakpoints[breakpoint]) {
				currentBreakpoint = breakpoint;
			}
		}
	};

	onMount(() => {
		window.addEventListener('resize', updateDimensions);
		updateDimensions();
	});
</script>

<div class="fixed top-10 right-10 bg-opacity-50 bg-white text-black p-2 rounded z-[999]">
	<p>Width: {dimensions.width}px</p>
	<p>Height: {dimensions.height}px</p>
	<p>Breakpoint: {currentBreakpoint}</p>
</div>
