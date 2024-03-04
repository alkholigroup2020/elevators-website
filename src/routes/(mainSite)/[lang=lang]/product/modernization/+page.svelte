<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<svelte:head>
	<meta property="og:description" content="modernization" />
	<meta property="og:description" content="تحديث المصاعد" />
</svelte:head>

<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			src="/products/modernization/modernization-03_2000x600.webp"
			alt="modernization page header"
			srcset="/products/modernization/modernization-01_800x640.webp 768w, 
							/products/modernization/modernization-02_1600x720.webp 1536w, 
							/products/modernization/modernization-03_2000x600.webp 8000w"
			class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0 space-y-8 md:space-y-10">
				<h1
					class="text-white heading-{$currentAppLang}-1 font-bold leading-normal md:leading-10"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.modernization.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block large-{$currentAppLang}-text leading-5 min-[500px]:leading-8 font-medium xl:leading-relaxed
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.modernization.intro()}
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

	<section class="pt-3 md:pt-5">
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.firstSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.modernization.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.secondSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<div class="grid sm:grid-cols-2 sm:gap-8 leading-9">
					<div>
						<ul>
							<li>{$LL.products.modernization.secondSection.li1()}</li>
							<li>{$LL.products.modernization.secondSection.li2()}</li>
							<li>{$LL.products.modernization.secondSection.li3()}</li>
							<li>{$LL.products.modernization.secondSection.li4()}</li>
							<li>{$LL.products.modernization.secondSection.li5()}</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>{$LL.products.modernization.secondSection.li6()}</li>
							<li>{$LL.products.modernization.secondSection.li7()}</li>
							<li>{$LL.products.modernization.secondSection.li8()}</li>
							<li>{$LL.products.modernization.secondSection.li9()}</li>
							<li>{$LL.products.modernization.secondSection.li10()}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.thirdSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.modernization.thirdSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.fourthSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.modernization.fourthSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.fifthSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.modernization.fifthSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section class="pb-5 md:pb-8">
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.sixthSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.modernization.sixthSection.p1()}
				</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify pt-5">
				<p>
					{$LL.products.modernization.sixthSection.p2()}
				</p>
			</div>
		</div>
	</section>
</div>
