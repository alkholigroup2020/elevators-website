<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import LL from '$i18n/i18n-svelte';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { Ratings, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { currentAppLang } from '$lib/stores/store';
	import { icons } from './icons';
	import { pageDirection } from '$lib/stores/store';
	import { goto } from '$app/navigation';

	export let anonymous: boolean;
	export let contractID: string;

	// had to make this to force the props values for the stepper to update such as buttonBackLabel={$LL.survey.back()}
	let show: boolean = false;
	$: {
		if ($pageDirection === 'ltr') {
			setTimeout(() => {
				show = true;
			}, 100);
		} else {
			setTimeout(() => {
				show = true;
			}, 100);
		}
	}

	let firstLock: boolean = true;
	let secondLock: boolean = true;
	let thirdLock: boolean = true;
	let fourthLock: boolean = true;

	let value = { current: 0, max: 10 };
	function updateInteractiveValue(event: CustomEvent<{ index: number }>): void {
		value.current = event.detail.index;
		firstLock = false;
	}

	let qualityValue: string = '';
	let deliveryTime: string = '';
	let installationTime: string = '';
	let employeesBehavior: string = '';
	$: {
		// Checking if all the variables are not empty
		if (qualityValue && deliveryTime && installationTime && employeesBehavior) {
			secondLock = false;
		}
	}

	let expectationsValue: string = '';
	$: {
		// Checking if all the variables are not empty
		if (expectationsValue) {
			thirdLock = false;
		}
	}

	let clientMSG: string = '';
	let clientMobile: string = '05';
	$: {
		let mobilePattern = /^05\d{8}$/;

		if (!anonymous) {
			fourthLock = false;
		}
		// Test the clientMobile with the pattern
		else if (mobilePattern.test(clientMobile)) {
			fourthLock = false;
		} else {
			fourthLock = true;
		}
	}

	const onCompleteHandler = async () => {
		let surveyData;
		if (contractID) {
			surveyData = {
				contractID: contractID,
				Client_Experience_Level: value.current,
				Service_Quality: qualityValue,
				Delivery_Time: deliveryTime,
				Installation_Time: installationTime,
				Employees_Behavior: employeesBehavior,
				Product_Rating: expectationsValue,
				Client_Message: clientMSG
			};
		} else {
			surveyData = {
				Client_Experience_Level: value.current,
				Service_Quality: qualityValue,
				Delivery_Time: deliveryTime,
				Installation_Time: installationTime,
				Employees_Behavior: employeesBehavior,
				Product_Rating: expectationsValue,
				Client_Message: clientMSG,
				Mobile_Number: clientMobile
			};
		}

		try {
			const response = await fetch('/api/save-anonymous-client', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ surveyData })
			});

			// Check if the request was successful
			if (!response.ok) {
				throw new Error();
			}

			await goto(`/${$currentAppLang}/survey/thank-you`);
		} catch (error) {
			await goto(`/${$currentAppLang}/survey/error`);
		}
	};
</script>

