<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
</script>

<section>
	<div class="relative">
		<img
			alt="main hero section background"
			src="/home-page/header/landing_2000x820.webp"
			srcset="/home-page/header/landing_800x960.webp 768w, /home-page/header/landing_1200x840.webp 1024w, /home-page/header/landing_1400x700.webp 1280w, /home-page/header/landing_1600x720.webp 1536w, /home-page/header/landing_2000x820.webp 99999w"
			class="w-full min-[420px]:max-h-[70vh] min-[480px]:max-h-[50vh] md:max-h-[60vh] lg:max-h-none aspect-[1/1.2] md:aspect-[1/0.7] lg:aspect-[1/0.5] xl:aspect-[1/0.45] 2xl:aspect-[1/0.41]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />

		<div class="absolute inset-0 flex items-center justify-center">
			<div class="container mx-auto grid grid-cols-6 relative inset-0 z-10 text-center">
				<div
					class="col-span-6 space-y-12 min-[350px]:space-y-6 min-[450px]:space-y-10 min-[520px]:space-y-12 xl:space-y-12 2xl:space-y-16 lg:col-span-4 lg:col-start-1 lg:col-end-7 lg:px-12"
				>
					<!-- Heading -->
					<h1
						class="text-[40px] min-[450px]:text-5xl md:text-6xl xl:text-7xl text-white font-bold px-5"
						style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8); line-height:55px"
					>
						{$LL.heroSection.title()}
					</h1>
					<!-- Subheading -->
					<p
						class="text-lg min-[390px]:text-xl md:text-2xl lg:text-3xl text-white max-[768px]:text-justify section-msg px-5 lg:px-[50px] xl:px-[150px] hidden min-[350px]:block"
					>
						<span class="leading-2 min-[390px]:leading-8 md:leading-relaxed">
							{$LL.heroSection.message()}
						</span>
					</p>
					<!--  Call-to-action button -->
					<a
						href={`/${$currentAppLang}/meeting`}
						aria-label="a link to the new-elevator form page"
						class="btn variant-filled-secondary border border-success-500 btn-md md:btn-xl text-lg md:text-[22px]"
					>
						{$LL.heroSection.action()}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section-msg {
		text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);
	}
</style>
