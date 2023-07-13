<script>
	import LL from '$i18n/i18n-svelte';
	import YouTubeVideo from '.././generalComponents/YouTubeVideo.svelte';
	/**
	 * @type {string}
	 */
	export let currentLocal;
</script>

<section class="dopplerSection text-white py-0" dir={currentLocal === 'en' ? 'ltr' : 'rtl'}>
	<div class="pb-0 max-w-[1920px] mx-auto lg:px-[80px] xl:px-[265px] 2xl:px-0">
		<!-- title section -->
		<div class="py-12">
			<h2 class="leading-[60px] text-4xl lg:text-4xl 2xl:text-5xl font-semibold px-8">
				<span class="text-primary-500">{$LL.dopplerSection.headingSpan()}</span>
				<span>{$LL.dopplerSection.heading()}</span>
			</h2>
		</div>
		<!-- video & text section -->
		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 pb-12 xl:pb-16">
			<!-- video section -->
			<div class=" w-full">
				<!--  md:pb-[60px]  lg:px-[120px] xl:px-[300px] 2xl:px-0 -->
				<div class="aspect-w-16 aspect-h-9 px-9 pb-5">
					<YouTubeVideo videoId="7MetnNL31aY" />
				</div>
			</div>
			<!-- text section -->
			<div class="px-8 w-full space-y-10 xl:pt-3 2xl:pt-0">
				<p class="text-xl leading-9">
					{$LL.dopplerSection.p1()}
				</p>
				<p class="text-xl leading-9">
					{$LL.dopplerSection.p2()}
				</p>
				<p class="text-xl leading-9">
					{$LL.dopplerSection.p3()}
				</p>
				<p class="text-xl leading-9">
					{$LL.dopplerSection.p4()}
				</p>
				<p class="text-xl leading-9">
					{$LL.dopplerSection.p5()}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.dopplerSection {
		background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;
	}
</style>
