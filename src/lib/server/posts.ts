import type { Post } from '$lib/types';

const metadata = import.meta.glob<Partial<Post> | null | undefined>('/src/lib/blog-md/**/*.md', {
	eager: true,
	import: 'metadata'
});

/** All public writing surfaces use the same explicit publication rule. */
export function getPublishedPosts(): Post[] {
	return Object.entries(metadata)
		.flatMap(([path, post]) => {
			if (
				!post ||
				post.published !== true ||
				typeof post.title !== 'string' ||
				!post.title.trim() ||
				typeof post.description !== 'string' ||
				typeof post.date !== 'string' ||
				!Number.isFinite(Date.parse(post.date))
			) {
				return [];
			}

			return [
				{
					title: post.title,
					description: post.description,
					date: new Date(post.date).toISOString(),
					categories: Array.isArray(post.categories)
						? post.categories.filter((category): category is string => typeof category === 'string')
						: [],
					published: true,
					slug: path.slice('/src/lib/blog-md/'.length, -'.md'.length)
				}
			];
		})
		.sort((first, second) => Date.parse(second.date) - Date.parse(first.date));
}

export function getPublishedPost(slug: string) {
	return getPublishedPosts().find((post) => post.slug === slug);
}

function escapeXml(value: string) {
	return value.replace(/[<>&"']/g, (character) => {
		return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[character]!;
	});
}

export function createRssFeed(
	posts: Post[],
	site: { title: string; description: string; url: string }
) {
	const writingUrl = new URL('/blog', site.url).href;
	const feedUrl = new URL('/rss.xml', site.url).href;
	const items = posts
		.filter((post) => post.published === true)
		.map((post) => {
			const slug = post.slug.split('/').map(encodeURIComponent).join('/');
			const url = new URL(`/blog/posts/${slug}`, site.url).href;
			return `<item>
		<title>${escapeXml(post.title)}</title>
		<description>${escapeXml(post.description)}</description>
		<link>${escapeXml(url)}</link>
		<guid isPermaLink="true">${escapeXml(url)}</guid>
		<pubDate>${new Date(post.date).toUTCString()}</pubDate>
	</item>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
	<channel>
		<title>${escapeXml(site.title)} — Writing</title>
		<description>${escapeXml(site.description)}</description>
		<link>${escapeXml(writingUrl)}</link>
		<language>en-us</language>
		<atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml"/>
		${items}
	</channel>
</rss>`;
}
