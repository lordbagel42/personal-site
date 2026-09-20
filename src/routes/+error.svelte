<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	const missing = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{page.status} — Raygen Rupe</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main id="main" tabindex="-1" class="error-page">
	<div class="error-title">
		<h1>{missing ? 'Nothing here.\nYet.' : 'Something\nbroke.'}</h1>
	</div>
	<div class="error-copy">
		<p>
			{missing
				? 'This page might have moved, or it might still be an idea. There’s plenty to explore back home.'
				: 'This page couldn’t load. Try again, or head back to the projects.'}
		</p>
		<a href={resolve('/')}
			>Back to the things I make<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.4"
				aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg
			></a
		>
	</div>
</main>

<style>
	.error-page {
		padding: 100px var(--pad) 120px;
		display: grid;
		grid-template-columns: 1.25fr 1fr;
		gap: 70px;
		align-items: end;
	}
	.error-title {
		position: relative;
	}
	h1 {
		font: 600 clamp(70px, 8.5vw, 132px) / 0.98 var(--font-display);
		letter-spacing: -0.035em;
		white-space: pre-line;
		color: var(--lilac);
	}
	.error-copy {
		padding-bottom: 9px;
		max-width: 440px;
	}
	p {
		font-size: 20px;
		line-height: 1.8;
		color: var(--soft);
	}
	a {
		display: inline-flex;
		align-items: center;
		gap: 26px;
		margin-top: 38px;
		min-height: 44px;
		font-size: 14px;
	}
	svg {
		width: 24px;
		height: 24px;
		flex: none;
	}
	@media (max-width: 720px) {
		.error-page {
			display: block;
			padding-top: 70px;
			padding-bottom: 75px;
		}
		h1 {
			font-size: clamp(65px, 14vw, 100px);
		}
		.error-copy {
			margin-top: 45px;
		}
		p {
			font-size: 18px;
		}
	}
</style>
