<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<svelte:head>
	<meta name="description" content="Cargo Elevator" />
	<meta name="description" content="مصعد البضائع" />
</svelte:head>

<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			src="/products/cargo-elevators/goods-03_2000x600.webp"
			alt="cargo elevators page header"
			srcset="/products/cargo-elevators/goods-01_800x640.webp 768w, 
							/products/cargo-elevators/goods-02_1600x720.webp 1536w, 
							/products/cargo-elevators/goods-03_2000x600.webp 8000w"
			class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
		/>

		<div class="absolute inset-0 bg-black opacity-30" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0 space-y-8 md:space-y-10">
				<h1
					class="text-white heading-{$currentAppLang}-1 font-bold leading-normal md:leading-10"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.cargoElevators.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block large-{$currentAppLang}-text leading-5 min-[500px]:leading-8 font-medium xl:leading-relaxed
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.cargoElevators.intro()}
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
					{$LL.products.cargoElevators.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.cargoElevators.secondSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
				<p>
					{$LL.products.cargoElevators.secondSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-3 md:mb-5">
				<p>{$LL.products.cargoElevators.thirdSection.title()}</p>
			</div>
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 xl:gap-12">
				<div>
					<div class="2xl:p-12">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/cargo-elevators/Picture_1_400x360.webp"
							srcset="/products/cargo-elevators/Picture_1_400x320.webp 380w,
							/products/cargo-elevators/Picture_1_400x240.webp 768w,
							/products/cargo-elevators/Picture_1_400x200.webp 1024w,
							/products/cargo-elevators/Picture_1_400x360.webp 8000w"
							class="w-screen aspect-[1/0.8] min-[380px]:aspect-[1/0.6] md:aspect-[1/0.5] lg:aspect-[1/0.9] {$currentAppLang ===
							'en'
								? 'min-[200px]:pr-[50%] md:pr-[60%] lg:px-20'
								: 'min-[200px]:pl-[60%] md:pl-[60%] lg:px-20'} "
						/>
					</div>

					<div>
						<p class="main-{$currentAppLang}-text my-3 lg:my-5 lg:text-center">
							{$LL.products.cargoElevators.thirdSection.first()}
						</p>
					</div>
				</div>

				<div>
					<div class="2xl:p-16">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/cargo-elevators/Picture_2_400x360.webp"
							srcset="/products/cargo-elevators/Picture_2_400x320.webp 380w,
							/products/cargo-elevators/Picture_2_400x240.webp 768w,
							/products/cargo-elevators/Picture_2_400x200.webp 1024w,
							/products/cargo-elevators/Picture_2_400x360.webp 8000w"
							class="w-screen aspect-[1/0.8] min-[380px]:aspect-[1/0.6] md:aspect-[1/0.5] lg:aspect-[1/0.9] {$currentAppLang ===
							'en'
								? 'min-[200px]:pr-[50%] md:pr-[60%] lg:px-16'
								: 'min-[200px]:pl-[60%] md:pl-[60%] lg:px-16'} "
						/>
					</div>

					<div>
						<p class="main-{$currentAppLang}-text my-3 lg:my-5 lg:text-center">
							{$LL.products.cargoElevators.thirdSection.second()}
						</p>
					</div>
				</div>

				<div>
					<div class="2xl:p-12">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/cargo-elevators/Picture_3_400x360.webp"
							srcset="/products/cargo-elevators/Picture_3_400x320.webp 380w,
							/products/cargo-elevators/Picture_3_400x240.webp 768w,
							/products/cargo-elevators/Picture_3_400x200.webp 1024w,
							/products/cargo-elevators/Picture_3_400x360.webp 8000w"
							class="w-screen aspect-[1/0.8] min-[380px]:aspect-[1/0.6] md:aspect-[1/0.5] lg:aspect-[1/0.9] {$currentAppLang ===
							'en'
								? 'min-[200px]:pr-[50%] md:pr-[60%] lg:px-16'
								: 'min-[200px]:pl-[60%] md:pl-[60%] lg:px-16'} "
						/>
					</div>

					<div>
						<p class="main-{$currentAppLang}-text my-3 lg:my-5 lg:text-center">
							{$LL.products.cargoElevators.thirdSection.third()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- table -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
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
								<td>GLP without attendant</td>
								<td>Hydraulic</td>
								<td>0.3 m/s</td>
								<td>300 Kg – 2000 Kg</td>
							</tr>
							<tr>
								<td>GLC without attendant</td>
								<td>Hydraulic</td>
								<td>0.63 m/s</td>
								<td>300 Kg – 2000 Kg</td>
							</tr>
							<tr>
								<td>GLC with attendant</td>
								<td>Hydraulic</td>
								<td>0.15 m/s</td>
								<td>300 Kg – 2000 Kg</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</div>
