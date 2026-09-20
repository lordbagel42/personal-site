import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { PageLoad } from './$types';

interface MarkdownModule {
	default: Component;
}

const posts = import.meta.glob<MarkdownModule>('/src/lib/blog-md/**/*.md');

export const load: PageLoad = async ({ data }) => {
	// The server first checks publication before any article content is loaded.
	const loader = posts[`/src/lib/blog-md/${data.meta.slug}.md`];
	if (!loader) error(404, 'This piece could not be found.');

	const post = await loader();

	return {
		content: post.default,
		meta: data.meta
	};
};
