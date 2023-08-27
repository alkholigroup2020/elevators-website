<script lang="ts">
	import { pageDirection } from '$lib/stores/store';
	import { currentAppLang } from '$lib/stores/store';

	export let data;
</script>

<section dir={$pageDirection}>
	<div class="max-w-[1100px] mx-auto px-5 pb-8">
		{#if $currentAppLang === 'en'}
			<!-- English Content -->
			<h1 class="h2 font-normal py-8 md:py-16 text-primary-500 text-center">
				{data.pageCMSData.Blog_Title}
			</h1>
			{#each data.pageCMSData.Blog_Details as section}
				{#if section.__typename === 'ComponentBlogSimpleParagraph'}
					<div class="pb-5 md:pb-10 main-{$currentAppLang}-text leading-9">
						<p>{section.simple_paragraph}</p>
					</div>
				{/if}

				{#if section.__typename === 'ComponentBlogParagraphWithTitle'}
					<div class="pb-5 md:pb-10">
						<p class="main-{$currentAppLang}-text font-semibold pb-3">{section.paragraph_title}</p>
						<p class="main-{$currentAppLang}-text leading-9">{section.paragraph}</p>
					</div>
				{/if}

				{#if section.__typename === 'ComponentBlogList'}
					<div class="pb-5 md:pb-10">
						<p class="main-{$currentAppLang}-text font-semibold mb-3">{section.list_title}</p>
						<p class="main-{$currentAppLang}-text leading-9 mb-5">
							{section.list_introduction || ''}
						</p>
						<ul class="space-y-5 main-{$currentAppLang}-text leading-9 list-disc ml-5 my-5">
							{#each section.blog_list_item as line}
								<li>{line.line}</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
		{:else}
			<!-- Arabic Content -->
			<h1 class="h2 font-normal py-8 md:py-16 text-primary-500 text-center">
				{data.pageCMSData.localizations.data[0].attributes.Blog_Title}
			</h1>
			{#each data.pageCMSData.localizations.data[0].attributes.Blog_Details as section}
				{#if section.__typename === 'ComponentBlogSimpleParagraph'}
					<div class="pb-5 md:pb-12 main-{$currentAppLang}-text leading-9">
						<p>{section.simple_paragraph}</p>
					</div>
				{/if}

				{#if section.__typename === 'ComponentBlogParagraphWithTitle'}
					<div class="pb-5 md:pb-12">
						<p class="main-{$currentAppLang}-text font-semibold">{section.paragraph_title}</p>
						<p class="main-{$currentAppLang}-text leading-9">{section.paragraph}</p>
					</div>
				{/if}

				{#if section.__typename === 'ComponentBlogList'}
					<div class="pb-5 md:pb-12">
						<p class="main-{$currentAppLang}-text font-semibold mb-5">{section.list_title}</p>
						<p class="main-{$currentAppLang}-text leading-9 mb-5">
							{section.list_introduction || ''}
						</p>
						<ul class="space-y-5 main-{$currentAppLang}-text leading-9 list-disc mr-5 my-5">
							{#each section.blog_list_item as line}
								<li>{line.line}</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</section>
