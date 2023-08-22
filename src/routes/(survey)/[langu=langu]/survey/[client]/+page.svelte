<script lang="ts">
	export let data;
	const contractID: string = data.contractID;

	import SurveyStepper from '$lib/survey/SurveyStepper.svelte';
	let anonymous: boolean = false;
</script>

<SurveyStepper {anonymous} {contractID} />
