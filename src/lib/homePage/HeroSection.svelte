<script>
	/**
	 * @type {any}
	 */
	export let imageURL;
</script>

<!-- <h1 class="h1">{imageURL}</h1> -->
<!-- <img class="w-full max-h-[50%]" src={`http://10.11.10.66:1337${imageURL}`} alt="" /> -->

<!-- Hero section -->
<section class="relative min-h-[75%] flex items-center justify-center">
	<!-- Image container -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- <img
			src="http://10.11.10.66:1337/uploads/landing_BG_4mw_W_Wt_Scai_8a1f78c5c9.jpg"
			alt="Background image"
			class="object-cover w-full h-full"
		/> -->
		<img class="object-cover w-full h-full" src={`http://10.11.10.66:1337${imageURL}`} alt="" />
	</div>

	<!-- Dimmer layer -->
	<div class="absolute inset-0 bg-black bg-opacity-40" />

	<!-- Text container -->
	<div class="relative z-10 flex flex-col items-center space-y-4">
		<!-- Heading -->
		<h1 class="text-4xl md:text-6xl text-white font-bold">Welcome to our website!</h1>

		<!-- Subheading -->
		<h2 class="text-2xl md:text-4xl text-white font-semibold">We create amazing things.</h2>

		<!-- Call-to-action button -->
		<button
			class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded"
		>
			Get started
		</button>
	</div>
</section>
