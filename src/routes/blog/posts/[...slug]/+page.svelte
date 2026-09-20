<script lang="ts">
	import { resolve } from '$app/paths';
	import Meta from '$lib/components/site/Meta.svelte';
	import type { PageProps } from './$types';
	import '../../../../markdown.css';

	let { data }: PageProps = $props();
	const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
</script>

<Meta
	title={`${data.meta.title} — Raygen Rupe`}
	description={data.meta.description}
	path={`/blog/posts/${data.meta.slug.split('/').map(encodeURIComponent).join('/')}`}
	type="article"
/>
<svelte:head
	><meta property="article:published_time" content={data.meta.date} /><meta
		name="author"
		content="Raygen Rupe"
	/></svelte:head
>

<main id="main" class="article-page">
	<article>
		<header class="article-header">
			<a class="back-link" href={resolve('/blog')}
				><svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.4"
					aria-hidden="true"><path d="M21 12H3m6-6-6 6 6 6" /></svg
				>All writing</a
			>
			<h1>{data.meta.title}</h1>
			<p class="article-description">{data.meta.description}</p>
			<div class="article-byline">
				<p>
					Raygen Rupe <span aria-hidden="true">·</span>
					<time datetime={data.meta.date}>{dateFormatter.format(new Date(data.meta.date))}</time>
				</p>
				{#if data.meta.categories.length}<p class="categories">
						{data.meta.categories.join(' / ')}
					</p>{/if}
			</div>
		</header>
		<div class="markdown"><data.content /></div>
		<footer class="article-footer">
			<p>Thanks for reading.</p>
			<a href={resolve('/blog')}
				>Back to all writing<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.4"
					aria-hidden="true"><path d="M3 12h18m-6-6 6 6-6 6" /></svg
				></a
			>
		</footer>
	</article>
</main>

<style>
	.article-page {
		padding: 47px var(--pad) 90px;
	}
	.article-header {
		max-width: 1040px;
		margin: 0 auto 57px;
	}
	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 15px;
		min-height: 32px;
		font-size: 13px;
		color: var(--soft);
	}
	.back-link svg {
		width: 18px;
		height: 18px;
	}
	h1 {
		font:
			600 clamp(52px, 7.1vw, 104px) / 1.02 Archivo,
			sans-serif;
		letter-spacing: -0.04em;
		margin: 46px 0 27px;
		max-width: 19ch;
		overflow-wrap: anywhere;
		text-wrap: balance;
	}
	.article-description {
		font-size: 21px;
		line-height: 1.65;
		color: var(--soft);
		max-width: 58ch;
	}
	.article-byline {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		padding: 25px 0;
		margin-top: 38px;
		border-bottom: 1px solid var(--line);
		font-size: 13px;
		color: var(--soft);
	}
	.article-byline span {
		display: inline-block;
		margin: 0 10px;
	}
	.categories {
		color: var(--lilac);
	}
	.markdown,
	.article-footer {
		max-width: 730px;
		margin-inline: auto;
	}
	.article-footer {
		margin-top: 80px;
		padding-top: 30px;
		border-top: 1px solid var(--line);
		display: flex;
		justify-content: space-between;
		gap: 25px;
		font-size: 14px;
	}
	.article-footer p {
		color: var(--soft);
	}
	.article-footer a {
		display: inline-flex;
		gap: 16px;
		align-items: center;
	}
	.article-footer svg {
		width: 20px;
		height: 20px;
	}
	@media (max-width: 600px) {
		.article-page {
			padding-top: 26px;
			padding-bottom: 60px;
		}
		.article-header {
			margin-bottom: 37px;
		}
		h1 {
			font-size: clamp(42px, 11.5vw, 67px);
			margin-top: 31px;
			margin-bottom: 25px;
		}
		.article-description {
			font-size: 18px;
		}
		.article-byline {
			display: block;
			font-size: 12px;
			padding: 22px 0;
			margin-top: 27px;
		}
		.article-byline span {
			margin: 0 5px;
		}
		.categories {
			margin-top: 12px;
		}
		.article-footer {
			margin-top: 53px;
			flex-direction: column;
			gap: 16px;
		}
	}
</style>
