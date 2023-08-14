<script lang="ts">
	import { pageDirection } from '$lib/stores/store';

	import LL from '$i18n/i18n-svelte';

	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	import { superForm } from 'sveltekit-superforms/client';

	import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';

	import { FileDropzone } from '@skeletonlabs/skeleton';

	const nationalityOptions: AutocompleteOption[] = [
		{ label: 'Afghan', value: 'afghan' },
		{ label: 'Albanian', value: 'albanian' },
		{ label: 'Algerian', value: 'algerian' },
		{ label: 'American', value: 'american' },
		{ label: 'Andorran', value: 'andorran' },
		{ label: 'Angolan', value: 'angolan' },
		{ label: 'Antiguans', value: 'antiguans' },
		{ label: 'Argentinean', value: 'argentinean' },
		{ label: 'Armenian', value: 'armenian' },
		{ label: 'Australian', value: 'australian' },
		{ label: 'Austrian', value: 'austrian' },
		{ label: 'Azerbaijani', value: 'azerbaijani' },
		{ label: 'Bahamian', value: 'bahamian' },
		{ label: 'Bahraini', value: 'bahraini' },
		{ label: 'Bangladeshi', value: 'bangladeshi' },
		{ label: 'Barbadian', value: 'barbadian' },
		{ label: 'Barbudans', value: 'barbudans' },
		{ label: 'Batswana', value: 'batswana' },
		{ label: 'Belarusian', value: 'belarusian' },
		{ label: 'Belgian', value: 'belgian' },
		{ label: 'Belizean', value: 'belizean' },
		{ label: 'Beninese', value: 'beninese' },
		{ label: 'Bhutanese', value: 'bhutanese' },
		{ label: 'Bolivian', value: 'bolivian' },
		{ label: 'Bosnian', value: 'bosnian' },
		{ label: 'Brazilian', value: 'brazilian' },
		{ label: 'British', value: 'british' },
		{ label: 'Bruneian', value: 'bruneian' },
		{ label: 'Bulgarian', value: 'bulgarian' },
		{ label: 'Burkinabe', value: 'burkinabe' },
		{ label: 'Burmese', value: 'burmese' },
		{ label: 'Burundian', value: 'burundian' },
		{ label: 'Cambodian', value: 'cambodian' },
		{ label: 'Cameroonian', value: 'cameroonian' },
		{ label: 'Canadian', value: 'canadian' },
		{ label: 'Cape Verdean', value: 'cape verdean' },
		{ label: 'Central African', value: 'central african' },
		{ label: 'Chadian', value: 'chadian' },
		{ label: 'Chilean', value: 'chilean' },
		{ label: 'Chinese', value: 'chinese' },
		{ label: 'Colombian', value: 'colombian' },
		{ label: 'Comoran', value: 'comoran' },
		{ label: 'Congolese', value: 'congolese' },
		{ label: 'Costa Rican', value: 'costa rican' },
		{ label: 'Croatian', value: 'croatian' },
		{ label: 'Cuban', value: 'cuban' },
		{ label: 'Cypriot', value: 'cypriot' },
		{ label: 'Czech', value: 'czech' },
		{ label: 'Danish', value: 'danish' },
		{ label: 'Djibouti', value: 'djibouti' },
		{ label: 'Dominican', value: 'dominican' },
		{ label: 'Dutch', value: 'dutch' },
		{ label: 'East Timorese', value: 'east timorese' },
		{ label: 'Ecuadorean', value: 'ecuadorean' },
		{ label: 'Egyptian', value: 'egyptian' },
		{ label: 'Emirian', value: 'emirian' },
		{ label: 'Equatorial Guinean', value: 'equatorial guinean' },
		{ label: 'Eritrean', value: 'eritrean' },
		{ label: 'Estonian', value: 'estonian' },
		{ label: 'Ethiopian', value: 'ethiopian' },
		{ label: 'Fijian', value: 'fijian' },
		{ label: 'Filipino', value: 'filipino' },
		{ label: 'Finnish', value: 'finnish' },
		{ label: 'French', value: 'french' },
		{ label: 'Gabonese', value: 'gabonese' },
		{ label: 'Gambian', value: 'gambian' },
		{ label: 'Georgian', value: 'georgian' },
		{ label: 'German', value: 'german' },
		{ label: 'Ghanaian', value: 'ghanaian' },
		{ label: 'Greek', value: 'greek' },
		{ label: 'Grenadian', value: 'grenadian' },
		{ label: 'Guatemalan', value: 'guatemalan' },
		{ label: 'Guinea-Bissauan', value: 'guinea-bissauan' },
		{ label: 'Guinean', value: 'guinean' },
		{ label: 'Guyanese', value: 'guyanese' },
		{ label: 'Haitian', value: 'haitian' },
		{ label: 'Herzegovinian', value: 'herzegovinian' },
		{ label: 'Honduran', value: 'honduran' },
		{ label: 'Hungarian', value: 'hungarian' },
		{ label: 'I-Kiribati', value: 'i-kiribati' },
		{ label: 'Icelander', value: 'icelander' },
		{ label: 'Indian', value: 'indian' },
		{ label: 'Indonesian', value: 'indonesian' },
		{ label: 'Iranian', value: 'iranian' },
		{ label: 'Iraqi', value: 'iraqi' },
		{ label: 'Irish', value: 'irish' },
		{ label: 'Israeli', value: 'israeli' },
		{ label: 'Italian', value: 'italian' },
		{ label: 'Ivorian', value: 'ivorian' },
		{ label: 'Jamaican', value: 'jamaican' },
		{ label: 'Japanese', value: 'japanese' },
		{ label: 'Jordanian', value: 'jordanian' },
		{ label: 'Kazakhstani', value: 'kazakhstani' },
		{ label: 'Kenyan', value: 'kenyan' },
		{ label: 'Kittian and Nevisian', value: 'kittian and nevisian' },
		{ label: 'Kuwaiti', value: 'kuwaiti' },
		{ label: 'Kyrgyz', value: 'kyrgyz' },
		{ label: 'Laotian', value: 'laotian' },
		{ label: 'Latvian', value: 'latvian' },
		{ label: 'Lebanese', value: 'lebanese' },
		{ label: 'Liberian', value: 'liberian' },
		{ label: 'Libyan', value: 'libyan' },
		{ label: 'Liechtensteiner', value: 'liechtensteiner' },
		{ label: 'Lithuanian', value: 'lithuanian' },
		{ label: 'Luxembourger', value: 'luxembourger' },
		{ label: 'Macedonian', value: 'macedonian' },
		{ label: 'Malagasy', value: 'malagasy' },
		{ label: 'Malawian', value: 'malawian' },
		{ label: 'Malaysian', value: 'malaysian' },
		{ label: 'Maldivan', value: 'maldivan' },
		{ label: 'Malian', value: 'malian' },
		{ label: 'Maltese', value: 'maltese' },
		{ label: 'Marshallese', value: 'marshallese' },
		{ label: 'Mauritanian', value: 'mauritanian' },
		{ label: 'Mauritian', value: 'mauritian' },
		{ label: 'Mexican', value: 'mexican' },
		{ label: 'Micronesian', value: 'micronesian' },
		{ label: 'Moldovan', value: 'moldovan' },
		{ label: 'Monacan', value: 'monacan' },
		{ label: 'Mongolian', value: 'mongolian' },
		{ label: 'Moroccan', value: 'moroccan' },
		{ label: 'Mosotho', value: 'mosotho' },
		{ label: 'Motswana', value: 'motswana' },
		{ label: 'Mozambican', value: 'mozambican' },
		{ label: 'Namibian', value: 'namibian' },
		{ label: 'Nauruan', value: 'nauruan' },
		{ label: 'Nepalese', value: 'nepalese' },
		{ label: 'Netherlander', value: 'netherlander' },
		{ label: 'Nigerian', value: 'nigerian' },
		{ label: 'New Zealander', value: 'new zealander' },
		{ label: 'Ni-Vanuatu', value: 'ni-vanuatu' },
		{ label: 'Nicaraguan', value: 'nicaraguan' },
		{ label: 'Nigerien', value: 'nigerien' },
		{ label: 'North Korean', value: 'north korean' },
		{ label: 'Northern Irish', value: 'northern irish' },
		{ label: 'Norwegian', value: 'norwegian' },
		{ label: 'Omani', value: 'omani' },
		{ label: 'Pakistani', value: 'pakistani' },
		{ label: 'Palauan', value: 'palauan' },
		{ label: 'Panamanian', value: 'panamanian' },
		{ label: 'Papua New Guinean', value: 'papua new guinean' },
		{ label: 'Paraguayan', value: 'paraguayan' },
		{ label: 'Peruvian', value: 'peruvian' },
		{ label: 'Polish', value: 'polish' },
		{ label: 'Portuguese', value: 'portuguese' },
		{ label: 'Qatari', value: 'qatari' },
		{ label: 'Romanian', value: 'romanian' },
		{ label: 'Russian', value: 'russian' },
		{ label: 'Rwandan', value: 'rwandan' },
		{ label: 'Saint Lucian', value: 'saint lucian' },
		{ label: 'Salvadoran', value: 'salvadoran' },
		{ label: 'Samoan', value: 'samoan' },
		{ label: 'San Marinese', value: 'san marinese' },
		{ label: 'Sao Tomean', value: 'sao tomean' },
		{ label: 'Saudi', value: 'saudi' },
		{ label: 'Scottish', value: 'scottish' },
		{ label: 'Senegalese', value: 'senegalese' },
		{ label: 'Serbian', value: 'serbian' },
		{ label: 'Seychellois', value: 'seychellois' },
		{ label: 'Sierra Leonean', value: 'sierra leonean' },
		{ label: 'Singaporean', value: 'singaporean' },
		{ label: 'Slovakian', value: 'slovakian' },
		{ label: 'Slovenian', value: 'slovenian' },
		{ label: 'Solomon Islander', value: 'solomon islander' },
		{ label: 'Somali', value: 'somali' },
		{ label: 'South African', value: 'south african' },
		{ label: 'South Korean', value: 'south korean' },
		{ label: 'Spanish', value: 'spanish' },
		{ label: 'Sri Lankan', value: 'sri lankan' },
		{ label: 'Sudanese', value: 'sudanese' },
		{ label: 'Surinamer', value: 'surinamer' },
		{ label: 'Swazi', value: 'swazi' },
		{ label: 'Swedish', value: 'swedish' },
		{ label: 'Swiss', value: 'swiss' },
		{ label: 'Syrian', value: 'syrian' },
		{ label: 'Taiwanese', value: 'taiwanese' },
		{ label: 'Tajik', value: 'tajik' },
		{ label: 'Tanzanian', value: 'tanzanian' },
		{ label: 'Thai', value: 'thai' },
		{ label: 'Togolese', value: 'togolese' },
		{ label: 'Tongan', value: 'tongan' },
		{ label: 'Trinidadian/Tobagonian', value: 'trinidadian/tobagonian' },
		{ label: 'Tunisian', value: 'tunisian' },
		{ label: 'Turkish', value: 'turkish' },
		{ label: 'Tuvaluan', value: 'tuvaluan' },
		{ label: 'Ugandan', value: 'ugandan' },
		{ label: 'Ukrainian', value: 'ukrainian' },
		{ label: 'Uruguayan', value: 'uruguayan' },
		{ label: 'Uzbekistani', value: 'uzbekistani' },
		{ label: 'Venezuelan', value: 'venezuelan' },
		{ label: 'Vietnamese', value: 'vietnamese' },
		{ label: 'Welsh', value: 'welsh' },
		{ label: 'Yemenite', value: 'yemenite' },
		{ label: 'Zambian', value: 'zambian' },
		{ label: 'Zimbabwean', value: 'zimbabwean' }
	];

	function onPopupDemoSelect(event: any): void {
		$form.nationality = event.detail.label;
	}

	let popupSettings: PopupSettings = {
		middleware: { offset: 2 },
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};

	export let data;

	let careerFormSettings: any;
	careerFormSettings = data.careerFormSettings;

	// let cvFile: FileList;

	$: formSubmitMessage = '';
	$: appliedClass = '';

	$: resumeFileTypeError = $LL.career.employeeCvTypeError();
	let showResumeFileTypeError: boolean = false;

	$: resumeFileSizeError = $LL.career.employeeCvSizeError();
	let showResumeFileSizeError: boolean = false;

	let resumeFileName: string;

	let resumeFileValid: boolean = false;

	function onChangeHandler(e: Event): void {
		// First, we need to make sure to type cast the event target as an HTMLInputElement
		// This is because the 'files' property does not exist on the base EventTarget type
		const files = (e.target as HTMLInputElement).files;

		// This check is to make sure that we don't have any TypeScript errors
		// If files does not exist on the event target, or if there are no files, we return early
		if (!files || files.length === 0) {
			return;
		}

		// Get the first file from the list of uploaded files
		const file = files[0];

		// Check if the file is a PDF or Word document
		// The type property of the File API returns a MIME type, which we can use to check the file type
		if (
			!(
				file.type === 'application/pdf' ||
				file.type === 'application/msword' ||
				file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			)
		) {
			// if the following error was already shown -> then hide it.
			showResumeFileSizeError = false;

			showResumeFileTypeError = true;
			resumeFileName = '';
			return;
		}

		// Check if the file size is less than 10MB
		// The size property of the File API returns the size in bytes, so we convert MB to bytes by multiplying by 1e+6 (1MB = 1e+6 bytes)
		if (file.size > 10 * 1e6) {
			// if the following error was already shown -> then hide it.
			showResumeFileTypeError = false;

			showResumeFileSizeError = true;
			resumeFileName = '';
			return;
		}

		showResumeFileTypeError = false;
		showResumeFileSizeError = false;
		resumeFileValid = true;

		// If the file passes all the checks, we can then assign the resumeFileName value
		resumeFileName = file.name;
	}

	// function onChangeHandler(e: Event): void {
	// 	resumeFileName = cvFile[0].name;
	// }

	const { form, errors, constraints, enhance } = superForm(careerFormSettings, {
		validators: {
			name: (value) => {
				const nameFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/; // Regex for a string containing only English and Arabic alphabets and spaces

				if (value.length < 3) {
					return `${$LL.career.fullNameError()}`;
				} else if (value.length > 60) {
					return `${$LL.career.fullNameLengthError()}`;
				} else if (!nameFormat.test(value)) {
					return `${$LL.career.fullNameNumericError()}`;
				} else {
					return null;
				}
			},
			email: (value) => {
				const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				return !emailFormat.test(value) ? `${$LL.career.emailError()}` : null;
			},
			mobile: (value) => {
				const nameFormat = /^[0-9]{10}$/;
				return !nameFormat.test(value) ? `${$LL.career.mobileError()}` : null;
			},
			textArea: (value) => {
				// Check if value is not defined or empty
				if (!value) {
					return null;
				}
				// Perform the length checks if value is defined and not empty
				return value.length < 10
					? `${$LL.career.textAreaError1()}`
					: value.length > 2000
					? `${$LL.career.textAreaError2()}`
					: null;
			},
			position: (value) => {
				if (!value) {
					return `${$LL.career.requiredError()}`;
				}
			},
			nationality: (value) => {
				if (!value) {
					return `${$LL.career.requiredError()}`;
				}
			},
			degreeLevel: (value) => {
				if (!value) {
					return `${$LL.career.requiredError()}`;
				}
			},
			careerLevel: (value) => {
				if (!value) {
					return `${$LL.career.requiredError()}`;
				}
			},
			address: (value) => {
				// Regex for a string containing only English and Arabic alphabets and spaces
				const addressFormat = /^[\u0621-\u064Aa-zA-Z\s]+$/;

				if (value.length < 3) {
					return `${$LL.career.addressError()}`;
				} else if (value.length > 30) {
					return `${$LL.career.addressLengthError()}`;
				} else if (!addressFormat.test(value)) {
					return `${$LL.career.addressNumericError()}`;
				} else {
					return null;
				}
			}
		},
		onResult: ({ result }) => {
			if (result.status === 200) {
				resumeFileName = '';

				formSubmitMessage = `${$LL.career.successFeedback()}`;
				appliedClass = 'text-success-500 px-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			} else if (result.status === 400) {
				formSubmitMessage = `${$LL.career.errorFeedback()}`;
				appliedClass = 'text-error-400 px-2';
				setTimeout(() => {
					formSubmitMessage = '';
				}, 3000);
			}
			//
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
					{$LL.career.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

<section dir={$pageDirection}>
	<div class="container mx-auto px-5 2xl:px-0">
		<div class="py-12 lg:py-16">
			<p class="text-surface-900-50-token text-xl lg:text-2xl">{$LL.career.intro()}</p>
		</div>

		<!-- <div class="mb-30">
			<SuperDebug data={$form} />
		</div> -->

		<form method="POST" use:enhance>
			<div class="grid lg:grid-cols-2 gap-4 lg:gap-x-16 lg:gap-y-8 pb-5 lg:pb-12">
				<!-- name -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.fullName()}</span>
							</div>

							<input
								bind:value={$form.name}
								class="variant-form-material input text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
								type="text"
								name="name"
								{...$constraints.name}
								placeholder={$LL.career.fullNamePlaceholder()}
							/>
						</label>

						{#if $errors.name}<span class="text-warning-600">{$errors.name}</span>{/if}
					</div>
				</div>

				<!-- position -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.position()}</span>
							</div>
							<select
								name="position"
								bind:value={$form.position}
								class="select variant-form-material text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
							>
								<option class="mb-3" value="Sales Rep">Sales Rep</option>
								<option class="mb-3" value="Sales Engineer">Sales Engineer</option>
								<option class="mb-3" value="Technician">Technician</option>
								<option class="mb-3" value="Project Engineer">Project Engineer</option>
								<option class="mb-3" value="Accountant">Accountant</option>
								<option class="mb-3" value="HR">HR</option>
								<option class="mb-3" value="Labor">Labor</option>
							</select>
						</label>
						{#if $errors.position}<span class="text-warning-600">{$errors.position}</span>{/if}
					</div>
				</div>

				<!-- nationality -->
				<div>
					<div class="text-token w-full max-w-[750px] space-y-2">
						<div class="m-0 p-0">
							<label class="label">
								<div class="text-lg">
									<span>{$LL.career.nationality()}</span>
								</div>

								<input
									class="input autocomplete variant-form-material text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
									type="search"
									name="nationality"
									bind:value={$form.nationality}
									placeholder={$LL.career.nationPlaceholder()}
									use:popup={popupSettings}
								/>
								<div
									data-popup="popupAutocomplete"
									class="card w-full max-w-[750px] max-h-48 p-4 overflow-y-auto z-10"
									tabindex="-1"
								>
									<Autocomplete
										bind:input={$form.nationality}
										options={nationalityOptions}
										on:selection={onPopupDemoSelect}
									/>
								</div>
							</label>
							{#if $errors.nationality}<span class="text-warning-600">{$errors.nationality}</span
								>{/if}
						</div>
					</div>
				</div>

				<!-- DOB -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.dateOfBirth()}</span>
							</div>
							<input
								class="{$pageDirection === 'rtl'
									? 'text-right'
									: ''} variant-form-material input text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
								title="Input (date)"
								type="date"
								name="dateOfBirth"
								{...$constraints.dateOfBirth}
								bind:value={$form.dateOfBirth}
							/>
						</label>

						{#if $errors.dateOfBirth}<span class="text-warning-600">{$errors.dateOfBirth}</span
							>{/if}
					</div>
				</div>

				<!-- mobile number -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.mobileNumber()}</span>
							</div>
							<input
								bind:value={$form.mobile}
								class="variant-form-material input text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
								type="tel"
								title="Input (number)"
								name="mobile"
								placeholder={$LL.career.mobilePlaceholder()}
								{...$constraints.mobile}
							/>
						</label>
						{#if $errors.mobile}<span class="text-warning-600">{$errors.mobile}</span>{/if}
					</div>
				</div>

				<!-- email -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.email()}</span>
							</div>
							<input
								type="email"
								name="email"
								autocomplete="email"
								{...$constraints.email}
								bind:value={$form.email}
								class="variant-form-material input text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
								placeholder={$LL.career.emailPlaceholder()}
							/>
						</label>

						{#if $errors.email}<span class="text-warning-600">{$errors.email}</span>{/if}
					</div>
				</div>

				<!-- degree level -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.degreeLevel()}</span>
							</div>
							<select
								name="degreeLevel"
								bind:value={$form.degreeLevel}
								class="select variant-form-material text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
							>
								<option class="mb-3" value="High School">High School</option>
								<option class="mb-3" value="Certification">Certification</option>
								<option class="mb-3" value="Associate Degree">Associate Degree</option>
								<option class="mb-3" value="Bachelor Degree">Bachelor Degree</option>
								<option class="mb-3" value="Master Degree">Master Degree</option>
								<option class="mb-3" value="Phd Degree">Phd Degree</option>
							</select>
						</label>
						{#if $errors.degreeLevel}<span class="text-warning-600">{$errors.degreeLevel}</span
							>{/if}
					</div>
				</div>

				<!-- careerLevel -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.careerLevel()}</span>
							</div>
							<select
								name="careerLevel"
								bind:value={$form.careerLevel}
								class="select variant-form-material text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
							>
								<option class="mb-3" value="Student">Student</option>
								<option class="mb-3" value="Entry Level (less than 4 years experience)"
									>Entry Level (less than 4 years experience)</option
								>
								<option class="mb-3" value="Mid Career (more than 4 years experience)"
									>Mid Career (more than 4 years experience)</option
								>
								<option class="mb-3" value="Management">Management</option>
								<option class="mb-3" value="Executive">Executive</option>
							</select>
						</label>
						{#if $errors.careerLevel}<span class="text-warning-600">{$errors.careerLevel}</span
							>{/if}
					</div>
				</div>

				<!-- address -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.address()}</span>
							</div>

							<input
								bind:value={$form.address}
								class="variant-form-material input text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
								type="text"
								name="address"
								{...$constraints.address}
								placeholder={$LL.career.addressPlaceholder()}
							/>
						</label>

						{#if $errors.address}<span class="text-warning-600">{$errors.address}</span>{/if}
					</div>
				</div>

				<!-- file upload -->
				<div>
					<div class="m-0 p-0">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.employeeCV()}</span>
								{#if resumeFileName}
									<span class="text-success-500 text-lg px-2">{resumeFileName}</span>
								{/if}
							</div>
							<!-- bind:files={cvFile} -->
							<FileDropzone
								on:change={onChangeHandler}
								name="employeeCV"
								padding="py-[9.5px]"
								border="border-1"
								class="bg-surface-50-900-token"
								required
								accept=".pdf,.docx,.doc"
								maxSize={10 * 1024 * 1024}
							>
								<svelte:fragment slot="message">{$LL.career.employeeCvMSG()}</svelte:fragment>
							</FileDropzone>
						</label>

						{#if showResumeFileTypeError}<span class="text-warning-600">{resumeFileTypeError}</span
							>{/if}
						{#if showResumeFileSizeError}<span class="text-warning-600">{resumeFileSizeError}</span
							>{/if}
						{#if $errors.employeeCV}<span class="text-warning-600">{$errors.employeeCV}</span>{/if}
					</div>
				</div>

				<!-- textarea -->
				<div>
					<div class="m-0 p-0">
						<label class="label">
							<div class="text-lg">
								<span>{$LL.career.textArea()}</span>
							</div>

							<textarea
								class="variant-form-material input text-lg focus:border-surface-700-200-token bg-surface-50-900-token text-surface-900-50-token"
								rows="5"
								{...$constraints.textArea}
								placeholder={$LL.career.textAreaPlaceholder()}
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
								disabled={!resumeFileValid}
								type="submit"
								class="btn variant-ringed-success rounded-lg border border-surface-50-900-token px-16 py-[10px] text-lg mt-3"
							>
								<!-- <span class="px-3"
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
								> -->
								<span>{$LL.career.submit()}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>
