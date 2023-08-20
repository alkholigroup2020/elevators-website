<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<img
			src="/products/car-elevators/Header_2000x500.webp"
			alt="passengers elevators page header"
			srcset="/products/car-elevators/Header_800x400.webp 768w, 
			/products/car-elevators/Header_1600x640.webp 1536w, 
			/products/car-elevators/Header_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-white text-3xl md:text-5xl lg:text-7xl font-bold pb-4 min-[300px]:pb-0"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.carElevators.title()}
				</h1>
				<p
					class="text-white hidden min-[300px]:block text-md min-[500px]:text-lg md:text-2xl lg:text-3xl mb-2 min-[500px]:my-5 md:my-6 2xl:my-10 leading-5 min-[500px]:leading-6 xl:leading-normal
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.carElevators.intro()}
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
					{$LL.products.carElevators.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<section>
		<!-- flex items-center justify-center -->
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 xl:gap-12">
				<div>
					<div class="lg:p-12 2xl:p-[90px]">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/Traffic_Light_400x320.webp"
							srcset="/products/car-elevators/Traffic_Light_400x200.webp 640w, /products/car-elevators/Traffic_Light_400x160.webp 1024w,
							/products/car-elevators/Traffic_Light_400x280.webp 1536w, /products/car-elevators/Traffic_Light_400x320.webp 8000w"
							class="w-screen aspect-[1/0.5] sm:aspect-[1/0.4] lg:aspect-[1/0.7] 2xl:aspect-[1/0.8]
								{$currentAppLang === 'en'
								? 'min-[300px]:pr-[50%] md:pr-[60%] lg:pr-0'
								: 'min-[300px]:pl-[50%] md:pl-[60%] lg:pl-0'}
							"
						/>
					</div>

					<div>
						<p class="text-xl md:text-2xl font-semibold text-primary-500 my-3 lg:text-center">
							{$LL.products.carElevators.secondSection.first.title()}
						</p>
					</div>
					<div>
						<p class="text-md md:text-xl leading-7">
							{$LL.products.carElevators.secondSection.first.p1()}
						</p>
					</div>
				</div>

				<div>
					<div class="lg:p-12 2xl:p-[90px]">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/Lift_400x320.webp"
							srcset="/products/car-elevators/Lift_400x200.webp 640w, /products/car-elevators/Lift_400x160.webp 1024w,
							/products/car-elevators/Lift_400x280.webp 1536w, /products/car-elevators/Lift_400x320.webp 8000w"
							class="w-screen aspect-[1/0.5] sm:aspect-[1/0.4] lg:aspect-[1/0.7] 2xl:aspect-[1/0.8]
							{$currentAppLang === 'en'
								? 'min-[300px]:pr-[50%] md:pr-[60%] lg:pr-0'
								: 'min-[300px]:pl-[50%] md:pl-[60%] lg:pl-0'}
							"
						/>
					</div>

					<div>
						<p class="text-xl md:text-2xl font-semibold text-primary-500 my-3 lg:text-center">
							{$LL.products.carElevators.secondSection.second.title()}
						</p>
					</div>
					<div>
						<p class="text-md md:text-xl leading-7">
							{$LL.products.carElevators.secondSection.second.p1()}
						</p>
					</div>
				</div>

				<div>
					<div class="lg:p-12 2xl:p-[90px]">
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/COP_Arrows_400x320.webp"
							srcset="/products/car-elevators/COP_Arrows_400x200.webp 640w, /products/car-elevators/COP_Arrows_400x160.webp 1024w,
							/products/car-elevators/COP_Arrows_400x280.webp 1536w, /products/car-elevators/COP_Arrows_400x320.webp 8000w"
							class="w-screen aspect-[1/0.5] sm:aspect-[1/0.4] lg:aspect-[1/0.7] 2xl:aspect-[1/0.8]
							{$currentAppLang === 'en'
								? 'min-[300px]:pr-[50%] md:pr-[60%] lg:pr-0'
								: 'min-[300px]:pl-[50%] md:pl-[60%] lg:pl-0'}
							"
						/>
					</div>
					<div>
						<p class="text-xl md:text-2xl font-semibold text-primary-500 my-3 lg:text-center">
							{$LL.products.carElevators.secondSection.third.title()}
						</p>
					</div>
					<div>
						<p class="text-md md:text-xl leading-7">
							{$LL.products.carElevators.secondSection.third.p1()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-12 md:my-16">
			<div>
				<p class="text-2xl md:text-3xl font-semibold text-primary-500 my-3">
					{$LL.products.carElevators.thirdSection.title()}
				</p>
			</div>
			<div class="grid min-[380px]:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/car-elevators/Elli_Max_400x480.webp"
						srcset="/products/car-elevators/Elli_Max_400x440.webp 380w, /products/car-elevators/Elli_Max_400x480.webp 8000w"
						class="w-screen aspect-[1/1.1] min-[380px]:aspect-[1/1.2]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/car-elevators/Elli_Max_S_400x480.webp"
						srcset="/products/car-elevators/Elli_Max_S_400x440.webp 380w, /products/car-elevators/Elli_Max_S_400x480.webp 8000w"
						class="w-screen aspect-[1/1.1] min-[380px]:aspect-[1/1.2]"
					/>
				</div>
				<div>
					<div>
						<!-- image -->
						<img
							alt="an elevator cabin"
							src="/products/car-elevators/ECO_TC_400x480.webp"
							srcset="/products/car-elevators/ECO_TC_400x440.webp 380w, /products/car-elevators/ECO_TC_400x480.webp 8000w"
							class="w-screen aspect-[1/1.1] min-[380px]:aspect-[1/1.2]"
						/>
					</div>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/car-elevators/Vlift_400x480.webp"
						srcset="/products/car-elevators/Vlift_400x440.webp 380w, /products/car-elevators/Vlift_400x480.webp 8000w"
						class="w-screen aspect-[1/1.1] min-[380px]:aspect-[1/1.2]"
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
