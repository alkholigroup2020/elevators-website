<script lang="ts">
	import { onMount } from 'svelte';

	let y: number;

	onMount(() => {
		window.addEventListener('scroll', () => {
			y = window.scrollY;
		});
	});

	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<div class="fixed bottom-6 right-1 md:right-3 z-50">
	<!-- whatsapp -->
	<div>
		<div
			class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 opacity-80 hover:opacity-100"
		>
			<a
				aria-label="Our WhatsApp Link"
				href="https://wa.me/966597370785"
				target="_blank"
				class="grid rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[52px] xl:h-[52px] bg-success-500"
			>
				<span
					class="justify-self-center self-center w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[52px] xl:h-[52px]"
				>
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 512 512"
						xml:space="preserve"
					>
						<path
							style="fill:#EDEDED;"
							d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
							S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
						/>
						<path
							style="fill:#55CD6C;"
							d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
							c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
							c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
						/>
						<path
							style="fill:#FEFEFE;"
							d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
							c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
							c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
							c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
							c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
							l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
						/>
					</svg>
				</span>
			</a>
		</div>
	</div>

	<!-- go up -->
	<div>
		<div
			class="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 opacity-80 hover:opacity-100"
		>
			<button
				hidden={y > 800 ? false : true}
				aria-label="a move to the top of the screen button"
				class="bg-initial border-[5px] border-[#55cd6c] rounded-full bg-[#55cd6c]"
				on:click={scrollToTop}
			>
				<div class="flex justify-center">
					<span
						class="justify-self-center self-center w-[32px] h-[32px] md:w-[38px] md:h-[38px] xl:w-[44px] xl:h-[44px]"
					>
						<svg
							viewBox="0 -4.5 20 20"
							class="m-2 md:m-3"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<title>arrow_up [#340]</title>
							<desc>Created with Sketch.</desc>
							<defs />
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									id="Dribbble-Light-Preview"
									transform="translate(-140.000000, -6683.000000)"
									fill="#FFF"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path
											d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
											id="arrow_up-[#340]"
										/>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</div>
			</button>
		</div>
	</div>
</div>
