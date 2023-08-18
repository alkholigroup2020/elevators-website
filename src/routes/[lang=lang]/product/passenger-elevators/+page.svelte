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
			src="/products/passenger-elevators/Headline_Photo_2000x500.webp"
			alt="passengers elevators page header"
			srcset="/products/passenger-elevators/Headline_Photo_800x400.webp 768w, /products/passenger-elevators/Headline_Photo_1600x640.webp 1536w, /products/passenger-elevators/Headline_Photo_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-30" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-4xl lg:text-7xl font-bold text-white pb-8 2xl:pb-12"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.passenger.title()}
				</h1>
				<a
					href={`/${$currentAppLang}/newelevator`}
					aria-label="a link to the new-elevator form page"
					class="btn variant-filled-secondary border border-success-500 rounded-md px-3 lg:px-5 py-2 lg:py-3 text-lg md:text-[22px]"
				>
					{$LL.heroSection.action()}
				</a>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-16 md:my-20">
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
					<div class="text-xl space-y-4 lg:space-y-2 xl:space-y-6 2xl:space-y-8 pb-6 lg:pb-0">
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
							class="btn border rounded-sm border-success-500 btn-md text-lg py-2 px-4 2xl:px-6"
						>
							{$LL.products.passenger.introSection.link()}
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 2xl:gap-8">
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/passenger-elevators/Doppler Inox Bronze Etched_500x450.webp"
						srcset="/products/passenger-elevators/Doppler Inox Bronze Etched_740x481.webp 1024w, /products/passenger-elevators/Doppler Inox Bronze Etched_400x400.webp 1536w, /products/passenger-elevators/Doppler Inox Bronze Etched_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/passenger-elevators/Doppler Russian Classic Cabin with Frames_500x450.webp"
						srcset="/products/passenger-elevators/Doppler Russian Classic Cabin with Frames_740x481.webp 1024w, /products/passenger-elevators/Doppler Russian Classic Cabin with Frames_400x400.webp 1536w, /products/passenger-elevators/Doppler Russian Classic Cabin with Frames_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/passenger-elevators/Doppler Quilted Cabin_500x450.webp"
						srcset="/products/passenger-elevators/Doppler Quilted Cabin_740x481.webp 1024w, /products/passenger-elevators/Doppler Quilted Cabin_400x400.webp 1536w, /products/passenger-elevators/Doppler Quilted Cabin_500x450.webp 8000w"
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
				<p class="text-2xl text-primary-500">
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
						class="list-disc text-xl space-y-2 lg:space-y-0 xl:space-y-4 leading-9 {$currentAppLang ===
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

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="grid lg:grid-cols-3 gap-8 lg:gap-16">
				<!-- first -->
				<div>
					<div class="text-2xl mb-3 text-primary-500">
						<p>
							{$LL.products.passenger.thirdSection.firstTitle()}
						</p>
					</div>
					<div class="space-y-3 text-xl 2xl:text-justify">
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
				</div>
				<!-- second -->
				<div>
					<div class="text-2xl mb-3 text-primary-500">
						<p>
							{$LL.products.passenger.thirdSection.secondTitle()}
						</p>
					</div>
					<div class="space-y-3 text-xl 2xl:text-justify">
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
				</div>
				<!-- third -->
				<div>
					<div class="text-2xl mb-3 text-primary-500">
						<p>
							{$LL.products.passenger.thirdSection.thirdTitle()}
						</p>
					</div>
					<div class="space-y-3 text-xl 2xl:text-justify">
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

	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div
				class="grid min-[350px]:grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 gap-8 xl:gap-16"
			>
				<div>
					<img
						alt="energy efficiency rating"
						src="/products/passenger-elevators/energy-efficiency-rating_350x210.webp"
						srcset="/products/passenger-elevators/energy-efficiency-rating_180x144.webp 1024w, 
						/products/passenger-elevators/energy-efficiency-rating_350x280.webp 1536w, 
						/products/passenger-elevators/energy-efficiency-rating_350x210.webp 8000w"
						class="w-screen aspect-[1/0.8] 2xl:aspect-[1/0.6]"
					/>
				</div>
				<div>
					<img
						alt="shield check symbol like protection logo concept"
						src="/products/passenger-elevators/shield-check-symbol_350x210.webp"
						srcset="/products/passenger-elevators/shield-check-symbol_180x144.webp 1024w, 
						/products/passenger-elevators/shield-check-symbol_350x280.webp 1536w, 
						/products/passenger-elevators/shield-check-symbol_350x210.webp 8000w"
						class="w-screen aspect-[1/0.8] 2xl:aspect-[1/0.6]"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- table -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 mb-16 md:mb-20">
			<div class="mb-6">
				<!-- Title -->
				<p class="text-2xl text-primary-500">
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
