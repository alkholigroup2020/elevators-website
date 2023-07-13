<!-- Svelte component file -->
<script>
	import LL from '$i18n/i18n-svelte';
	import YouTubeVideo from '.././generalComponents/YouTubeVideo.svelte';

	/**
	 * @type {string}
	 */
	export let currentLocal;
</script>

<section class="welcomeSection text-white py-0" dir={currentLocal === 'en' ? 'ltr' : 'rtl'}>
	<div class="pb-0 max-w-[1920px] mx-auto">
		<!-- title section -->
		<div
			class=" 2xl:text-center px-8 lg:px-[110px] xl:px-[300px] 2xl:px-0 py-9 md:py-12 2xl:py-[70px]"
		>
			<h2 class="text-4xl lg:text-4xl 2xl:text-5xl font-semibold">
				<span>{$LL.welcomeSection.heading()}</span>
				<span class="text-primary-500">{$LL.welcomeSection.headingSpan()}</span>
			</h2>
		</div>

		<!-- Second row: Two columns -->
		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
			<!-- Left column: Image and UL -->
			<div class="grid 2xl:grid-cols-2 pb-8 2xl:pb-0 gap-4 lg:px-8">
				<!-- Left sub-column: Image -->
				<div class="relative hidden 2xl:block">
					<img
						src="/img-welcome-min.webp"
						alt="description"
						class="w-[85%] h-full pt-[40px] 2xl:pt-[60px] object-cover"
					/>
				</div>

				<!-- Right sub-column: UL with 3 li elements -->
				<div
					class={currentLocal === 'en'
						? 'px-8 lg:px-[80px] xl:px-[270px] 2xl:px-0 2xl:-ml-8'
						: 'px-8 lg:px-[80px] xl:px-[270px] 2xl:px-0 2xl:-mr-12'}
				>
					<ul>
						<li class="the-padding">
							<div class="grid grid-cols-8">
								<div class="cols-span-1 pt-1">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											width="33"
											height="33"
											><title>90-Arrow Up</title><g id="_90-Arrow_Up" data-name="90-Arrow Up"
												><path
													fill="#d63030"
													d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Z"
												/><path
													fill="#fff"
													d="M15.29,10.29l-8,8,1.41,1.41L16,12.41l7.29,7.29,1.41-1.41-8-8A1,1,0,0,0,15.29,10.29Z"
												/></g
											></svg
										>
									</span>
								</div>
								<div
									class={currentLocal === 'en'
										? 'col-start-2 col-end-9 ml-1 sm:-ml-5 md:-ml-10 lg:-ml-[40px] 2xl:ml-0'
										: 'col-start-2 col-end-9 mr-1 sm:-mr-5 md:-mr-10 lg:-mr-[40px] 2xl:mr-0'}
								>
									<h3
										class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500"
										style="text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5);"
									>
										{$LL.welcomeSection.firstTitle()}
									</h3>
									<p class="text-xl leading-9">
										{$LL.welcomeSection.firstParagraph()}
									</p>
								</div>
							</div>
						</li>
						<li class="the-padding">
							<div class="grid grid-cols-8 gap-0">
								<div class="cols-span-1 pt-1">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											width="33"
											height="33"
											><title>90-Arrow Up</title><g id="_90-Arrow_Up" data-name="90-Arrow Up"
												><path
													fill="#d63030"
													d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Z"
												/><path
													fill="#fff"
													d="M15.29,10.29l-8,8,1.41,1.41L16,12.41l7.29,7.29,1.41-1.41-8-8A1,1,0,0,0,15.29,10.29Z"
												/></g
											></svg
										>
									</span>
								</div>
								<div
									class={currentLocal === 'en'
										? 'col-start-2 col-end-9 ml-1 sm:-ml-5 md:-ml-10 lg:-ml-[40px] 2xl:ml-0'
										: 'col-start-2 col-end-9 mr-1 sm:-mr-5 md:-mr-10 lg:-mr-[40px] 2xl:mr-0'}
								>
									<h3
										class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500"
										style="text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5);"
									>
										{$LL.welcomeSection.secondTitle()}
									</h3>
									<p class="text-xl leading-9">
										{$LL.welcomeSection.secondParagraph()}
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="grid grid-cols-8">
								<div class="cols-span-1 pt-1">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											width="33"
											height="33"
											><title>90-Arrow Up</title><g id="_90-Arrow_Up" data-name="90-Arrow Up"
												><path
													fill="#d63030"
													d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Z"
												/><path
													fill="#fff"
													d="M15.29,10.29l-8,8,1.41,1.41L16,12.41l7.29,7.29,1.41-1.41-8-8A1,1,0,0,0,15.29,10.29Z"
												/></g
											></svg
										>
									</span>
								</div>
								<div
									class={currentLocal === 'en'
										? 'col-start-2 col-end-9 ml-1 sm:-ml-5 md:-ml-10 lg:-ml-[40px] 2xl:ml-0'
										: 'col-start-2 col-end-9 mr-1 sm:-mr-5 md:-mr-10 lg:-mr-[40px] 2xl:mr-0'}
								>
									<h3
										class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 text-custom-shadow"
										style="text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5);"
									>
										{$LL.welcomeSection.thirdTitle()}
									</h3>
									<p class="text-xl leading-9">
										{$LL.welcomeSection.thirdParagraph()}
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<!-- Right column: YouTube video -->
			<div
				class="aspect-w-16 aspect-h-9 pb-12 md:pb-[60px] px-8 lg:px-[120px] xl:px-[300px] 2xl:px-0"
			>
				<YouTubeVideo videoId="mwJpEtaygys" />
			</div>
		</div>
	</div>
</section>

<style>
	.welcomeSection {
		background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;
	}

	.the-padding {
		padding-bottom: 50px;
	}

	@media screen and (min-width: 1536px) {
		.the-padding {
			padding-bottom: 20px;
		}
	}
	@media screen and (min-width: 1650px) {
		.the-padding {
			padding-bottom: 40px;
		}
	}
	@media screen and (min-width: 1800px) {
		.the-padding {
			padding-bottom: 60px;
		}
	}
</style>
