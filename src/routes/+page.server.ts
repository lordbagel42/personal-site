import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	if (!response.ok) {
		error(response.status, 'Failed to load posts');
	}
	const posts: Post[] = await response.json();
	// Only return the 3 most recent posts
	return { posts: posts.slice(0, 3) };
}
