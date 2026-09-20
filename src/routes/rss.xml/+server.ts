import * as config from '$lib/config';
import { createRssFeed, getPublishedPosts } from '$lib/server/posts';

export function GET() {
	return new Response(createRssFeed(getPublishedPosts(), config), {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
}
