<script lang="ts">
	import { pageDirection } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	export let data;
	let newMeetingFormSettings: any;
	newMeetingFormSettings = data.newMeetingFormSettings;

	$: formSubmitMessage = '';
	$: appliedClass = '';

	$: sendIconColor = $modeCurrent ? '#000' : '#FFF';

	const { form, errors, constraints, enhance } = superForm(newMeetingFormSettings, {
		validators: {
			name: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces
				if (value.length < 3) {
					return `${$LL.meeting.fullNameError()}`;
				} else if (value.length > 60) {
					return `${$LL.meeting.fullNameLengthError()}`;
				} else if (!nameFormat.test(value)) {
					return `${$LL.meeting.fullNameNumericError()}`;
				} else {
					return null;
				}
			},
			mobileNumber: (value) => {
				const mobileNumberFormat = /^[0-9]{10}$/;
				return !mobileNumberFormat.test(value) ? `${$LL.meeting.mobileNumberError()}` : null;
			},
			dateTime: (value: string): string | null => {
				// Create a new Date object for the incoming value
				const selectedDate = new Date(value);

				// Create a new Date object for the current date and time
				const currentDate = new Date();

				// Adjust both dates to compare only date parts (year, month, day), not time
				selectedDate.setHours(0, 0, 0, 0);
				currentDate.setHours(0, 0, 0, 0);

				// Compare the selected date and the current date
				if (selectedDate >= currentDate) {
					// If the selected date is today or in the future, return the value
					return null;
				} else {
					// If the selected date is in the past, return null or throw an error
					return `${$LL.meeting.meetingDateError()}`;
				}
			},
			email: (value) => {
				if (!value) {
					// If the value is empty, return null (Skip validation)
					return null;
				}
				const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return !emailFormat.test(value) ? `${$LL.meeting.emailError()}` : null;
			},
			textArea: (value) => {
				// Check if value is not defined or empty
				if (!value) {
					return null;
				}
				// Perform the length checks if value is defined and not empty
				return value.length < 10
					? `${$LL.meeting.textAreaError1()}`
					: value.length > 2000
					? `${$LL.meeting.textAreaError2()}`
					: null;
			}
		},
		// validationMethod: 'submit-only',
		onResult: ({ result }) => {
			if (result.status === 200) {
				formSubmitMessage = `${$LL.meeting.successFeedback()}`;
				appliedClass = 'text-success-500 px-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			} else if (result.status === 400) {
				formSubmitMessage = `${$LL.meeting.errorFeedback()}`;
				appliedClass = 'text-error-400 px-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			}
		}
	});
</script>

<section dir={$pageDirection}>
	<div
		class="h-[180px] md:h-[250px] relative"
		style="background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;"
	>
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="text-4xl lg:text-6xl font-medium text-white"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.meeting.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

<section dir={$pageDirection}>
	<div class="container mx-auto px-5 2xl:px-0">
		<div class="py-12 lg:pt-16">
			<p class="text-2xl lg:text-3xl font-light text-primary-400-500-token">
				{$LL.meeting.intro1()}
			</p>
			<p class="text-2xl lg:text-3xl font-light text-primary-400-500-token pt-3 lg:pt-5">
				{$LL.meeting.intro2()}
			</p>
		</div>

		<form method="POST" use:enhance>
			<div class="grid lg:grid-cols-2 gap-4 lg:gap-x-16 lg:gap-y-8 pb-12 lg:pb-24">
				<!-- name -->
				<div class="m-0 p-0">
					<label class="label">
						<div class="text-lg">
							<span>{$LL.meeting.fullName()}</span>
						</div>

						<input
							bind:value={$form.name}
							class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
							type="text"
							name="name"
							{...$constraints.name}
							placeholder={$LL.meeting.fullNamePlaceholder()}
						/>
					</label>
					{#if $errors.name}<span class="text-warning-600">{$errors.name}</span>{/if}
				</div>

				<!-- Date & Time -->
				<div class="m-0 p-0">
					<label class="label">
						<div class="text-lg">
							<span>{$LL.meeting.dateTime()}</span>
						</div>

						<input
							class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
							required
							name="dateTime"
							bind:value={$form.dateTime}
							title="Input (datetime-local)"
							type="datetime-local"
						/>
					</label>
					{#if $errors.dateTime}<span class="text-warning-600">{$errors.dateTime}</span>{/if}
				</div>

				<!-- mobile number -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.meeting.mobileNumber()}</span>
							</div>
							<input
								bind:value={$form.mobileNumber}
								class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
								type="tel"
								title="Input (number)"
								name="mobileNumber"
								placeholder={$LL.meeting.mobileNumberPlaceholder()}
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
								<span>{$LL.meeting.email()}</span>
							</div>
							<input
								type="email"
								name="email"
								autocomplete="email"
								{...$constraints.email}
								bind:value={$form.email}
								class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
								placeholder={$LL.meeting.emailPlaceholder()}
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
								<span>{$LL.meeting.textArea()}</span>
							</div>
							<textarea
								class="input text-lg text-surface-900-50-token bg-surface-50-900-token rounded-lg focus:border-surface-700-200-token"
								rows="5"
								{...$constraints.textArea}
								placeholder={$LL.meeting.textAreaPlaceholder()}
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
