<script lang="ts">
	import LL from '$i18n/i18n-svelte';

	import { currentAppLang } from '$lib/stores/store';

	$: formSubmitMessage = '';
	$: appliedClass = 'text-success-500';

	import { superForm } from 'sveltekit-superforms/client';

	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	import { footerFormSettingsStore } from '$lib/stores/store';

	let footerFormSettings: any;

	footerFormSettingsStore.subscribe((value) => {
		footerFormSettings = value;
	});

	const { form, errors, constraints, enhance } = superForm(footerFormSettings, {
		validators: {
			name: (value) => {
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
			if (result.status === 200) {
				formSubmitMessage = `${$LL.footer.message.form.successFeedback()}`;
				appliedClass = 'text-success-500 pt-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			} else if (result.status === 400) {
				formSubmitMessage = `${$LL.footer.message.form.errorFeedback()}`;
				appliedClass = 'text-error-400 pt-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			} else if (result.status === 406) {
				formSubmitMessage = `${$LL.footer.message.form.notAllowedFeedback()}`;
				appliedClass = 'text-warning-600 pt-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			}
		}
	});

	/**
	 * @param {Location | (string & Location)} url
	 */
	function sendMsg_gtag_report_conversion(url: Location | (string & Location)) {
		var callback = function () {
			if (typeof url != 'undefined') {
				window.location = url;
			}
		};
		gtag('event', 'conversion', {
			send_to: 'AW-824456723/lEHUCP7H2ZUZEJPskIkD',
			event_callback: callback
		});
		return false;
	}
</script>

<div>
	<!-- <SuperDebug data={$form} /> -->

	<!-- on:submit|preventDefault={handleSubmit}  -->

	<form method="POST" action={`/${$currentAppLang}/footer`} use:enhance>
		<!-- name -->
		<div class="my-2">
			<label class="label">
				<div class="sub-main-{$currentAppLang}-text -mb-1">
					<span>{$LL.footer.message.form.fullName()}</span>
				</div>

				<input
					bind:value={$form.name}
					class="variant-form-material input focus:border-surface-400 bg-secondary-700 text-white"
					type="text"
					name="name"
					{...$constraints.name}
					placeholder={$LL.footer.message.form.fullNamePlaceholder()}
				/>
			</label>

			{#if $errors.name}<span class="text-warning-600">{$errors.name}</span>{/if}
		</div>

		<!-- email -->
		<div class="my-2">
			<label class="label">
				<div class="sub-main-{$currentAppLang}-text -mb-1">
					<span>{$LL.footer.message.form.email()}</span>
				</div>
				<input
					type="email"
					name="email"
					autocomplete="email"
					{...$constraints.email}
					bind:value={$form.email}
					class="variant-form-material input focus:border-surface-400 bg-secondary-700 text-white"
					placeholder={$LL.footer.message.form.emailPlaceholder()}
				/>
			</label>

			{#if $errors.email}<span class="text-warning-600">{$errors.email}</span>{/if}
		</div>

		<!-- mobile number -->
		<div class="my-2">
			<label class="label">
				<div class="sub-main-{$currentAppLang}-text -mb-1">
					<span>{$LL.footer.message.form.mobileNumber()}</span>
				</div>

				<input
					bind:value={$form.mobile}
					class="variant-form-material input focus:border-surface-400 bg-secondary-700 text-white"
					type="tel"
					title="Input (number)"
					name="mobile"
					placeholder={$LL.footer.message.form.mobilePlaceholder()}
					{...$constraints.mobile}
				/>
			</label>

			{#if $errors.mobile}<span class="text-warning-600">{$errors.mobile}</span>{/if}
		</div>

		<!-- textarea -->
		<div class="my-2">
			<label class="label">
				<div class="sub-main-{$currentAppLang}-text -mb-1">
					<span>{$LL.footer.message.form.textArea()}</span>
				</div>

				<textarea
					class="textarea focus:border-surface-400 bg-secondary-700 text-white"
					rows="3"
					{...$constraints.textArea}
					placeholder={$LL.footer.message.form.textAreaPlaceholder()}
					bind:value={$form.textArea}
					title="textarea"
					name="textArea"
				/>
			</label>

			{#if $errors.textArea}<span class="text-warning-600">{$errors.textArea}</span>{/if}
		</div>

		<!-- submit button -->
		<div class="flex items-center">
			<div>
				<button
					type="submit"
					on:click={() => {
						sendMsg_gtag_report_conversion;
					}}
					class="btn variant-ghost rounded-md border border-success-800 px-8 py-[5px] sub-main-{$currentAppLang}-text mt-3"
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
				<p class={`${appliedClass} sub-main-{$currentAppLang}-text mx-3`}>
					{formSubmitMessage}
				</p>
			</div>
		</div>
	</form>
</div>
