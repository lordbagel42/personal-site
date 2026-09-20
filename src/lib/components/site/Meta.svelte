<script lang="ts">
	import { url } from '$lib/config';

	let {
		title,
		description,
		path = '/',
		type = 'website'
	}: {
		title: string;
		description: string;
		path?: string;
		type?: 'website' | 'article';
	} = $props();
	const canonical = $derived(new URL(path, url).href);
	const image = new URL('social-card.png', url).href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:site_name" content="Raygen Rupe" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Raygen Rupe’s name layered around SERV0, an original 3D printer, on a dark purple background."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content="Raygen Rupe and the SERV0 3D printer." />
</svelte:head>
