<script>
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
</script>

<section id="quote" class="container mx-auto pb-16 px-5 2xl:px-0">
	<!-- title section -->
	<div class="text-center py-9 md:py-12 2xl:py-[70px]">
		<h2 class="heading-{$currentAppLang}-2 font-semibold">
			<span class="text-primary-500">{$LL.quoteRequest.title()}</span>
		</h2>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 2xl:gap-[80px]">
		<div
			class=" flex justify-center 2xl:col-start-2 p-6 min-[390px]:px-12 min-[460px]:px-[70px] min-[500px]:px-[120px] sm:px-4 md:px-8 xl:pl-[150px] 2xl:px-0"
		>
			<a
				class="card bg-transparent card-hover overflow-hidden shadow-md border border-surface-400 w-[360px]"
				href={`/${$currentAppLang}/newelevator`}
			>
				<header>
					<div>
						<img
							loading="lazy"
							src="/home-page/new-elevator_400x280.webp"
							alt="A new elevator"
							class="w-full aspect-[1/0.7]"
						/>
					</div>
				</header>
				<hr />
				<div class="px-7 py-6 md:py-8 w-full text-center">
					<h3
						class="heading-{$currentAppLang}-3 font-medium text-secondary-800-100-token"
						data-toc-ignore
					>
						{$LL.quoteRequest.newElevator()}
					</h3>
				</div>
			</a>
		</div>

		<div
			class="flex justify-center 2xl:col-start-3 p-6 min-[390px]:px-12 min-[460px]:px-[70px] min-[500px]:px-[120px] sm:px-4 md:px-8 xl:pr-[150px] 2xl:px-0"
		>
			<a
				class="card bg-transparent card-hover overflow-hidden shadow-md border border-surface-400 w-[360px]"
				href={`/${$currentAppLang}/subscriptions`}
			>
				<header>
					<img
						loading="lazy"
						src="/home-page/contract_400x280.webp"
						alt="new maintenance contract"
						class="w-full aspect-[1/0.7]"
					/>
				</header>
				<hr />
				<div class="px-7 py-6 md:py-8 w-full text-center">
					<h3
						class="heading-{$currentAppLang}-3 font-medium text-secondary-800-100-token"
						data-toc-ignore
					>
						{$LL.quoteRequest.newMaintenanceContract()}
					</h3>
				</div>
			</a>
		</div>
	</div>
</section>
