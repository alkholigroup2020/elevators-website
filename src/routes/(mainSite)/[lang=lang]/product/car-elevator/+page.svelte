<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			src="/products/passenger-elevators/passengers_header_2000x600.webp"
			alt="car elevators page header"
			srcset="/products/passenger-elevators/passengers_header_800x640.webp 768w, 
							/products/passenger-elevators/passengers_header_1600x720.webp 1536w, 
							/products/passenger-elevators/passengers_header_2000x600.webp 8000w"
			class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-white heading-{$currentAppLang}-1 font-bold pb-4 min-[300px]:pb-0"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.carElevators.title()}
				</h1>
				<p
					class="text-white hidden min-[300px]:block large-{$currentAppLang}-text mb-2 min-[500px]:my-5 md:my-6 2xl:my-10 leading-5 min-[500px]:leading-6 xl:leading-normal
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.carElevators.intro()}
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
		<div class="container mx-auto px-5 2xl:px-0 mt-8 md:mt-12">
			<div class="main-{$currentAppLang}-text md:leading-10 text-justify">
				<p>
					{$LL.products.carElevators.firstSection.p1()}
				</p>
			</div>
			<hr class="mt-8 md:mt-12" />
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mt-6 md:mt-16">
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 xl:gap-12">
				<div>
					<div class="mb-8">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/elevators-1_400x280.webp"
							class="w-3/5 sm:w-2/6 lg:w-3/5 2xl:w-1/2 aspect-[1/0.7]"
						/>
						<!-- <div class="bg-pink-400 w-3/5 sm:w-2/6 lg:w-3/5 2xl:w-1/2 aspect-[1/0.7]">
							<SectionSize />
						</div> -->
					</div>

					<div>
						<p class="heading-{$currentAppLang}-3 font-meduim text-primary-500 my-3">
							{$LL.products.carElevators.secondSection.first.title()}
						</p>
					</div>
					<div>
						<p class="main-{$currentAppLang}-text leading-7 sm:leading-9">
							{$LL.products.carElevators.secondSection.first.p1()}
						</p>
					</div>
				</div>

				<div>
					<div class="mb-8">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/elevators-2_400x280.webp"
							class="w-3/5 sm:w-2/6 lg:w-3/5 2xl:w-1/2 aspect-[1/0.7]"
						/>
					</div>

					<div>
						<p class="heading-{$currentAppLang}-3 font-meduim text-primary-500 my-3">
							{$LL.products.carElevators.secondSection.second.title()}
						</p>
					</div>
					<div>
						<p class="main-{$currentAppLang}-text leading-7 sm:leading-9">
							{$LL.products.carElevators.secondSection.second.p1()}
						</p>
					</div>
				</div>

				<div>
					<div class="mb-8">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/elevators-3_400x280.webp"
							class="w-3/5 sm:w-2/6 lg:w-3/5 2xl:w-1/2 aspect-[1/0.7]"
						/>
					</div>
					<div>
						<p class="heading-{$currentAppLang}-3 font-meduim text-primary-500 my-3">
							{$LL.products.carElevators.secondSection.third.title()}
						</p>
					</div>
					<div>
						<p class="main-{$currentAppLang}-text leading-7 sm:leading-9">
							{$LL.products.carElevators.secondSection.third.p1()}
						</p>
					</div>
				</div>
			</div>
			<hr class="mt-6 md:mt-16" />
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-12 md:my-16">
			<div>
				<p class="text-2xl md:text-3xl font-meduim text-primary-500 mt-3 xl:-mb-8">
					{$LL.products.carElevators.thirdSection.title()}
				</p>
			</div>
			<div class="grid min-[250px]:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/car-elevators/Untitled-1_400x440.webp"
						class="w-full sm:p-5 md:p-8 2xl:p-12 aspect-[1/1.1]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/car-elevators/Untitled-3_400x440.webp"
						class="w-full sm:p-5 md:p-8 2xl:p-12 aspect-[1/1.1]"
					/>
				</div>
				<div>
					<div>
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/Untitled-4_400x440.webp"
							class="w-full sm:p-5 md:p-8 2xl:p-12 aspect-[1/1.1]"
						/>
					</div>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/car-elevators/Untitled-2_400x440.webp"
						class="w-full sm:p-5 md:p-8 2xl:p-12 aspect-[1/1.1]"
					/>
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
								<td>Elli Max</td>
								<td>Hydraulic</td>
								<td>0.63 m/s</td>
								<td>3600 Kg – 5000 Kg</td>
							</tr>
							<tr>
								<td>Elli Max S</td>
								<td>Hydraulic</td>
								<td>0.63 m/s</td>
								<td>3600 Kg – 5000 Kg</td>
							</tr>
							<tr>
								<td>ECO TC</td>
								<td>Traction</td>
								<td>1 m/s</td>
								<td>3000 Kg – 4000 Kg – 5000Kg</td>
							</tr>
							<tr>
								<td>Vlift</td>
								<td>Hydraulic</td>
								<td>0.15 m/s</td>
								<td>2000 Kg – 2500 Kg – 3000Kg </td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</div>
