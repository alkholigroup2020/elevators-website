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

<div class="fixed bottom-6 right-2 z-50">
	<!-- whatsapp -->
	<div>
		<div
			class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 opacity-60 hover:opacity-100"
		>
			<button
				class="grid rounded-full w-[44px] md:w-[50px] h-[44px] md:h-[50px]"
				aria-label="a whatsapp button"
			>
				<span class="justify-self-center self-center w-[45px] md:w-[52px] h-[45px] md:h-[52px]">
					<svg
						version="1.1"
						class=""
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 418.135 418.135"
						xml:space="preserve"
					>
						<g>
							<path
								style="fill:#7AD06D;"
								d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536
								L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631
								c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197
								c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607
								l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819
								c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817
								C371.446,250.361,354.281,291.803,323.886,322.197z"
							/>
							<path
								style="fill:#7AD06D;"
								d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008
								c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218
								l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356
								c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057
								c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z"
							/>
						</g>
					</svg>
				</span>
			</button>
		</div>
	</div>

	<!-- go up -->
	<div>
		<div
			class="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 opacity-60 hover:opacity-100"
		>
			<button
				hidden={y > 800 ? false : true}
				aria-label="a move to the top of the screen button"
				class="bg-initial border-[5px] border-[#7AD06D] rounded-full"
				on:click={scrollToTop}
			>
				<div class="flex justify-center">
					<span class="justify-self-center self-center w-[37px] md:w-[45px] h-[37px] md:h-[45px]">
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
									fill="#7AD06D"
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
