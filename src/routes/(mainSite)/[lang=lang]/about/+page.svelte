<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<div class="flex flex-col items-center" dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			loading="lazy"
			src="/about-us/header/AboutUsFinal_2000x500.webp"
			alt="About-us page background"
			srcset="/about-us/header/AboutUsFinal_800x400.webp 768w, /about-us/header/AboutUsFinal_1600x640.webp 1536w, /about-us/header/AboutUsFinal_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-30" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="heading-{$currentAppLang}-1 font-bold text-white pb-16"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.aboutUs.title()}
				</h1>
			</div>
		</div>
	</section>

	<!-- Our Story Section -->
	<section class="container mx-auto px-5 2xl:px-0 my-12 md:my-20 sm:text-justify">
		<div>
			<p class="heading-{$currentAppLang}-2 text-primary-500 font-bold mb-4 xl:mb-12">
				{$LL.aboutUs.ourStory.title()}
			</p>
		</div>

		<div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
			<div>
				<ul class="main-{$currentAppLang}-text leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p1()}</li>
					<li>{$LL.aboutUs.ourStory.p2()}</li>
				</ul>
			</div>
			<div>
				<img
					loading="lazy"
					src="/about-us/our-story/story_2000x1500.webp"
					alt="our story"
					srcset="/about-us/our-story/story_800x480.webp 768w, /about-us/our-story/story_1600x1120.webp 1536w, /about-us/our-story/story_2000x1500.webp 99999w"
					class="w-full lg:p-16 xl:p-0 aspect-[1/0.6] md:aspect-[1/0.7] xl:aspect-[1/0.75]"
				/>
			</div>
		</div>

		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-12 mt-10">
			<div>
				<ul class="main-{$currentAppLang}-text leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p3()}</li>
				</ul>
			</div>
			<div>
				<ul class="main-{$currentAppLang}-text leading-9 space-y-5">
					<li>{$LL.aboutUs.ourStory.p4()}</li>
				</ul>
			</div>
		</div>

		<div class="h-[1px] w-full bg-surface-900-50-token mt-12" />
	</section>

	<!-- Our Values Section -->
	<section class="container mx-auto px-5 2xl:px-0 mb-8 md:mb-16">
		<div>
			<p class="heading-{$currentAppLang}-2 text-primary-500 font-bold mb-12 text-center">
				{$LL.aboutUs.ourValues.title()}
			</p>
		</div>
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
			<div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 heading-{$currentAppLang}-3 font-medium">
						{$LL.aboutUs.ourValues.v1()}
					</p>
					<p class="main-{$currentAppLang}-text leading-9">{$LL.aboutUs.ourValues.p1()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 heading-{$currentAppLang}-3 font-medium">
						{$LL.aboutUs.ourValues.v2()}
					</p>
					<p class="main-{$currentAppLang}-text leading-9">{$LL.aboutUs.ourValues.p2()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 heading-{$currentAppLang}-3 font-medium">
						{$LL.aboutUs.ourValues.v3()}
					</p>
					<p class="main-{$currentAppLang}-text leading-9">{$LL.aboutUs.ourValues.p3()}</p>
				</div>
			</div>

			<div>
				<div class="px-12 flex justify-center">
					<div class="max-w-[400px]">
						<img
							loading="lazy"
							src="/about-us/My_project_400x400.webp"
							alt="our values"
							class="w-full aspect-[1/1]"
						/>
					</div>
				</div>
			</div>

			<div class="xl:text-right">
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 heading-{$currentAppLang}-3 font-medium">
						{$LL.aboutUs.ourValues.v4()}
					</p>
					<p class="main-{$currentAppLang}-text leading-9">{$LL.aboutUs.ourValues.p4()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 heading-{$currentAppLang}-3 font-medium">
						{$LL.aboutUs.ourValues.v5()}
					</p>
					<p class="main-{$currentAppLang}-text leading-9">{$LL.aboutUs.ourValues.p5()}</p>
				</div>
				<div class="space-y-5 mb-8">
					<p class="text-primary-500 heading-{$currentAppLang}-3 font-medium">
						{$LL.aboutUs.ourValues.v6()}
					</p>
					<p class="main-{$currentAppLang}-text leading-9">{$LL.aboutUs.ourValues.p6()}</p>
				</div>
			</div>
		</div>
		<div class="h-[1px] w-full bg-surface-900-50-token mt-10" />
	</section>

	<!-- Why Us Section -->
	<section class="container mx-auto px-5 2xl:px-0 mb-12 md:mb-16">
		<div>
			<p class="heading-{$currentAppLang}-2 text-primary-500 font-bold mb-4 xl:mb-12">
				{$LL.aboutUs.whyUs.title()}
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div>
				<ul class={$currentAppLang === 'en' ? 'xl:pr-12' : 'xl:pl-12'}>
					<li>
						<p class="main-{$currentAppLang}-text pb-5 leading-9">{$LL.aboutUs.whyUs.r1()}</p>
					</li>
					<li>
						<p class="main-{$currentAppLang}-text pb-5 leading-9">{$LL.aboutUs.whyUs.r2()}</p>
					</li>
					<li>
						<p class="main-{$currentAppLang}-text pb-5 leading-9">{$LL.aboutUs.whyUs.r3()}</p>
					</li>
					<li>
						<p class="main-{$currentAppLang}-text pb-5 leading-9">{$LL.aboutUs.whyUs.r4()}</p>
					</li>
				</ul>
			</div>

			<div>
				<div>
					<div>
						<img
							loading="lazy"
							src="/about-us/why-us/Why_Choose_Us_Final_800x480.webp"
							alt="why us"
							srcset="/about-us/why-us/Why_Choose_Us_Final_600x420.webp 768w, /about-us/why-us/Why_Choose_Us_Final_800x480.webp 99999w"
							class="w-full aspect-[1/0.7] md:aspect-[1/0.6]"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
