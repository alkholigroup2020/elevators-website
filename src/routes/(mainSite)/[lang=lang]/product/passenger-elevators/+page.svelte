<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<svelte:head>
	<meta property="og:description" content="Passenger Elevators" />
	<meta property="og:description" content="Elevator" />
	<meta property="og:description" content="مصاعد أفراد" />
	<meta property="og:description" content="المصاعد" />
</svelte:head>

<!-- class="flex flex-col items-center" -->
<div dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}>
	<!-- Hero Section -->
	<section class="relative flex">
		<div class="mx-auto">
			<img
				src="/products/passenger-elevators/passengers_header_2000x600.webp"
				alt="passengers elevators page header"
				srcset="/products/passenger-elevators/passengers_header_800x640.webp 768w, 
								/products/passenger-elevators/passengers_header_1600x720.webp 1536w, 
								/products/passenger-elevators/passengers_header_2000x600.webp 8000w"
				class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
			/>
		</div>

		<div class="absolute inset-0 bg-black opacity-40" />

		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="heading-{$currentAppLang}-1 font-bold text-white pb-6 2xl:pb-12"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.passenger.title()}
				</h1>

				<p
					class="text-white hidden xl:max-w-[80%] font-medium min-[350px]:block large-{$currentAppLang}-text leading-6 min-[500px]:leading-8 pb-5 2xl:pb-8 xl:leading-relaxed
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.passenger.intro()}
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

	<!-- image and text -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-10 md:my-20">
			<div class="grid lg:grid-cols-2 lg:gap-4 xl:gap-8">
				<div class="max-lg:order-last">
					<!-- the image -->
					<img
						loading="lazy"
						src="/products/passenger-elevators/Doppler_Panoramic_800x440.webp"
						srcset="/products/passenger-elevators/Doppler_Panoramic_730x438.webp 1024w, /products/passenger-elevators/Doppler_Panoramic_800x640.webp 1280w, /products/passenger-elevators/Doppler_Panoramic_800x520.webp 1536w, /products/passenger-elevators/Doppler_Panoramic_800x440.webp 8000w"
						alt="passengers elevators page header"
						class="w-screen aspect-[1/0.6] lg:aspect-[1/0.8] xl:aspect-[1/0.65] 2xl:aspect-[1/0.55]"
					/>
				</div>
				<div>
					<div
						class="main-{$currentAppLang}-text leading-7 space-y-4 lg:space-y-2 xl:space-y-6 2xl:space-y-8 pb-6 lg:pb-0"
					>
						<p>
							{$LL.products.passenger.introSection.p1()}
						</p>
						<p>
							{$LL.products.passenger.introSection.p2()}
						</p>
						<p>
							{$LL.products.passenger.introSection.p3()}
						</p>
						<p>
							{$LL.products.passenger.introSection.p4()}
						</p>
					</div>
					<div class="max-lg:mb-8 lg:mt-4 xl:mt-6 2xl:mt-8">
						<!-- btn -->
						<a
							href={`https://design.doppler.gr/`}
							target="_blank"
							aria-label="a link to doppler website"
							class="btn border rounded-sm border-success-500 btn-md sub-main-{$currentAppLang}-text py-2 px-4 2xl:px-6 bg-success-700"
						>
							<span class="text-white font-medium">
								{$LL.products.passenger.introSection.link()}
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- three images gallery -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 2xl:gap-8">
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/passenger-elevators/Doppler_Inox_Bronze_Etched_500x450.webp"
						srcset="/products/passenger-elevators/Doppler_Inox_Bronze_Etched_740x481.webp 1024w, 
						/products/passenger-elevators/Doppler_Inox_Bronze_Etched_400x400.webp 1536w, 
						/products/passenger-elevators/Doppler_Inox_Bronze_Etched_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/passenger-elevators/Doppler_Russian_Classic_Cabin_with_Frames_500x450.webp"
						srcset="/products/passenger-elevators/Doppler_Russian_Classic_Cabin_with_Frames_740x481.webp 1024w, 
						/products/passenger-elevators/Doppler_Russian_Classic_Cabin_with_Frames_400x400.webp 1536w, 
						/products/passenger-elevators/Doppler_Russian_Classic_Cabin_with_Frames_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/passenger-elevators/Doppler_Quilted_Cabin_500x450.webp"
						srcset="/products/passenger-elevators/Doppler_Quilted_Cabin_740x481.webp 1024w, 
						/products/passenger-elevators/Doppler_Quilted_Cabin_400x400.webp 1536w, 
						/products/passenger-elevators/Doppler_Quilted_Cabin_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="mb-6">
				<!-- Title -->
				<p class="heading-{$currentAppLang}-3 text-primary-500">
					{$LL.products.passenger.secondSection.title()}
				</p>
			</div>
			<div class="grid md:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-16">
				<div
					class="md:col-span-2 lg:col-span-1 {$currentAppLang === 'en'
						? 'min-[320px]:pr-12 min-[520px]:pr-36 md:pr-0'
						: 'min-[320px]:pl-12 min-[520px]:pl-36 md:pl-0'} "
				>
					<!-- image -->
					<img
						alt="an engin"
						src="/products/passenger-elevators/engine_470x329.webp"
						srcset="/products/passenger-elevators/engine_470x282.webp 1024w, 
						/products/passenger-elevators/engine_470x376.webp 1536w, 
						/products/passenger-elevators/engine_470x329.webp 8000w"
						class="w-screen aspect-[1/0.6] md:aspect-[1/0.8] 2xl:aspect-[1/0.7]"
					/>
				</div>
				<div class="md:col-span-2 xl:px-8">
					<!-- list -->
					<ul
						class="list-disc main-{$currentAppLang}-text space-y-2 lg:space-y-0 xl:space-y-4 leading-9 {$currentAppLang ===
						'en'
							? 'ml-5 md:ml-8 lg:ml-5 xl:ml-1'
							: 'mr-5 md:mr-8 lg:mr-5 xl:mr-1'}"
					>
						<li>{$LL.products.passenger.secondSection.li1()}</li>
						<li>{$LL.products.passenger.secondSection.li2()}</li>
						<li>{$LL.products.passenger.secondSection.li3()}</li>
						<li>{$LL.products.passenger.secondSection.li4()}</li>
						<li>{$LL.products.passenger.secondSection.li5()}</li>
						<li>{$LL.products.passenger.secondSection.li6()}</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- three text sections -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="grid lg:grid-cols-3 gap-8 lg:gap-16">
				<!-- first -->
				<div>
					<div class="heading-{$currentAppLang}-3 mb-3 text-primary-500">
						<p>
							{$LL.products.passenger.thirdSection.firstTitle()}
						</p>
					</div>
					<div
						class="space-y-3 main-{$currentAppLang}-text 2xl:text-justify leading-7 lg:min-h-[28rem] xl:min-h-[21rem] 2xl:min-h-[18rem]"
					>
						<p>
							{$LL.products.passenger.thirdSection.firstP1()}
						</p>
						<p>
							{$LL.products.passenger.thirdSection.firstP2()}
						</p>
						<p>
							{$LL.products.passenger.thirdSection.firstP3()}
						</p>
					</div>
					<div class="mt-3 lg:mt-5">
						<img
							alt="energy efficiency rating"
							src="/products/passenger-elevators/energy_500x300.webp"
							class="max-w-[300px] md:max-w-[400px] lg:max-w-full aspect-[1/0.6]"
						/>
						<!-- <div class="bg-pink-400 max-w-[300px] md:max-w-[400px] lg:max-w-full aspect-[1/0.6]">
							<SectionSize />
						</div> -->
					</div>
				</div>
				<!-- second -->
				<div>
					<div class="heading-{$currentAppLang}-3 mb-3 text-primary-500">
						<p>
							{$LL.products.passenger.thirdSection.secondTitle()}
						</p>
					</div>
					<div
						class="space-y-3 main-{$currentAppLang}-text 2xl:text-justify leading-7 lg:min-h-[28rem] xl:min-h-[21rem] 2xl:min-h-[18rem]"
					>
						<p>
							{$LL.products.passenger.thirdSection.secondP1()}
						</p>
						<p>
							{$LL.products.passenger.thirdSection.secondP2()}
						</p>
						<p>
							{$LL.products.passenger.thirdSection.secondP3()}
						</p>
					</div>
					<div class="mt-3 lg:mt-5">
						<img
							alt="quality"
							src="/products/passenger-elevators/quality_500x300.webp"
							class="max-w-[300px] md:max-w-[400px] lg:max-w-full aspect-[1/0.6]"
						/>
					</div>
				</div>
				<!-- third -->
				<div>
					<div class="heading-{$currentAppLang}-3 mb-3 text-primary-500">
						<p>
							{$LL.products.passenger.thirdSection.thirdTitle()}
						</p>
					</div>
					<div class="space-y-3 main-{$currentAppLang}-text 2xl:text-justify leading-7">
						<p>
							{$LL.products.passenger.thirdSection.thirdP1()}
						</p>
						<p>
							{$LL.products.passenger.thirdSection.thirdP2()}
						</p>
						<p>
							{$LL.products.passenger.thirdSection.thirdP3()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- table -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="mb-6">
				<!-- Title -->
				<p class="heading-{$currentAppLang}-3 text-primary-500">
					{$LL.products.passenger.tableSection.title()}
				</p>
			</div>
			<div>
				<!-- table -->
				<div class="table-container">
					<!-- Native Table Element -->
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
								<td>FOCUS</td>
								<td>Traction</td>
								<td>0.63 m/s – 1 m/s</td>
								<td>300 Kg – 1000 Kg</td>
							</tr>
							<tr>
								<td>ECO2i</td>
								<td>Traction</td>
								<td>1 m/s – 1.6 m/s</td>
								<td>300 Kg – 2000 Kg</td>
							</tr>
							<tr>
								<td>ECO2iS</td>
								<td>Traction</td>
								<td>1 m/s</td>
								<td>300 Kg – 1000 Kg</td>
							</tr>
							<tr>
								<td>RC</td>
								<td>Traction</td>
								<td>1 m/s – 2.5 m/s</td>
								<td>300 Kg – 1450 Kg</td>
							</tr>
							<tr>
								<td>ELLI</td>
								<td>Hydraulic</td>
								<td>0.15 m/s – 0.63 m/s</td>
								<td>250 Kg – 630 Kg</td>
							</tr>
							<tr>
								<td>ELLImax</td>
								<td>Hydraulic</td>
								<td>0.15 m/s – 0.63 m/s</td>
								<td>1500 Kg – 3000 Kg</td>
							</tr>
							<tr>
								<td>ELLImax S</td>
								<td>Hydraulic</td>
								<td>0,15 m/s</td>
								<td>1500 Kg – 3000 Kg</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</div>
