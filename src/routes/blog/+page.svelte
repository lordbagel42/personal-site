<script lang="ts">
	import { resolve } from '$app/paths';
	import Meta from '$lib/components/site/Meta.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' });
</script>

<Meta
	title="Writing — Raygen Rupe"
	description="A place for notes on making things, learning along the way, and the thoughts that don't fit in a project README. Writing by Raygen Rupe."
	path="/blog"
/>

<main id="main" class="writing" tabindex="-1">
	<header class="writing-intro">
		<h1>An unfinished<br /><span>thought.</span></h1>
		<p>A place for what I learn<br class="desktop-break" /> along the way.</p>
	</header>

	{#if data.posts.length > 0}
		<section class="published" aria-label="Published writing">
			<div class="index-heading">
				<p>Writing</p>
				<a href={resolve('/rss.xml')}>Follow via RSS</a>
			</div>
			<ul class="posts">
				{#each data.posts as post (post.slug)}
					<li>
						<time datetime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
						<a href={resolve('/blog/posts/[...slug]', { slug: post.slug })}>
							<div>
								<h2>{post.title}</h2>
								<p>{post.description}</p>
							</div>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.4"
								aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg
							>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{:else}
		<section class="not-yet" aria-labelledby="not-yet-heading">
			<h2 id="not-yet-heading">Still taking shape.</h2>
			<div class="not-yet-copy">
				<p>
					No posts just yet. Eventually, this will be a place for longer notes on the things I make
					and learn along the way.
				</p>
				<p>For now, there are things to show you.</p>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- the route is resolved before adding its fragment -->
				<a class="projects-link" href={`${resolve('/')}#projects`}
					>See what I’m building<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.4"
						aria-hidden="true"><path d="M3 12h18m-6-6 6 6-6 6" /></svg
					></a
				>
			</div>
		</section>
		<div class="writing-follow">
			<p>When the words are ready, they’ll be here.</p>
			<a href={resolve('/rss.xml')}>Follow future posts via RSS</a>
		</div>
	{/if}
</main>

<style>
	.writing {
		padding: 76px var(--pad) 72px;
		max-width: 1600px;
		margin: 0 auto;
		min-height: calc(100svh - 250px);
	}
	.writing-intro {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 40px;
		padding-bottom: 87px;
	}
	h1 {
		font:
			650 clamp(66px, 8.5vw, 130px) / 0.96 Archivo,
			sans-serif;
		letter-spacing: -0.04em;
		margin: 0;
	}
	h1 span {
		color: var(--lilac);
	}
	.writing-intro > p {
		color: var(--soft);
		font-size: 18px;
		line-height: 1.65;
		max-width: 300px;
		padding-bottom: 6px;
	}
	.not-yet {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		border-top: 1px solid var(--line);
		padding: 46px 0 58px;
	}
	.not-yet h2 {
		font:
			550 clamp(30px, 3vw, 44px) / 1.1 Archivo,
			sans-serif;
		letter-spacing: -0.03em;
	}
	.not-yet-copy {
		max-width: 540px;
	}
	.not-yet-copy p {
		font-size: 17px;
		line-height: 1.8;
		color: var(--soft);
	}
	.not-yet-copy p + p {
		margin-top: 18px;
	}
	.projects-link {
		display: inline-flex;
		align-items: center;
		gap: 24px;
		margin-top: 27px;
		font-size: 15px;
		min-height: 32px;
	}
	.projects-link svg {
		width: 22px;
		height: 22px;
		transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.projects-link:hover svg {
		transform: translateX(4px);
	}
	.writing-follow {
		display: flex;
		justify-content: space-between;
		gap: 30px;
		padding-top: 25px;
		border-top: 1px solid var(--line);
		font-size: 13px;
	}
	.writing-follow p {
		color: var(--soft);
	}
	.index-heading {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding-bottom: 24px;
		font-size: 14px;
		color: var(--soft);
	}
	.posts {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.posts li {
		display: grid;
		grid-template-columns: minmax(170px, 0.5fr) 2fr;
		gap: 40px;
		padding: 37px 0 43px;
		border-top: 1px solid var(--line);
	}
	.posts time {
		font-size: 13px;
		color: var(--soft);
		padding-top: 9px;
	}
	.posts a {
		display: flex;
		justify-content: space-between;
		gap: 40px;
		text-decoration: none;
	}
	.posts h2 {
		font:
			550 clamp(32px, 3.3vw, 48px) / 1.12 Archivo,
			sans-serif;
		letter-spacing: -0.03em;
	}
	.posts p {
		margin-top: 18px;
		font-size: 16px;
		line-height: 1.8;
		max-width: 58ch;
		color: var(--soft);
	}
	.posts a > svg {
		width: 26px;
		height: 26px;
		flex: none;
		margin-top: 7px;
		color: var(--lilac);
		transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.posts a:hover h2 {
		color: var(--lilac);
	}
	.posts a:hover > svg {
		transform: translate(3px, -3px);
	}
	@media (max-width: 850px) {
		.writing {
			padding-top: 55px;
		}
		.writing-intro {
			display: block;
			padding-bottom: 60px;
		}
		.writing-intro > p {
			margin-top: 30px;
			max-width: none;
			font-size: 16px;
		}
		.desktop-break {
			display: none;
		}
		.not-yet {
			grid-template-columns: 0.8fr 1.2fr;
			gap: 35px;
		}
		.posts li {
			grid-template-columns: 140px 1fr;
			gap: 25px;
		}
	}
	@media (max-width: 600px) {
		.writing {
			padding-top: 43px;
			padding-bottom: 50px;
		}
		h1 {
			font-size: clamp(53px, 12.8vw, 76px);
		}
		.writing-intro {
			padding-bottom: 44px;
		}
		.writing-intro > p {
			max-width: 28ch;
			margin-top: 28px;
		}
		.not-yet {
			display: block;
			padding: 33px 0 40px;
		}
		.not-yet h2 {
			font-size: 32px;
			margin-bottom: 24px;
		}
		.not-yet-copy p {
			font-size: 16px;
		}
		.writing-follow {
			flex-direction: column;
			gap: 12px;
			font-size: 12px;
		}
		.writing-follow a {
			width: fit-content;
			padding: 5px 0;
		}
		.posts li {
			display: block;
			padding: 25px 0 30px;
		}
		.posts a {
			margin-top: 15px;
			gap: 22px;
		}
		.posts h2 {
			font-size: 32px;
		}
		.posts a > svg {
			width: 20px;
			height: 20px;
		}
		.posts p {
			font-size: 15px;
			margin-top: 14px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.projects-link svg,
		.posts a > svg {
			transition: none;
		}
	}
</style>
