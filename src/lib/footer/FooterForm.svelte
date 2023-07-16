<script>
	import LL from '$i18n/i18n-svelte';

	let name = '';
	let email = '';
	let mobile = '';
	let message = '';

	function handleSubmit() {
		if (!name || !message || (!email && !mobile)) {
			alert('Please fill in the required fields.');
			return;
		}

		//... send your form data to your API
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="my-4">
			<label class="labe">
				<div class="text-lg">
					<span>Name:</span>
				</div>
				<input
					bind:value={name}
					class="variant-form-material input focus:border-surface-400 text-white"
					type="text"
					placeholder={$LL.footer.message.form.fullName()}
				/>
			</label>
		</div>
	</form>
</div>
