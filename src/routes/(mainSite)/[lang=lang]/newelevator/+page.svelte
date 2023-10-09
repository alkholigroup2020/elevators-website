<script lang="ts">
	import { pageDirection } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { currentAppLang } from '$lib/stores/store';
	export let data;
	let newElevatorFormSettings: any;
	newElevatorFormSettings = data.newElevatorFormSettings;

	$: formSubmitMessage = '';
	$: appliedClass = '';

	$: sendIconColor = $modeCurrent ? '#000' : '#FFF';

	const { form, errors, constraints, enhance } = superForm(newElevatorFormSettings, {
		validators: {
			name: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces
				if (value.length < 3) {
					return `${$LL.newElevator.fullNameError()}`;
				} else if (value.length > 60) {
					return `${$LL.newElevator.fullNameLengthError()}`;
				} else if (!nameFormat.test(value)) {
					return `${$LL.newElevator.fullNameNumericError()}`;
				} else {
					return null;
				}
			},
			companyName: (value) => {
				const companyNameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces
				if (value.length < 2) {
					return `${$LL.newElevator.companyNameError()}`;
				} else if (value.length > 60) {
					return `${$LL.newElevator.companyNameLengthError()}`;
				} else if (!companyNameFormat.test(value)) {
					return `${$LL.newElevator.companyNameNumericError()}`;
				} else {
					return null;
				}
			},
			mobileNumber: (value) => {
				const mobileNumberFormat = /^[0-9]{10}$/;
				return !mobileNumberFormat.test(value) ? `${$LL.newElevator.mobileNumberError()}` : null;
			},
			email: (value) => {
				if (!value) {
					// If the value is empty, return null (Skip validation)
					return null;
				}
				const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return !emailFormat.test(value) ? `${$LL.newElevator.emailError()}` : null;
			},
			textArea: (value) => {
				// Check if value is not defined or empty
				if (!value) {
					return null;
				}
				// Perform the length checks if value is defined and not empty
				return value.length < 10
					? `${$LL.newElevator.textAreaError1()}`
					: value.length > 2000
					? `${$LL.newElevator.textAreaError2()}`
					: null;
			}
		},
		// validationMethod: 'submit-only',
		onResult: ({ result }) => {
			if (result.status === 200) {
				formSubmitMessage = `${$LL.newElevator.successFeedback()}`;
				appliedClass = 'text-success-500 px-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			} else if (result.status === 400) {
				formSubmitMessage = `${$LL.newElevator.errorFeedback()}`;
				appliedClass = 'text-error-400 px-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			}
		}
	});

	// Google Analytics - Contact us conversion page
	function gtag_report_conversion(url: Location | (string & Location)) {
		var callback = function () {
			if (typeof url != 'undefined') {
				window.location = url;
			}
		};
		gtag('event', 'conversion', {
			send_to: 'AW-824456723/_Fl1CLuxmfQCEJPskIkD',
			event_callback: callback
		});
		return false;
	}
</script>

<section dir={$pageDirection}>
	<div
		class="h-[180px] md:h-[250px] relative"
		style="background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;"
	>
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="heading-{$currentAppLang}-2 font-medium text-white"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.newElevator.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

<section dir={$pageDirection}>
	<div class="container mx-auto px-5 2xl:px-0">
		<div class="py-12 lg:pt-16">
			<p class="large-{$currentAppLang}-text font-light text-primary-400-500-token">
				{$LL.newElevator.intro1()}
			</p>
			<p class="large-{$currentAppLang}-text font-light text-primary-400-500-token pt-3 lg:pt-5">
				{$LL.newElevator.intro2()}
			</p>
		</div>

		<form method="POST" use:enhance>
			<div class="grid lg:grid-cols-2 gap-4 lg:gap-x-16 lg:gap-y-8 pb-12 lg:pb-24">
				<!-- name -->
				<div class="m-0 p-0">
					<label class="label">
						<div class="text-lg">
							<span>{$LL.newElevator.fullName()}</span>
						</div>

						<input
							bind:value={$form.name}
							class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
							type="text"
							name="name"
							{...$constraints.name}
							placeholder={$LL.newElevator.fullNamePlaceholder()}
						/>
					</label>
					{#if $errors.name}<span class="text-warning-600">{$errors.name}</span>{/if}
				</div>

				<!-- company -->
				<div class="m-0 p-0">
					<label class="label">
						<div class="text-lg">
							<span>{$LL.newElevator.companyName()}</span>
						</div>

						<input
							bind:value={$form.companyName}
							class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
							type="text"
							name="companyName"
							{...$constraints.companyName}
							placeholder={$LL.newElevator.companyNamePlaceholder()}
						/>
					</label>
					{#if $errors.companyName}<span class="text-warning-600">{$errors.companyName}</span>{/if}
				</div>

				<!-- mobile number -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.newElevator.mobileNumber()}</span>
							</div>
							<input
								bind:value={$form.mobileNumber}
								class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
								type="tel"
								title="Input (number)"
								name="mobileNumber"
								placeholder={$LL.newElevator.mobileNumberPlaceholder()}
								{...$constraints.mobileNumber}
							/>
						</label>
						{#if $errors.mobileNumber}<span class="text-warning-600">{$errors.mobileNumber}</span
							>{/if}
					</div>
				</div>

				<!-- email -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.newElevator.email()}</span>
							</div>
							<input
								type="email"
								name="email"
								autocomplete="email"
								{...$constraints.email}
								bind:value={$form.email}
								class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
								placeholder={$LL.newElevator.emailPlaceholder()}
							/>
						</label>

						{#if $errors.email}<span class="text-warning-600">{$errors.email}</span>{/if}
					</div>
				</div>

				<!-- textarea -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.newElevator.textArea()}</span>
							</div>
							<textarea
								class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
								rows="5"
								{...$constraints.textArea}
								placeholder={$LL.newElevator.textAreaPlaceholder()}
								bind:value={$form.textArea}
								title="textarea"
								name="textArea"
							/>
						</label>
						{#if $errors.textArea}<span class="text-warning-600">{$errors.textArea}</span>{/if}
					</div>
				</div>

				<!-- submit button -->
				<div>
					<div class="h-full flex items-end lg:justify-end p-0 m-0">
						<div class=" order-last lg:order-first">
							<p class={`${appliedClass} text-lg mx-3`}>
								{formSubmitMessage}
							</p>
						</div>
						<div>
							<button
								on:click={() => {
									gtag_report_conversion;
								}}
								type="submit"
								class="btn variant-ringed-surface rounded-lg px-16 py-[10px] text-lg mt-3"
							>
								<span class="px-3 mt-1"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										fill={sendIconColor}
										width="18"
										height="18"
										><g data-name="21-Email-Send"
											><path
												d="M29 4H3a3 3 0 0 0-3 3v4h2V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V25a1 1 0 0 1-1 1H4v2h25a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56zM0 26h2v2H0z"
											/><path d="M0 21h14v2H0zM16 21h2v2h-2zM0 16h2v2H0zM4 16h6v2H4z" /></g
										></svg
									></span
								>
								<span class="mt-1">{$LL.career.submit()}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>
