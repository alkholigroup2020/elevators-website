<script>
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
</script>

<section id="quote" class="container mx-auto pb-16 px-5 2xl:px-0">
	<!-- title section -->
	<div class="text-center py-9 md:py-12 2xl:py-[70px]">
		<h2 class="text-4xl lg:text-4xl 2xl:text-5xl font-semibold">
			<span class="text-primary-500">{$LL.quoteRequest.title()}</span>
		</h2>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 2xl:gap-[80px]">
		<div class="flex justify-center xl:col-start-2">
			<a
				class="card bg-transparent card-hover overflow-hidden shadow-md border border-surface-400 w-[360px]"
				href={`/${$currentAppLang}/newelevator`}
			>
				<header>
					<img src="/new-elevator (1).webp" class="w-full aspect-[2/1.4]" alt="A new elevator" />
				</header>
				<hr />
				<div class="px-7 py-8 w-full text-center">
					<h3
						class="text-2xl lg:text-[25px] font-medium text-secondary-800-100-token"
						data-toc-ignore
					>
						{$LL.quoteRequest.newElevator()}
					</h3>
				</div>
			</a>
		</div>

		<div class="flex justify-center xl:col-start-3">
			<a
				class="card bg-transparent card-hover overflow-hidden shadow-md border border-surface-400 w-[360px]"
				href={`/${$currentAppLang}/subscriptions`}
			>
				<header>
					<img src="/contract-_1_.webp" class="w-full aspect-[2/1.4]" alt="A new elevator" />
				</header>
				<hr />
				<div class="px-7 py-8 w-full text-center">
					<h3
						class="text-2xl lg:text-[25px] font-medium text-secondary-800-100-token"
						data-toc-ignore
					>
						{$LL.quoteRequest.newMaintenanceContract()}
					</h3>
				</div>
			</a>
		</div>
	</div>
</section>
