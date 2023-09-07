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
			src="/products/dumb-waiters/dumb-03_2000x600.webp"
			alt="dumb waiters elevators page header"
			srcset="/products/dumb-waiters/dumb-01_800x640.webp 768w, 
						/products/dumb-waiters/dumb-02_1600x720.webp 1536w, 
						/products/dumb-waiters/dumb-03_2000x600.webp 8000w"
			class="w-screen aspect-[1/0.8] md:aspect-[1/0.45] xl:aspect-[1/0.3]"
		/>

		<div class="absolute inset-0 bg-black opacity-40" />
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0 space-y-8 md:space-y-10">
				<h1
					class="text-white heading-{$currentAppLang}-1 font-bold leading-normal md:leading-10"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.products.dumbWaiters.title()}
				</h1>

				<p
					class="text-white hidden min-[350px]:block large-{$currentAppLang}-text font-medium leading-5 min-[500px]:leading-8 xl:leading-relaxed
					px-0 {$currentAppLang === 'en'
						? 'min-[450px]:pr-8 md:pr-0 xl:pr-64 2xl:pr-96'
						: 'min-[450px]:pl-8 md:pl-0 xl:pl-64 2xl:pl-96'}"
				>
					{$LL.products.dumbWaiters.intro()}
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
			<div class="heading-{$currentAppLang}-3 font-meduim text-primary-500 mb-1 md:mb-3">
				<p>{$LL.products.dumbWaiters.secondSection.title()}</p>
			</div>
			<div class="main-{$currentAppLang}-text leading-7 md:leading-9 text-justify">
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
