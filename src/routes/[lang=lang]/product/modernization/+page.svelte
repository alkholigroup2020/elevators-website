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
			src="/products/modernization/modernization_2000x500.webp"
			alt="modernization page header"
			srcset="/products/modernization/modernization_800x400.webp 768w, 
			/products/modernization/modernization_1600x640.webp 1536w, 
			/products/modernization/modernization_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-white text-3xl md:text-5xl lg:text-7xl font-bold pb-4 min-[350px]:pb-0"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.modernization.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block text-md min-[500px]:text-lg md:text-2xl lg:text-3xl mb-2 min-[500px]:my-5 md:my-6 2xl:my-10 leading-5 min-[500px]:leading-6 xl:leading-normal
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.modernization.intro()}
				</p>
				<a
					href={`/${$currentAppLang}/meeting`}
					aria-label="a link to the meeting page"
					class="btn variant-filled-secondary border border-success-500 rounded-md px-3 lg:px-5 py-2 lg:py-3 text-md md:text-[22px]"
				>
					{$LL.heroSection.action()}
				</a>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.firstSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.modernization.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.secondSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
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
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.thirdSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.modernization.thirdSection.p1()}
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.fourthSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.modernization.fourthSection.p1()}
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.fifthSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.modernization.fifthSection.p1()}
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.modernization.sixthSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.modernization.sixthSection.p1()}
				</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify pt-5">
				<p>
					{$LL.products.modernization.sixthSection.p2()}
				</p>
			</div>
		</div>
	</section>
</div>
