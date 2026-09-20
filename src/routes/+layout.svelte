<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteHeader from '$lib/ui/header/header.svelte';
	import Footer from '$lib/components/site/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link
		rel="preload"
		href="/fonts/archivo.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/manrope.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link rel="alternate" type="application/rss+xml" title="Raygen Rupe — Writing" href="/rss.xml" />
	<meta name="theme-color" content="#140f19" />
</svelte:head>

<div class="site-shell" id="page-top">
	<a class="skip-link" href="#main">Skip to content</a>
	<SiteHeader />
	{@render children?.()}
	<Footer />
</div>

<style>
	.site-shell {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100svh;
	}
	.site-shell :global(> main) {
		flex: 1;
	}
	.skip-link {
		position: fixed;
		top: 12px;
		left: 15px;
		z-index: 100;
		padding: 9px 15px;
		background: var(--cream);
		color: var(--ink);
		transform: translateY(-180%);
	}
	.skip-link:focus {
		transform: translateY(0);
	}
</style>
