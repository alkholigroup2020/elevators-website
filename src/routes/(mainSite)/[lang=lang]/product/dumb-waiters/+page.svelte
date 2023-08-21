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
			src="/products/dumb-waiters/Header_2_2000x500.webp"
			alt="passengers elevators page header"
			srcset="/products/dumb-waiters/Header_2_800x400.webp 768w, 
			/products/dumb-waiters/Header_2_1600x640.webp 1536w, 
			/products/dumb-waiters/Header_2_2000x500.webp 8000w"
			class="w-screen aspect-[1/0.5] md:aspect-[1/0.4] xl:aspect-[1/0.25]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-white text-3xl md:text-5xl lg:text-7xl font-bold pb-4 min-[350px]:pb-0"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.dumbWaiters.title()}
				</h1>
				<p
					class="text-white hidden min-[350px]:block text-md min-[500px]:text-lg md:text-2xl lg:text-3xl mb-2 min-[500px]:my-5 md:my-6 2xl:my-10 leading-5 min-[500px]:leading-6 xl:leading-normal
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64'}"
				>
					{$LL.products.dumbWaiters.intro()}
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
					{$LL.products.dumbWaiters.firstSection.p1()}
				</p>
			</div>
		</div>
	</section>

	<!-- the images -->
	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="grid lg:grid-cols-3 gap-12 lg:gap-4 2xl:gap-8">
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/dumb-waiters/first_500x450.webp"
						srcset="/products/dumb-waiters/first_740x481.webp 1024w, 
							/products/dumb-waiters/first_400x400.webp 1536w, 
							/products/dumb-waiters/first_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/dumb-waiters/second_500x450.webp"
						srcset="/products/dumb-waiters/second_740x481.webp 1024w, 
							/products/dumb-waiters/second_400x400.webp 1536w, 
							/products/dumb-waiters/second_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
				<div>
					<!-- image -->
					<img
						alt="an elevator cabin"
						src="/products/dumb-waiters/third_500x450.webp"
						srcset="/products/dumb-waiters/third_740x481.webp 1024w, 
							/products/dumb-waiters/third_400x400.webp 1536w, 
							/products/dumb-waiters/third_500x450.webp 8000w"
						class="w-screen aspect-[1/0.65] lg:aspect-[1/1] 2xl:aspect-[1/0.9]"
					/>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container mx-auto px-5 2xl:px-0 my-8 md:my-12">
			<div class="text-xl md:text-2xl font-semibold text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.dumbWaiters.secondSection.title()}</p>
			</div>
			<div class="text-md md:text-xl leading-7 md:leading-10 text-justify">
				<p>
					{$LL.products.dumbWaiters.secondSection.p1()}
				</p>
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
								<td>PICO</td>
								<td>Traction</td>
								<td>0.5 m/s</td>
								<td>100 Kg</td>
							</tr>
							<tr>
								<td>NANO</td>
								<td>Traction</td>
								<td>0.5 m/s</td>
								<td>250 Kg – 300 Kg</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</div>
