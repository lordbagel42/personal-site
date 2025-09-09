<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import '../../../../markdown.css';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="markdown mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
	<hgroup class="mb-6">
		<h1 class="mb-2 text-4xl font-bold tracking-tight text-foreground">
			{data.meta.title}
		</h1>
		<p class="text-sm text-muted-foreground">
			Published on {formatDate(data.meta.date)}
		</p>
	</hgroup>

	<div class="mb-8 flex flex-wrap gap-2">
		{#each data.meta.categories as category}
			<Badge variant="secondary">#{category}</Badge>
		{/each}
	</div>

	<Card class="rounded-2xl shadow-md">
		<CardContent class="prose prose-neutral dark:prose-invert max-w-none py-6">
			<data.content />
		</CardContent>
	</Card>
</article>
