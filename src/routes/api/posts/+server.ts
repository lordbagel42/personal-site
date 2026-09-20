import { json } from '@sveltejs/kit';
import { getPublishedPosts } from '$lib/server/posts';

export function GET() {
	return json(getPublishedPosts());
}
