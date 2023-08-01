<script lang="ts">
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';

	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	let careerFormSettings: any;
	careerFormSettings = data.careerFormSettings;

	const { form, errors, constraints, enhance } = superForm(careerFormSettings, {
		validators: {
			nameCareerForm: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces

				if (value.length < 3) {
					return `${$LL.footer.message.form.fullNameError()}`;
				} else if (value.length > 60) {
					return `${$LL.footer.message.form.fullNameLengthError()}`;
				} else if (!nameFormat.test(value)) {
					return `${$LL.footer.message.form.fullNameNumericError()}`;
				} else {
					return null;
				}
			},
			email: (value) => {
				if (value === undefined) {
					// as email is optional and if not filled in
					return null;
				}

				const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return !emailFormat.test(value) ? `${$LL.footer.message.form.emailError()}` : null;
			},
			mobile: (value) => {
				if (value === undefined) {
					// If mobile is optional and not filled in
					return null;
				}

				const nameFormat = /^[0-9]{10}$/;
				return !nameFormat.test(value) ? `${$LL.footer.message.form.mobileError()}` : null;
			},
			textArea: (value) =>
				value.length < 3
					? `${$LL.footer.message.form.textAreaError1()}`
					: null || value.length > 500
					? `${$LL.footer.message.form.textAreaError2()}`
					: null
		},
		onResult: ({ result }) => {
			//
		}
	});
</script>

<section>
	<div
		dir={$currentAppLang === 'en' ? 'ltr' : 'rtl'}
		class="h-[180px] md:h-[250px] relative"
		style="background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;"
	>
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-4xl lg:text-6xl font-medium text-white"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.career.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container mx-auto px-5 2xl:px-0">
		<div class="py-8 lg:py-12">
			<p class="text-primary-500 text-2xl">{$LL.career.intro()}</p>
		</div>

		<form method="POST" use:enhance>
			<div class="grid lg:grid-cols-2 gap-4 lg:gap-8 pb-5 lg:pb-12">
				<!-- name -->
				<div>
					<div class="my-2">
						<label class="label">
							<div class="text-lg -mb-1">
								<span>{$LL.footer.message.form.fullName()}</span>
							</div>

							<input
								bind:value={$form.nameCareerForm}
								class="variant-form-material input focus:border-surface-400 bg-secondary-700 text-white"
								type="text"
								name="nameCareerForm"
								{...$constraints.nameCareerForm}
								placeholder={$LL.footer.message.form.fullNamePlaceholder()}
							/>
						</label>

						{#if $errors.nameCareerForm}<span class="text-warning-600"
								>{$errors.nameCareerForm}</span
							>{/if}
					</div>
				</div>
				<!-- submit button -->
				<div>
					<div class="h-full flex items-center">
						<div>
							<button
								type="submit"
								class="btn variant-ghost rounded-md border border-success-800 px-8 py-[5px] text-lg mt-3"
							>
								<span class="px-3"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										fill="#FFF"
										width="18"
										height="18"
										><g data-name="21-Email-Send"
											><path
												d="M29 4H3a3 3 0 0 0-3 3v4h2V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V25a1 1 0 0 1-1 1H4v2h25a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56zM0 26h2v2H0z"
											/><path d="M0 21h14v2H0zM16 21h2v2h-2zM0 16h2v2H0zM4 16h6v2H4z" /></g
										></svg
									></span
								>
								<span>{$LL.footer.message.form.submit()}</span>
							</button>
						</div>
						<div>
							<!-- <p class={`${appliedClass} text-lg mx-3`}>
								{formSubmitMessage}
							</p> -->
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>
