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
			src="/products/escalators/EscalatorHeader_2000x500.webp"
			alt="passengers elevators page header"
			srcset="/products/escalators/EscalatorHeader_800x400.webp 768w, 
			/products/escalators/EscalatorHeader_1600x640.webp 1536w, 
			/products/escalators/EscalatorHeader_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-white text-3xl md:text-5xl lg:text-7xl font-bold pb-4 min-[350px]:pb-0"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.escalators.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block text-md min-[500px]:text-lg md:text-2xl lg:text-3xl mb-2 min-[500px]:my-5 md:my-6 2xl:my-10 leading-5 min-[500px]:leading-6 xl:leading-normal
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.escalators.intro()}
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
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.escalators.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-12 md:my-16">
			<div class="grid min-[380px]:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
				<div>
					<img
						alt="an escalator"
						src="/products/escalators/001-min_400x320.webp"
						srcset="/products/escalators/001-min_400x280.webp 768w, /products/escalators/001-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="an escalator"
						src="/products/escalators/004-min_400x320.webp"
						srcset="/products/escalators/004-min_400x280.webp 768w, /products/escalators/004-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="an escalator"
						src="/products/escalators/002-min_400x320.webp"
						srcset="/products/escalators/002-min_400x280.webp 768w, /products/escalators/002-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>

				<div>
					<img
						alt="an escalator"
						src="/products/escalators/003-min_400x320.webp"
						srcset="/products/escalators/003-min_400x280.webp 768w, /products/escalators/003-min_400x320.webp 8000w"
						class="w-screen aspect-[1/0.7] md:aspect-[1/0.8]"
					/>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-12 md:my-16">
			<div class="text-2xl md:text-3xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.escalators.secondSection.title()}</p>
			</div>
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<div
						class="text-xl md:text-2xl font-semibold lg:min-h-[4.5rem] xl:min-h-fit my-1 md:my-3"
					>
						<p>{$LL.products.escalators.secondSection.first.title()}</p>
					</div>
					<div>
						<p
							class="mb-3 md:mb-5 text-xl leading-9 md:min-h-[11.25rem] lg:min-h-[9rem] xl:min-h-[6.75] 2xl:min-h-[4.5rem]"
						>
							{$LL.products.escalators.secondSection.first.p1()}
						</p>
					</div>
					<div
						class="{$currentAppLang === 'en'
							? 'sm:pr-32 md:pr-0 xl:pr-8 2xl:pr-16'
							: 'sm:pl-32 md:pl-0 xl:pl-8 2xl:pl-16'}
					"
					>
						<img
							alt="an escalator argument"
							src="/products/escalators/one_400x200.webp"
							srcset="/products/escalators/one_400x240.webp 768w, /products/escalators/one_400x200.webp 8000w"
							class="w-screen aspect-[1/0.6] md:aspect-[1/0.5]"
						/>
					</div>
				</div>

				<div>
					<div
						class="text-xl md:text-2xl font-semibold lg:min-h-[4.5rem] xl:min-h-fit my-1 md:my-3"
					>
						<p>{$LL.products.escalators.secondSection.second.title()}</p>
					</div>
					<div>
						<p
							class="mb-3 md:mb-5 text-xl leading-9 md:min-h-[11.25rem] lg:min-h-[9rem] xl:min-h-[6.75] 2xl:min-h-[4.5rem]"
						>
							{$LL.products.escalators.secondSection.second.p1()}
						</p>
					</div>
					<div
						class={$currentAppLang === 'en'
							? 'sm:pr-32 md:pr-0 xl:pr-8 2xl:pr-16'
							: 'sm:pl-32 md:pl-0 xl:pl-8 2xl:pl-16'}
					>
						<img
							alt="an escalator argument"
							src="/products/escalators/two_400x200.webp"
							srcset="/products/escalators/two_400x240.webp 768w, /products/escalators/two_400x200.webp 8000w"
							class="w-screen aspect-[1/0.6] md:aspect-[1/0.5]"
						/>
					</div>
				</div>

				<div>
					<div
						class="text-xl md:text-2xl font-semibold lg:min-h-[4.5rem] xl:min-h-fit my-1 md:my-3"
					>
						<p>{$LL.products.escalators.secondSection.third.title()}</p>
					</div>
					<div>
						<p
							class="mb-3 md:mb-5 text-xl leading-9 md:min-h-[11.25rem] lg:min-h-[9rem] xl:min-h-[6.75]"
						>
							{$LL.products.escalators.secondSection.third.p1()}
						</p>
					</div>
					<div
						class={$currentAppLang === 'en'
							? 'sm:pr-32 md:pr-0 xl:pr-8 2xl:pr-16'
							: 'sm:pl-32 md:pl-0 xl:pl-8 2xl:pl-16'}
					>
						<img
							alt="an escalator argument"
							src="/products/escalators/three_400x200.webp"
							srcset="/products/escalators/three_400x240.webp 768w, /products/escalators/three_400x200.webp 8000w"
							class="w-screen aspect-[1/0.6] md:aspect-[1/0.5]"
						/>
					</div>
				</div>

				<div>
					<div
						class="text-xl md:text-2xl font-semibold lg:min-h-[4.5rem] xl:min-h-fit my-1 md:my-3"
					>
						<p>{$LL.products.escalators.secondSection.fourth.title()}</p>
					</div>
					<div>
						<p
							class="mb-3 md:mb-5 text-xl leading-9 md:min-h-[11.25rem] lg:min-h-[9rem] xl:min-h-[6.75]"
						>
							{$LL.products.escalators.secondSection.fourth.p1()}
						</p>
					</div>
					<div
						class={$currentAppLang === 'en'
							? 'sm:pr-32 md:pr-0 xl:pr-8 2xl:pr-16'
							: 'sm:pl-32 md:pl-0 xl:pl-8 2xl:pl-16'}
					>
						<img
							alt="an escalator argument"
							src="/products/escalators/four_400x200.webp"
							srcset="/products/escalators/four_400x240.webp 768w, /products/escalators/four_400x200.webp 8000w"
							class="w-screen aspect-[1/0.6] md:aspect-[1/0.5]"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- table -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="text-2xl md:text-3xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.escalators.tableSection.title()}</p>
			</div>
			<div>
				<div class="table-container">
					<table class="table table-hover">
						<thead>
							<tr>
								<th class={$currentAppLang === 'en' ? '' : 'text-right'}
									>{$LL.products.passenger.tableSection.head1()}</th
								>
								<th class={$currentAppLang === 'en' ? '' : 'text-right'}
									>{$LL.products.passenger.tableSection.head2()}</th
								>
								<th class={$currentAppLang === 'en' ? '' : 'text-right'}
									>{$LL.products.passenger.tableSection.head3()}</th
								>
								<th class={$currentAppLang === 'en' ? '' : 'text-right'}
									>{$LL.products.passenger.tableSection.head4()}</th
								>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>DHS 200-30K</td>
								<td>Commercial</td>
								<td>0.5 m/s</td>
								<td>30 – 35 degrees</td>
							</tr>
							<tr>
								<td>DHS 200-30</td>
								<td>Public Traffic</td>
								<td>0.5 m/s – 0.65 m/s</td>
								<td>23.2 – 27.3 – 30 degrees</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</div>
