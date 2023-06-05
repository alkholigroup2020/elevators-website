<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';

	import LL from '$i18n/i18n-svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">{$LL.mainTitle()}</h1>
		<div class="py-12">
			<LightSwitch />
		</div>
		<div>
			<LocaleSwitcher />
		</div>
	</div>
</div>
