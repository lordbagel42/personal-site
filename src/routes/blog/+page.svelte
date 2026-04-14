<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | {data.posts.length} Posts</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
	<hgroup class="mb-10">
		<h1 class="text-4xl font-bold tracking-tight text-foreground">Blog</h1>
		<p class="mt-2 text-lg text-muted-foreground">
			Thoughts, tutorials, and miscellaneous writings.
		</p>
	</hgroup>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post (post.slug)}
			<Card.Root class="flex flex-col overflow-hidden transition-all hover:shadow-md">
				<Card.Header>
					<div class="mb-2 flex items-center gap-2">
						{#each post.categories as category (category)}
							<Badge variant="secondary" class="text-[10px] tracking-wider uppercase">
								{category}
							</Badge>
						{/each}
					</div>
					<Card.Title>
						<a
							href={resolve('/blog/posts/[...slug]', { slug: post.slug })}
							class="transition-colors hover:text-primary"
						>
							{post.title}
						</a>
					</Card.Title>
					<Card.Description class="line-clamp-2">
						{post.description}
					</Card.Description>
				</Card.Header>
				<Card.Footer class="mt-auto border-t bg-muted/50 py-3">
					<p class="text-xs text-muted-foreground">
						{formatDate(post.date)}
					</p>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
