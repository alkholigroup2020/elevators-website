<script lang="ts">
	import SurveyStepper from '$lib/survey/SurveyStepper.svelte';
	const contractID: string = '';

	let anonymous: boolean = true;
</script>

<SurveyStepper {anonymous} {contractID} />
