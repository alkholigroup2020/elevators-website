<script lang="ts">
	import { pageDirection } from '$lib/stores/store';
	import { currentAppLang } from '$lib/stores/store';
	import LL from '$i18n/i18n-svelte';
	import LoadingSpinner from '$lib/generalComponents/LoadingSpinner.svelte';

	export let data;
	const blogsData = data.props.pageCMSData;

	// A type representing the structure of your data
	type DataType = {
		attributes: {
			Blog_Title: string;
			ID_And_Order: number;
			Blog_Brief: string;
			Blog_Main_Image_w550_h385: { data: { attributes: { url: string } } };
			localizations: {
				data: [
					{
						attributes: {
							Blog_Title: string;
							Blog_Brief: string;
						};
					}
				];
			};
		};
	};

	// cms array of data
	let cmsData: DataType[] = blogsData;

	// Sorting the array based on the `ID_And_Order` property
	const blogs = cmsData.sort((a, b) => a.attributes.ID_And_Order - b.attributes.ID_And_Order);
</script>

<section dir={$pageDirection}>
	<div
		class="h-[180px] md:h-[250px] relative"
		style="background: rgba(var(--color-surface-600)) url('/pattern.webp') repeat 50% 22px;"
	>
		<div class="absolute w-[100%] h-full flex items-center justify-center">
			<div class="container mx-auto px-5 2xl:px-0">
				<h1
					class="heading-{$currentAppLang}-1 font-medium text-white text-center"
					style="text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.8);"
				>
					{$LL.blogs.title()}
				</h1>
			</div>
		</div>
	</div>
</section>

<section dir={$pageDirection}>
	<div
		class="max-w-[1100px] mx-auto px-5 min-[420px]:px-12 min-[550px]:px-16 min-[650px]:px-[100px] min-[700px]:px-[125px] md:px-5 lg:px-0"
	>
		{#each blogs as blog}
			<div class="grid md:grid-cols-2 gap-4 md:gap-8 py-12 md:py-16">
				<!-- image -->
				<div>
					{#if $currentAppLang === 'en'}
						<p class="heading-{$currentAppLang}-2 mb-6 text-primary-500 font-medium md:hidden">
							{blog.attributes.Blog_Title}
						</p>
					{:else}
						<p class="heading-{$currentAppLang}-2 mb-6 text-primary-500 font-medium md:hidden">
							{blog.attributes.localizations.data[0].attributes.Blog_Title}
						</p>
					{/if}

					{#if blog.attributes.Blog_Main_Image_w550_h385.data}
						<img
							src={`https://cms.buildingtec-elevators.com${blog.attributes.Blog_Main_Image_w550_h385.data.attributes.url}`}
							alt="blog post"
							class="w-full aspect-[1/0.7] rounded-lg"
						/>
					{:else}
						<div class="w-full aspect-[1/0.7] border rounded-lg" />
					{/if}
				</div>

				<!-- text -->
				<div class="h-full w-full flex flex-col justify-center">
					{#if $currentAppLang === 'en'}
						<div class="space-y-8">
							<p class="heading-{$currentAppLang}-2 text-primary-500 font-light hidden md:block">
								{blog.attributes.Blog_Title}
							</p>
							<p class="main-{$currentAppLang}-text font-normal line-clamp-3 leading-7">
								{blog.attributes.Blog_Brief}
							</p>
						</div>
					{:else}
						<div class="space-y-8">
							<p class="heading-{$currentAppLang}-2 text-primary-500 font-light hidden md:block">
								{blog.attributes.localizations.data[0].attributes.Blog_Title}
							</p>
							<p class="main-{$currentAppLang}-text font-normal line-clamp-3 leading-7">
								{blog.attributes.localizations.data[0].attributes.Blog_Brief}
							</p>
						</div>
					{/if}

					<div class="max-w-[40%]">
						<a
							type="button"
							aria-label="a link for the blog page"
							href={`/${$currentAppLang}/blog/${blog.attributes.ID_And_Order}`}
							class="sub-main-{$currentAppLang}-text font-normal btn variant-ringed-primary w-full rounded-lg py-[12px] mt-6"
							>{$LL.blogs.more()}</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
