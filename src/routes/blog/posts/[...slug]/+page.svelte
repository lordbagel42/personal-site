<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import { Badge } from '$lib/components/ui/badge';
	import { resolve } from '$app/paths';
	import '../../../../markdown.css';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
	<header class="mb-12 border-b pb-12">
		<div class="mb-6 flex flex-wrap gap-2">
			{#each data.meta.categories as category (category)}
				<Badge variant="outline" class="text-[10px] tracking-widest uppercase">
					{category}
				</Badge>
			{/each}
		</div>

		<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
			{data.meta.title}
		</h1>

		<p class="mb-6 text-xl text-muted-foreground">
			{data.meta.description}
		</p>

		<div class="flex items-center gap-3 text-sm text-muted-foreground">
			<time datetime={data.meta.date}>
				{formatDate(data.meta.date, 'long')}
			</time>
			<span>•</span>
			<span>{config.author}</span>
		</div>
	</header>

	<div class="markdown prose prose-neutral dark:prose-invert max-w-none">
		<data.content />
	</div>

	<footer class="mt-16 border-t pt-8">
		<a href={resolve('/blog')} class="text-sm font-medium text-primary hover:underline">
			← Back to all posts
		</a>
	</footer>
</article>
