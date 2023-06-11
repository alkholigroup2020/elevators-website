<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	const lang = $page.params.lang;
	if (browser) {
		localStorage.setItem('language', lang);
	}
</script>

<!-- <div
	dir={`${lang === 'ar' ? 'rtl' : 'ltr'}`}
	class="container h-full mx-auto flex justify-center items-center"
>
	<div class="space-y-5">
		<h1 class="h1">{$LL.mainTitle()}</h1>
		<div dir="ltr" class="py-12">
			<LightSwitch />
		</div>
		<div>
			<LocaleSwitcher />
		</div>
		<div>
			<p>The current Lang is: {lang}</p>
		</div>
	</div>
</div> -->
