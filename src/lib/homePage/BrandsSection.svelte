<script>
	import SectionSize from '$lib/generalComponents/SectionSize.svelte';
</script>

<section class="section-bg" id="brands">
	<div class="container mx-auto py-14 px-5 2xl:px-0">
		<div
			class="grid min-[320px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-5 xl:gap-12"
		>
			<div class="flex justify-center">
				<div class="circle my-5">
					<div class="p-5 min-[450px]:px-12">
						<img
							src="/brands/doppler.webp"
							class="w-full aspect-[7/3]"
							alt="a brand logo"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="circle my-5">
					<div class="p-5 min-[450px]:px-14">
						<img
							src="/brands/kalea.webp"
							class="w-full aspect-[7/3]"
							alt="a brand logo"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="circle my-5">
					<div class="p-5 min-[450px]:px-14">
						<img
							src="/brands/nidec.webp"
							class="w-full aspect-[7/3]"
							alt="a brand logo"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="circle my-5">
					<div class="p-10 min-[450px]:px-16">
						<img
							src="/brands/PVE_150x120.webp"
							class="w-full aspect-[1/0.8]"
							alt="a brand logo"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="circle my-5">
					<div class="p-5 min-[450px]:px-14">
						<img
							src="/brands/Indastria_150x90.webp"
							class="w-full aspect-[1/0.6]"
							alt="a brand logo"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section-bg {
		background: rgba(var(--color-surface-500)) url('/pattern.webp') repeat 50% 22px;
		/* bg-surface-100-800-token */
		/* background: rgba(var(--color-surface-400-600-token)); */
	}
	.circle {
		background-color: rgb(240, 240, 240);
		width: 220px;
		height: 110px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}
</style>
