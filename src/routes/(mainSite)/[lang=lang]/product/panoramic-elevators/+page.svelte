<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<!-- class="flex flex-col items-center" -->
<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			src="/products/panoramic-elevators/panoramic-3_2000x600.webp"
			alt="panoramic elevators page header"
			srcset="/products/panoramic-elevators/panoramic-1_800x640.webp 768w, 
							/products/panoramic-elevators/panoramic-2_1600x720.webp 1536w, 
							/products/panoramic-elevators/panoramic-3_2000x600.webp 8000w"
			class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0 space-y-8 md:space-y-10">
				<h1
					class="text-white heading-{$currentAppLang}-1 font-bold leading-10"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.panoramic.title()}
				</h1>
				<p
					class="text-white hidden font-medium min-[350px]:block large-{$currentAppLang}-text leading-5 min-[500px]:leading-8 xl:leading-relaxed
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.panoramic.intro()}
				</p>
				<a
					href={`/${$currentAppLang}/meeting`}
					aria-label="a link to the meeting page"
					class="text-white btn bg-primary-600 font-medium rounded-sm px-3 lg:px-5 py-2 lg:py-3 main-{$currentAppLang}-text"
				>
					{$LL.heroSection.action()}
				</a>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.panoramic.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-12 md:my-16">
			<div class="grid min-[380px]:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/001-min_400x320.webp"
						srcset="/products/panoramic-elevators/001-min_400x280.webp 768w, /products/panoramic-elevators/001-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/002-min_400x320.webp"
						srcset="/products/panoramic-elevators/002-min_400x280.webp 768w, /products/panoramic-elevators/002-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/003-min_400x320.webp"
						srcset="/products/panoramic-elevators/003-min_400x280.webp 768w, /products/panoramic-elevators/003-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/004-min_400x320.webp"
						srcset="/products/panoramic-elevators/004-min_400x280.webp 768w, /products/panoramic-elevators/004-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/005-min_400x320.webp"
						srcset="/products/panoramic-elevators/005-min_400x280.webp 768w, /products/panoramic-elevators/005-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/006-min_400x320.webp"
						srcset="/products/panoramic-elevators/006-min_400x280.webp 768w, /products/panoramic-elevators/006-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/007-min_400x320.webp"
						srcset="/products/panoramic-elevators/007-min_400x280.webp 768w, /products/panoramic-elevators/007-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/008-min_400x320.webp"
						srcset="/products/panoramic-elevators/008-min_400x280.webp 768w, /products/panoramic-elevators/008-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/009-min_400x320.webp"
						srcset="/products/panoramic-elevators/009-min_400x280.webp 768w, /products/panoramic-elevators/009-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/panoramic-elevators/010-min_400x320.webp"
						srcset="/products/panoramic-elevators/010-min_400x280.webp 768w, /products/panoramic-elevators/010-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
			</div>
		</div>
	</section>
</div>
