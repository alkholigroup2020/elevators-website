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
			src="/products/sps/Header_2000x500.webp"
			alt="smart parking systems page header"
			srcset="/products/sps/Header_800x400.webp 768w, 
			/products/sps/Header_1600x640.webp 1536w, 
			/products/sps/Header_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-white text-3xl md:text-5xl lg:text-7xl font-bold pb-4 min-[350px]:pb-0"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.sps.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block text-md min-[500px]:text-lg md:text-2xl lg:text-3xl mb-2 min-[500px]:my-5 md:my-6 2xl:my-10 leading-5 min-[500px]:leading-6 xl:leading-normal
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.sps.intro()}
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
		<div class="container mx-auto px-5 2xl:px-0 my-16 md:my-20">
			<div class="grid min-[380px]:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/001-min_400x320.webp"
						srcset="/products/sps/001-min_400x280.webp 768w, /products/sps/001-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/002-min_400x320.webp"
						srcset="/products/sps/002-min_400x280.webp 768w, /products/sps/002-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/003-min_400x320.webp"
						srcset="/products/sps/003-min_400x280.webp 768w, /products/sps/003-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/004-min_400x320.webp"
						srcset="/products/sps/004-min_400x280.webp 768w, /products/sps/004-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/005-min_400x320.webp"
						srcset="/products/sps/005-min_400x280.webp 768w, /products/sps/005-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/006-min_400x320.webp"
						srcset="/products/sps/006-min_400x280.webp 768w, /products/sps/006-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/007-min_400x320.webp"
						srcset="/products/sps/007-min_400x280.webp 768w, /products/sps/007-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
				<div>
					<img
						alt="a panoramic elevator"
						src="/products/sps/008-min_400x320.webp"
						srcset="/products/sps/008-min_400x280.webp 768w, /products/sps/008-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-5 md:mb-8">
			<div class="text-2xl md:text-4xl font-semibold text-primary-500">
				<p>{$LL.products.sps.pageTitle()}</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-8 md:mb-12">
			<!-- Q1 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.sps.q1.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q1.a()}</p>
			</div>
			<!-- Q2 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q2.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q2.a()}</p>
			</div>
			<!-- Q3 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q3.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q3.a()}</p>
			</div>
			<!-- Q4 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q4.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q4.a()}</p>
			</div>
			<!-- Q5 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q5.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q5.a()}</p>
			</div>
			<div class="mt-3 ml-5">
				<div
					class="grid md:grid-cols-2 gap-8 lg:gap-20 leading-9 text-md md:text-xl md:text-justify"
				>
					<div>
						<ul class="list-disc space-y-5">
							<li>{$LL.products.sps.q5.li1()}</li>
							<li>{$LL.products.sps.q5.li2()}</li>
							<li>{$LL.products.sps.q5.li3()}</li>
							<li>{$LL.products.sps.q5.li4()}</li>
						</ul>
					</div>
					<div>
						<ul class="list-disc space-y-5">
							<li>{$LL.products.sps.q5.li5()}</li>
							<li>{$LL.products.sps.q5.li6()}</li>
							<li>{$LL.products.sps.q5.li7()}</li>
							<li>{$LL.products.sps.q5.li8()}</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Q6 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q6.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q6.a()}</p>
			</div>
			<!-- Q7 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q7.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q7.a()}</p>
			</div>
			<!-- Q8 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q8.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q8.a()}</p>
			</div>
			<!-- Q9 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q9.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q9.a()}</p>
			</div>
			<!-- Q10 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q10.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q10.a()}</p>
			</div>
			<!-- Q11 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q11.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q11.a()}</p>
			</div>
			<!-- Q12 -->
			<div class="text-xl md:text-2xl font-normal text-primary-500 mb-1 md:mb-3 mt-5 md:mt-8">
				<p>{$LL.products.sps.q12.q()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>{$LL.products.sps.q12.a()}</p>
			</div>
		</div>
	</section>
</div>
