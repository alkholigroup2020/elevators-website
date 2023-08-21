<script lang="ts">
	import { pageDirection } from '$lib/stores/store';
	import { currentAppLang } from '$lib/stores/store';

	export let data;
</script>

<section dir={$pageDirection}>
	<div class="max-w-[1100px] mx-auto px-5 pb-8">
		{#if $currentAppLang === 'en'}
			<h1 class="h1 font-normal py-8 md:py-16 text-primary-500 text-center">
				{data.pageCMSData.Blog_Title}
			</h1>
		{:else}
			<h1 class="h1 font-normal py-8 md:py-16 text-primary-500">
				{data.pageCMSData.localizations.data[0].attributes.Blog_Title}
			</h1>
		{/if}

		{#each data.pageCMSData.Blog_Details as section}
			{#if section.__typename === 'ComponentBlogSimpleParagraph'}
				<div class="pb-5 md:pb-12 text-xl">
					<p>{section.simple_paragraph}</p>
				</div>
			{/if}

			{#if section.__typename === 'ComponentBlogParagraphWithTitle'}
				<div class="pb-5 md:pb-12">
					<p class="text-2xl">{section.paragraph_title}</p>
					<p class="text-xl">{section.paragraph}</p>
				</div>
			{/if}

			{#if section.__typename === 'ComponentBlogList'}
				<div class="pb-5 md:pb-12">
					<p class="text-2xl">{section.list_title}</p>
					<p class="text-xl">{section.list_introduction}</p>
					<ul class="space-y-3">
						{#each section.blog_list_item as line}
							<li>{line.line}</li>
						{/each}
					</ul>
				</div>
			{/if}
		{/each}
	</div>
</section>
