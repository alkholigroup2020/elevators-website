<script>
	import LL from '$i18n/i18n-svelte';
	import { currentAppLang } from '$lib/stores/store';
</script>

<!-- Product section -->
<section
	id="products"
	class="container mx-auto px-5 2xl:px-0 pb-10"
	dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}
>
	<div>
		<h3 class="text-4xl lg:text-4xl 2xl:text-5xl font-semibold text-primary-500 py-12 2xl:py-16">
			{$LL.productsSection.heading()}
		</h3>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-[90px] gap-y-15 pb-12">
		<!-- passenger-elevators -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/passenger-elevators`}
		>
			<header>
				<img
					src="/home-page/products/Passenger Page_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="passenger elevators product"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.passengerElevatorsHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.passengerElevatorsBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- home-elevators -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/home-elevators`}
		>
			<header>
				<img
					src="/home-page/products/Home Elevators_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="home elevators product"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.homeElevatorsHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.homeElevatorsBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- car-elevator -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/car-elevator`}
		>
			<header>
				<img
					src="/home-page/products/carElevators.webp"
					class="w-full aspect-[8/5]"
					alt="Car Elevators product "
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.carElevatorHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.carElevatorBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- cargo-elevators -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/cargo-elevators`}
		>
			<header>
				<img
					src="/home-page/products/Cargo_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="cargo elevators"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.cargoElevatorsHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.cargoElevatorsBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- dumb-waiters -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/dumb-waiters`}
		>
			<header>
				<img
					src="/home-page/products/dumb-waiters_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="dumb waiters product"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.dumbWaitersHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.dumbWaitersBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- escalator -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/escalator`}
		>
			<header>
				<img
					src="/home-page/products/Escalator_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="escalator product "
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.escalatorHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.escalatorBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- panoramic-elevators -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/panoramic-elevators`}
		>
			<header>
				<img
					src="/home-page/products/Panoramic Elevators_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="panoramic elevators product"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.panoramicElevatorsHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.panoramicElevatorsBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- modernization -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/modernization`}
		>
			<header>
				<img
					src="/home-page/products/Modernization_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="modernization product"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.modernizationHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.modernizationBrief()}
					</p>
				</article>
			</div>
		</a>

		<!-- smart-parking-systems -->
		<a
			class="card bg-transparent card-hover overflow-hidden shadow-md"
			href={`${$currentAppLang}/product/smart-parking-systems`}
		>
			<header>
				<img
					src="/home-page/products/Smart Parking Systems_400x250.webp"
					class="w-full aspect-[8/5]"
					alt="smart parking systems product"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="text-2xl lg:text-3xl font-medium mb-3 text-primary-500 py-3" data-toc-ignore>
					{$LL.productsSection.spsHeading()}
				</h3>
				<article>
					<p class="text-xl leading-9 pb-3">
						{$LL.productsSection.spsBrief()}
					</p>
				</article>
			</div>
		</a>
	</div>
</section>
