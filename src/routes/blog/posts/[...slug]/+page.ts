// +page.ts
import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

interface MarkdownModule {
	default: Component;
	metadata: Post;
}

const posts = import.meta.glob<MarkdownModule>('/src/lib/blog-md/**/*.md');

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug; // can be nested like "test/test"
	const path = `/src/lib/blog-md/${slug}.md`;

	const loader = posts[path];
	if (!loader) {
		error(404, `Could not find ${slug}`);
	}

	const post = await loader();

	return {
		content: post.default,
		meta: post.metadata
	};
}
