<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	const home = $derived(page.route.id === '/' && page.status < 400);
	const writing = $derived(page.url.pathname.startsWith('/blog'));
</script>

<header class="site-header" class:over-hero={home}>
	<a class="identity" href={resolve('/')} aria-label="Raygen Rupe — home">
		<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"
			><path d="M3 17V3h7a4 4 0 0 1 0 8H3m7 0 7 6" /></svg
		>
		Raygen Rupe
	</a>
	<nav aria-label="Main navigation">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- the route is resolved before adding its fragment -->
		<a href={`${resolve('/')}#projects`}>Projects</a>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- the route is resolved before adding its fragment -->
		<a class="about-link" href={`${resolve('/')}#letter`}>About me</a>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- the route is resolved before adding its fragment -->
		<a class="people-link" href={`${resolve('/')}#people`}>My people</a>
		<a href={resolve('/blog')} aria-current={writing ? 'page' : undefined}>Writing</a>
	</nav>
</header>

<style>
	.site-header {
		position: relative;
		z-index: 20;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		padding: 27px var(--pad);
		color: var(--cream);
		font-size: 12px;
		font-weight: 650;
		line-height: 1.7;
	}
	.over-hero {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
	a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		margin-block: -12px;
		text-decoration: none;
		white-space: nowrap;
	}
	.identity {
		gap: 10px;
	}
	.identity svg {
		width: 18px;
		height: 18px;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 32px;
	}
	a:hover,
	a[aria-current] {
		color: var(--lilac);
	}
	a[aria-current] {
		text-decoration: underline;
	}
	@media (max-width: 720px) {
		.site-header {
			gap: 18px;
		}
		nav {
			gap: 22px;
		}
		.people-link {
			display: none;
		}
	}
	@media (max-width: 440px) {
		.site-header {
			gap: 12px;
		}
		.identity {
			gap: 7px;
		}
		.identity svg {
			width: 15px;
			height: 15px;
		}
		nav {
			gap: 16px;
		}
	}
	@media (max-width: 360px) {
		.about-link {
			display: none;
		}
	}
</style>
