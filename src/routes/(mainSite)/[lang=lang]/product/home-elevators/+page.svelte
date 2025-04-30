<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<svelte:head>
	<meta name="description" content="Home Elevator" />
	<meta name="description" content="مصعد منزلي" />
	<meta name="description" content="مصعد فيلا" />
	<meta name="description" content="مصعد منزلي في الرياض" />
	<meta name="description" content="مصعد منزلي في جدة" />
	<meta name="description" content="تركيب مصاعد منزلية" />
	<meta name="description" content="صيانة مصاعد منزلية" />
	<meta name="description" content="اسعار المصاعد المنزلية" />
	<meta name="description" content="مصعد منزلي رخيص" />
	<meta name="description" content="مصعد منزلي صغير" />
	<meta name="description" content="افضل مصعد منزلي" />
	<meta name="description" content="مصعد كهربائي منزلي" />
	<meta name="description" content="مصعد طعام منزلي" />
	<meta name="description" content="تكلفة المصعد المنزلي" />

	<meta
		name="keywords"
		content="مصعد منزلي, مصعد فيلا, تركيب مصاعد منزلية, صيانة مصاعد منزلية, اسعار المصاعد المنزلية, مصعد منزلي رخيص, مصعد منزلي صغير, افضل مصعد منزلي, مصعد كهربائي منزلي, مصعد طعام منزلي, تكلفة المصعد المنزلي, مصاعد منازل في الرياض, مصاعد منازل في جدة"
	/>
</svelte:head>

<!-- class="flex flex-col items-center" -->
<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			src="/products/home-elevators/home-elevators-03_2000x600.webp"
			alt="home elevators page header"
			srcset="/products/home-elevators/home-elevators-01_800x640.webp 768w, 
							/products/home-elevators/home-elevators-02_1600x720.webp 1536w, 
							/products/home-elevators/home-elevators-03_2000x600.webp 8000w"
			class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
		/>

		<div class="absolute inset-0 bg-black opacity-30" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0 space-y-8 md:space-y-10">
				<h1
					class="text-white heading-{$currentAppLang}-1 font-bold leading-normal md:leading-10"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.homeElevators.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block large-{$currentAppLang}-text leading-5 min-[500px]:leading-8 font-medium xl:leading-relaxed
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.homeElevators.intro()}
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
					{$LL.products.homeElevators.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.homeElevators.secondSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.homeElevators.secondSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<!-- the images -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 2xl:gap-8">
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/home-elevators/KaleaScene01_500x450.webp"
						srcset="/products/home-elevators/KaleaScene01_740x481.webp 1024w, 
						/products/home-elevators/KaleaScene01_400x400.webp 1536w, 
						/products/home-elevators/KaleaScene01_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/home-elevators/KaleaScene02_500x450.webp"
						srcset="/products/home-elevators/KaleaScene02_740x481.webp 1024w, 
						/products/home-elevators/KaleaScene02_400x400.webp 1536w, 
						/products/home-elevators/KaleaScene02_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/home-elevators/KaleaScene03_500x450.webp"
						srcset="/products/home-elevators/KaleaScene03_740x481.webp 1024w, 
						/products/home-elevators/KaleaScene03_400x400.webp 1536w, 
						/products/home-elevators/KaleaScene03_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.homeElevators.thirdSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.homeElevators.thirdSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section class="pb-5">
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.homeElevators.fourthSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.homeElevators.fourthSection.p1()}
				</p>
			</div>
			<div class="mt-4 grid lg:grid-cols-2 gap-4 sm:gap-12">
				<!-- left -->
				<div>
					<div class="main-{$currentAppLang}-text font-semibold mb-1 md:mb-3">
						<p>{$LL.products.homeElevators.fourthSection.left.title()}</p>
					</div>
					<div class="main-{$currentAppLang}-text leading-7 md:leading-9 max-lg:text-justify">
						<p>
							{$LL.products.homeElevators.fourthSection.left.p1()}
						</p>
					</div>
					<div>
						<ul
							class="list-disc main-{$currentAppLang}-text leading-7 md:leading-9 text-justify space-y-2 lg:space-y-0 xl:space-y-1 md:mt-3 {$currentAppLang ===
							'en'
								? 'ml-5 md:ml-8 lg:ml-5 xl:ml-5'
								: 'mr-5 md:mr-8 lg:mr-5 xl:mr-5'}"
						>
							<li>{$LL.products.homeElevators.fourthSection.left.li1()}</li>
							<li>{$LL.products.homeElevators.fourthSection.left.li2()}</li>
							<li>{$LL.products.homeElevators.fourthSection.left.li3()}</li>
						</ul>
					</div>
				</div>
				<!-- right -->
				<div>
					<div class="main-{$currentAppLang}-text font-semibold mb-1 md:mb-3">
						<p>{$LL.products.homeElevators.fourthSection.right.title()}</p>
					</div>
					<div class="main-{$currentAppLang}-text leading-7 md:leading-9 max-lg:text-justify">
						<p>
							{$LL.products.homeElevators.fourthSection.right.p1()}
						</p>
					</div>
					<div>
						<ul
							class="list-disc main-{$currentAppLang}-text leading-7 md:leading-9 text-justify space-y-2 lg:space-y-0 xl:space-y-1 md:mt-3 {$currentAppLang ===
							'en'
								? 'ml-5 md:ml-8 lg:ml-5 xl:ml-5'
								: 'mr-5 md:mr-8 lg:mr-5 xl:mr-5'}"
						>
							<li>{$LL.products.homeElevators.fourthSection.right.li1()}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