<div class="container mx-auto my-5" dir={$pageDirection}>
	<div>
		<p
			class="text-3xl md:text-4xl py-5 md:py-8 mx-5 md:mx-16 xl:mx-32 2xl:mx-48 text-center text-primary-500 font-medium"
		>
			{$LL.survey.title()}
		</p>
	</div>
	<div
		class="card shadow-md {$modeCurrent
			? 'border-2'
			: ''} mt-3 p-8 mx-5 md:mx-16 xl:mx-32 2xl:mx-48 bg-surface-50-900-token"
	>
		<!-- had to make it inside if statement to force the props values for the stepper to 
		update such as buttonBackLabel={$LL.survey.back()} -->
		{#if show}
			<Stepper
				on:complete={onCompleteHandler}
				gap="gap-8"
				stepTerm="Q"
				badge="variant-filled-primary"
				active="variant-filled-primary"
				buttonBack="variant-filled-primary px-5 md:px-12 rounded-md"
				buttonNext="variant-filled-primary px-5 md:px-12 rounded-md"
				buttonComplete="variant-filled-primary px-5 md:px-10 rounded-md"
				buttonBackLabel={$LL.survey.back()}
				buttonNextLabel={$LL.survey.next()}
				buttonCompleteLabel={$LL.survey.complete()}
				regionContent="py-8"
			>
				<Step locked={firstLock}>
					<svelte:fragment slot="header">
						<div class="pb-5 font-normal text-xl md:text-3xl">
							<span>{$LL.survey.first.intro()}</span>
						</div>
					</svelte:fragment>
					<div class="pb-5">
						<span class="text-md md:text-2xl">{$LL.survey.first.question()}</span>
					</div>
					<div>
						<Ratings
							class="fill-token pb-3"
							spacing="space-x-0 sm:space-x-3"
							justify="start"
							bind:value={value.current}
							max={value.max}
							interactive
							on:icon={updateInteractiveValue}
						>
							<svelte:fragment slot="empty">
								{@html icons.starEmpty}
							</svelte:fragment>
							<svelte:fragment slot="half">
								{@html icons.starHalf}
							</svelte:fragment>
							<svelte:fragment slot="full">
								{@html icons.starFull}
							</svelte:fragment>
						</Ratings>
					</div>
					<div class="pb-5">
						<span class="text-sm md:text-lg">{$LL.survey.first.note()}</span>
					</div>
				</Step>

				<Step locked={secondLock}>
					<svelte:fragment slot="header">
						<div class="pb-5 font-normal text-xl md:text-3xl">
							<span>{$LL.survey.second.intro()}</span>
						</div>
					</svelte:fragment>
					<div class="pb-5">
						<span class="text-md md:text-2xl">{$LL.survey.second.question()}</span>
					</div>

					<div class="md:grid md:grid-cols-6 items-center pb-1">
						<div>
							<p class="text-md md:text-xl pt-2">{$LL.survey.second.q1()}</p>
						</div>
						<div class="col-span-5">
							<RadioGroup
								rounded="rounded-lg"
								padding="px-2 md:px-5 py-1"
								background="bg-surface-50-900-token"
							>
								<RadioItem
									bind:group={qualityValue}
									name="quality"
									value={$LL.survey.second.option1()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option1()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={qualityValue}
									name="quality"
									value={$LL.survey.second.option2()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option2()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={qualityValue}
									name="quality"
									value={$LL.survey.second.option3()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option3()}
									</span>
								</RadioItem>
							</RadioGroup>
						</div>
					</div>

					<div class="md:grid md:grid-cols-6 items-center pb-1">
						<div>
							<p class="text-md md:text-xl pt-2">{$LL.survey.second.q2()}</p>
						</div>
						<div class="col-span-5">
							<RadioGroup
								rounded="rounded-lg"
								padding="px-2 md:px-5 py-1"
								background="bg-surface-50-900-token"
							>
								<RadioItem
									bind:group={deliveryTime}
									name="delivery"
									value={$LL.survey.second.option1()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option1()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={deliveryTime}
									name="delivery"
									value={$LL.survey.second.option2()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option2()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={deliveryTime}
									name="delivery"
									value={$LL.survey.second.option3()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option3()}
									</span>
								</RadioItem>
							</RadioGroup>
						</div>
					</div>

					<div class="md:grid md:grid-cols-6 items-center pb-1">
						<div>
							<p class="text-md md:text-xl pt-2">{$LL.survey.second.q3()}</p>
						</div>
						<div class="col-span-5">
							<RadioGroup
								rounded="rounded-lg"
								padding="px-2 md:px-5 py-1"
								background="bg-surface-50-900-token"
							>
								<RadioItem
									bind:group={installationTime}
									name="installation"
									value={$LL.survey.second.option1()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option1()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={installationTime}
									name="installation"
									value={$LL.survey.second.option2()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option2()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={installationTime}
									name="installation"
									value={$LL.survey.second.option3()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option3()}
									</span>
								</RadioItem>
							</RadioGroup>
						</div>
					</div>

					<div class="md:grid md:grid-cols-6 items-center pb-8 md:pb-12">
						<div>
							<p class="text-md md:text-xl pt-2">{$LL.survey.second.q4()}</p>
						</div>
						<div class="col-span-5">
							<RadioGroup
								rounded="rounded-lg"
								padding="px-2 md:px-5 py-1"
								background="bg-surface-50-900-token"
							>
								<RadioItem
									bind:group={employeesBehavior}
									name="behavior"
									value={$LL.survey.second.option1()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option1()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={employeesBehavior}
									name="behavior"
									value={$LL.survey.second.option2()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option2()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={employeesBehavior}
									name="behavior"
									value={$LL.survey.second.option3()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option3()}
									</span>
								</RadioItem>
							</RadioGroup>
						</div>
					</div>
				</Step>

				<Step locked={thirdLock}>
					<svelte:fragment slot="header">
						<div class="pb-5 font-normal text-xl md:text-3xl">
							<span>{$LL.survey.third.intro()}</span>
						</div>
					</svelte:fragment>
					<div class="pb-5">
						<span class="text-md md:text-2xl">{$LL.survey.third.question()}</span>
					</div>
					<div class="pb-8 md:pb-12">
						<div class="col-span-5">
							<RadioGroup
								rounded="rounded-lg"
								padding="px-2 md:px-8 py-2"
								background="bg-surface-50-900-token"
							>
								<RadioItem
									bind:group={expectationsValue}
									name="expectations"
									value={$LL.survey.second.option1()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option1()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={expectationsValue}
									name="expectations"
									value={$LL.survey.second.option2()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option2()}
									</span>
								</RadioItem>
								<RadioItem
									bind:group={expectationsValue}
									name="expectations"
									value={$LL.survey.second.option3()}
								>
									<span class="text-md md:text-lg">
										{$LL.survey.second.option3()}
									</span>
								</RadioItem>
							</RadioGroup>
						</div>
					</div>
				</Step>

				<Step locked={fourthLock}>
					<svelte:fragment slot="header">
						<div class="pb-5 font-normal text-xl md:text-3xl">
							<span>{$LL.survey.fourth.intro()}</span>
						</div>
					</svelte:fragment>
					<div class="mb-1">
						<span class="text-md md:text-2xl">{$LL.survey.fourth.question()}</span>
					</div>
					<div class="grid lg:grid-cols-4">
						<div class="lg:col-span-3">
							<!-- text area -->
							<label class="label">
								<textarea
									class="textarea bg-surface-50-900-token focus:border-surface-900-50-token"
									bind:value={clientMSG}
									rows="4"
									placeholder={$LL.survey.fourth.message()}
								/>
							</label>
						</div>
					</div>

					{#if anonymous}
						<div class="grid lg:grid-cols-4 pb-5 md:pb-8">
							<div class="lg:col-span-3">
								<!-- mobile number -->
								<input
									class="input rounded-md bg-surface-50-900-token focus:border-surface-900-50-token"
									title="Input (tel)"
									type="tel"
									bind:value={clientMobile}
									placeholder={$LL.survey.fourth.mobile()}
								/>
								<span class="text-sm md:text-md text-warning-600-300-token mx-1"
									>{$LL.survey.fourth.mobileWarning()}</span
								>
							</div>
						</div>
					{/if}
				</Step>
			</Stepper>
		{/if}
	</div>
</div>
