<script>
	import FooterSection from '$lib/footer/FooterSection.svelte';
	import LL from '$i18n/i18n-svelte';
	import LazyImage from '$lib/generalComponents/LazyImage.svelte';

	import { onMount } from 'svelte';

	/**
	 * @type {Element}
	 */
	let imageHolder; // This will hold the reference to the second div
	let dimensions = { width: 0, height: 0 };

	onMount(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				dimensions = entry.contentRect;
			}
		});

		resizeObserver.observe(imageHolder);
	});

	async function fetchData() {
		const res = await fetch('/about-us/Why Choose Us Final.jpg');

		// const data = await res.json();

		if (res.ok) {
			return res;
		} else {
			throw new Error('Something Went Wrong!');
		}
	}
</script>

<div class="flex flex-col items-center">
	<!-- Hero Section -->
	<section class="relative flex items-center justify-center">
		<img
			src="/about-us/About us Final.webp"
			alt="Background"
			class="w-screen h-[450px] aspect-[16/9] object-cover"
		/>
		<div class="absolute inset-0 bg-black opacity-30" />
		<h1 class="absolute text-4xl xl:text-6xl font-bold text-gray-200">{$LL.aboutUs.title()}</h1>
	</section>

	<!-- Our Story Section -->
	<section class="container mx-auto px-5 2xl:px-0 my-8 md:my-16 sm:text-justify">
		<div>
			<p class="text-3xl lg:text-5xl text-primary-500 font-bold mb-4">
				{$LL.aboutUs.ourStory.title()}
			</p>
		</div>

		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-12">
			<div>
				<ul class="text-xl leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p1()}</li>
					<li>{$LL.aboutUs.ourStory.p2()}</li>
				</ul>
			</div>
			<div>
				<img
					src="/about-us/ourStory.webp"
					alt="Background"
					class="w-full lg:h-[500px] aspect-[2/1]"
				/>
			</div>
		</div>

		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-12 mt-5">
			<div>
				<ul class="text-xl leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p3()}</li>
				</ul>
			</div>
			<div>
				<ul class="text-xl leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p4()}</li>
				</ul>
			</div>
		</div>

		<div class="h-[1px] w-full bg-surface-900-50-token mt-5 2xl:mt-12" />
	</section>

	<!-- Our Values Section -->
	<section class="container mx-auto px-5 2xl:px-0 mb-8 md:mb-16">
		<div>
			<p class="text-3xl lg:text-5xl text-primary-500 font-bold mb-12 text-center">
				{$LL.aboutUs.ourValues.title()}
			</p>
		</div>
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
			<!-- left -->
			<div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v1()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p1()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v2()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p2()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v3()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p3()}</p>
				</div>
			</div>

			<!-- image -->
			<div>
				<div class="px-12">
					<img
						src="/about-us/My project.png"
						alt="Background"
						class="w-full lg:h-[400px] aspect-[2/1]"
					/>
				</div>
			</div>

			<!-- right -->
			<div class="text-right">
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v4()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p4()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v5()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p5()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 text-3xl font-medium">{$LL.aboutUs.ourValues.v6()}</p>
					<p class="text-xl leading-9">{$LL.aboutUs.ourValues.p6()}</p>
				</div>
			</div>
		</div>
		<div class="h-[1px] w-full bg-surface-900-50-token mt-5 2xl:mt-10" />
	</section>

	<!-- Why Us Section -->
	<section class="container mx-auto px-5 2xl:px-0 mb-8 md:mb-16">
		<div>
			<p class="text-3xl lg:text-5xl text-primary-500 font-bold mb-8">
				{$LL.aboutUs.whyUs.title()}
			</p>
		</div>

		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 px-5 2xl:px-0">
			<div>
				<ul>
					<li>
						<p class="text-xl pb-5">{$LL.aboutUs.whyUs.r1()}</p>
					</li>
					<li>
						<p class="text-xl pb-5">{$LL.aboutUs.whyUs.r2()}</p>
					</li>
					<li>
						<p class="text-xl pb-5">{$LL.aboutUs.whyUs.r3()}</p>
					</li>
					<li>
						<p class="text-xl pb-5">{$LL.aboutUs.whyUs.r4()}</p>
					</li>
				</ul>
			</div>

			<div bind:this={imageHolder}>
				<div class=" absolute text-error-500 z-[999]">
					<p>Width: {Math.round(dimensions.width)}px</p>
					<p>Height: {Math.round(dimensions.height)}px</p>
				</div>

				{#await fetchData()}
					<p>loading</p>
				{:then items}
					<LazyImage src={items.url} alt={`item.title`} />

					<!-- {#each items as item}
						<LazyImage src={item.url} alt={item.title} />
					{/each} -->
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</div>
		</div>
	</section>
</div>

<FooterSection />
