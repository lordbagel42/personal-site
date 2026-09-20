<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, Check, Bookmark, Monitor, Smartphone } from '@lucide/svelte';
	type Concept = {
		id: string;
		name: string;
		thesis: string;
		interaction: string;
		why: string;
		ready: boolean;
		round: 1 | 2;
	};
	let concepts = $state<Concept[]>([]);
	let saved = $state<string[]>([]);
	let selection = $state<'new' | 'first' | 'shortlist'>('new');
	let viewport = $state<'desktop' | 'mobile'>('desktop');
	let loading = $state(true);
	let error = $state(false);
	const newCount = $derived(concepts.filter((concept) => concept.round === 2).length);
	const firstCount = $derived(concepts.filter((concept) => concept.round === 1).length);
	const savedCount = $derived(concepts.filter((concept) => saved.includes(concept.id)).length);
	const visible = $derived(
		concepts.filter((concept) =>
			selection === 'shortlist'
				? saved.includes(concept.id)
				: concept.round === (selection === 'new' ? 2 : 1)
		)
	);
	const readyCount = $derived(visible.filter((concept) => concept.ready).length);
	const heading = $derived(
		selection === 'shortlist'
			? 'Your shortlist'
			: selection === 'new'
				? `${newCount || ''} new directions`.trim()
				: `${firstCount || ''} original directions`.trim()
	);
	const frameWidth = $derived(viewport === 'desktop' ? 1440 : 390);
	const frameHeight = $derived(viewport === 'desktop' ? 1000 : 844);

	function sizePreview(node: HTMLElement, dimensions: { width: number; height: number }) {
		let current = dimensions;
		const update = () =>
			node.style.setProperty('--preview-scale', `${node.clientWidth / current.width}`);
		const observer = new ResizeObserver(update);
		observer.observe(node);
		update();
		return {
			update(dimensions: { width: number; height: number }) {
				current = dimensions;
				update();
			},
			destroy() {
				observer.disconnect();
			}
		};
	}
	function toggleSaved(id: string) {
		saved = saved.includes(id) ? saved.filter((entry) => entry !== id) : [...saved, id];
		try {
			localStorage.setItem('raygen-design-shortlist', JSON.stringify(saved));
		} catch {
			/* Session selection remains usable. */
		}
	}
	onMount(() => {
		let stopped = false;
		let timer: ReturnType<typeof setTimeout>;
		const abort = new AbortController();
		try {
			const stored = JSON.parse(localStorage.getItem('raygen-design-shortlist') ?? '[]');
			if (Array.isArray(stored))
				saved = [...new Set(stored.filter((id) => typeof id === 'string'))];
		} catch {
			/* An empty shortlist is a safe fallback. */
		}
		async function refresh() {
			try {
				const response = await fetch('/directions/catalog.json', {
					cache: 'no-store',
					signal: abort.signal
				});
				if (!response.ok) throw new Error('Unable to load concepts');
				const data = (await response.json()) as { concepts: Concept[] };
				if (stopped) return;
				concepts = data.concepts;
				error = false;
			} catch {
				if (!stopped) error = true;
			} finally {
				if (!stopped) {
					loading = false;
					if (error || !concepts.length || concepts.some((concept) => !concept.ready))
						timer = setTimeout(refresh, 5000);
				}
			}
		}
		refresh();
		return () => {
			stopped = true;
			clearTimeout(timer);
			abort.abort();
		};
	});
</script>

<svelte:head
	><title>{heading} — Raygen Rupe</title><meta
		name="robots"
		content="noindex, nofollow"
	/></svelte:head
>
<main id="main" class="studio" tabindex="-1">
	<header class="studio-heading">
		<div>
			<h1>{heading}.</h1>
			<p>
				More ways this corner of the internet could feel.<br />Explore both rounds and keep your
				favorites together.
			</p>
		</div>
		<p class="progress" aria-live="polite">
			{loading
				? 'Loading directions…'
				: selection === 'shortlist'
					? `${savedCount} saved across both rounds`
					: `${readyCount} of ${visible.length} ready`}
		</p>
	</header>
	<div class="toolbar">
		<div class="filters">
			<button
				class:active={selection === 'new'}
				onclick={() => (selection = 'new')}
				aria-pressed={selection === 'new'}>New directions <span>{newCount}</span></button
			><button
				class:active={selection === 'first'}
				onclick={() => (selection = 'first')}
				aria-pressed={selection === 'first'}>First round <span>{firstCount}</span></button
			><button
				class:active={selection === 'shortlist'}
				onclick={() => (selection = 'shortlist')}
				aria-pressed={selection === 'shortlist'}>Shortlist <span>{savedCount}</span></button
			>
		</div>
		<div class="viewport">
			<button
				class:active={viewport === 'desktop'}
				onclick={() => (viewport = 'desktop')}
				aria-label="Desktop previews"
				aria-pressed={viewport === 'desktop'}><Monitor size={17} /><span>Desktop</span></button
			><button
				class:active={viewport === 'mobile'}
				onclick={() => (viewport = 'mobile')}
				aria-label="Mobile previews"
				aria-pressed={viewport === 'mobile'}><Smartphone size={17} /><span>Mobile</span></button
			>
		</div>
	</div>
	{#if error}<p class="notice" role="status">
			The gallery couldn’t load. It will retry shortly.
		</p>{/if}
	{#if !loading && selection === 'shortlist' && !visible.length}<p class="empty">
			Save a few directions with the Shortlist button. They’ll stay here while you compare.
		</p>{/if}
	<div class="concept-grid" class:mobile-previews={viewport === 'mobile'}>
		{#each visible as concept (concept.id)}
			<article id={`direction-${concept.id}`} class="concept" class:pending={!concept.ready}>
				{#if concept.ready}
					<!-- eslint-disable svelte/no-navigation-without-resolve -- standalone static review prototypes -->
					<a
						class="preview-link"
						href={`/directions/${concept.id}.html`}
						target="_blank"
						rel="noreferrer"
						aria-label={`Open ${concept.id}: ${concept.name}`}
					>
						<div
							class="preview"
							use:sizePreview={{ width: frameWidth, height: frameHeight }}
							style={`aspect-ratio:${frameWidth}/${frameHeight}; --frame-width:${frameWidth}px; --frame-height:${frameHeight}px;`}
						>
							<iframe
								title={`${concept.name} preview`}
								src={`/directions/${concept.id}.html`}
								width={frameWidth}
								height={frameHeight}
								loading="lazy"
								tabindex="-1"
								aria-hidden="true"
								inert
							></iframe>
						</div>
						<span class="open-affordance">Explore direction <ArrowUpRight size={18} /></span>
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				{:else}<div class="pending-preview" style={`aspect-ratio:${frameWidth}/${frameHeight};`}>
						<span>{concept.id}</span>
						<p>This direction is taking shape. It will appear here when it’s ready.</p>
					</div>{/if}
				<div class="concept-heading">
					<h2><span>{concept.id}</span>{concept.name}</h2>
					{#if concept.ready}<button
							class="save"
							class:saved={saved.includes(concept.id)}
							onclick={() => toggleSaved(concept.id)}
							aria-pressed={saved.includes(concept.id)}
							aria-label={`${saved.includes(concept.id) ? 'Remove' : 'Add'} ${concept.name} ${saved.includes(concept.id) ? 'from' : 'to'} shortlist`}
							>{#if saved.includes(concept.id)}<Check size={16} />{:else}<Bookmark
									size={16}
								/>{/if}<span>{saved.includes(concept.id) ? 'Saved' : 'Shortlist'}</span></button
						>{/if}
				</div>
				{#if concept.ready}<p class="thesis">{concept.thesis}</p>
					<details>
						<summary>Design & interaction notes</summary>
						<p>{concept.why}</p>
						<p>{concept.interaction}</p>
					</details>{/if}
			</article>
		{/each}
	</div>
</main>

<style>
	.studio {
		width: min(calc(100% - 64px), 1600px);
		margin: auto;
		padding-block: 64px 100px;
	}
	.studio-heading {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 40px;
		margin-bottom: 48px;
	}
	h1 {
		font-family: var(--font-display);
		font-size: clamp(45px, 6vw, 76px);
		line-height: 1;
		letter-spacing: -0.04em;
		margin: 0 0 22px;
	}
	.studio-heading p {
		font-size: 15px;
		line-height: 1.8;
		color: var(--site-muted);
		margin: 0;
	}
	.studio-heading .progress {
		font-size: 12px;
		white-space: nowrap;
	}
	.toolbar {
		position: sticky;
		top: 72px;
		z-index: 10;
		background: var(--site-paper);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
		padding: 16px 0;
		border-top: 1px solid var(--site-line);
		border-bottom: 1px solid var(--site-line);
		margin-bottom: 30px;
	}
	.filters,
	.viewport {
		display: flex;
		gap: 6px;
	}
	.toolbar button {
		display: flex;
		align-items: center;
		gap: 10px;
		min-height: 42px;
		padding: 9px 14px;
		font-size: 13px;
		border-radius: 6px;
		color: var(--site-muted);
		background: transparent;
	}
	.toolbar button.active {
		background: var(--site-raised);
		color: var(--site-ink);
	}
	.filters button span {
		font-size: 11px;
		color: var(--site-muted);
		font-variant-numeric: tabular-nums;
	}
	.concept-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 55px 32px;
	}
	.concept {
		scroll-margin-top: 155px;
	}
	.concept-grid.mobile-previews {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	.preview-link {
		display: block;
		position: relative;
		text-decoration: none;
		overflow: hidden;
		border: 1px solid var(--site-line);
		border-radius: 3px;
	}
	.preview {
		position: relative;
		width: 100%;
		overflow: hidden;
		background: #111;
	}
	iframe {
		position: absolute;
		inset: 0;
		width: var(--frame-width);
		height: var(--frame-height);
		max-width: none;
		border: 0;
		transform: scale(var(--preview-scale, 0.4));
		transform-origin: top left;
		pointer-events: none;
	}
	.open-affordance {
		position: absolute;
		right: 14px;
		bottom: 14px;
		padding: 10px 14px;
		display: flex;
		align-items: center;
		gap: 20px;
		background: #f0ede5;
		color: #151719;
		font-size: 12px;
		opacity: 0;
		transform: translateY(5px);
		transition:
			opacity 150ms,
			transform 150ms;
	}
	.preview-link:hover .open-affordance,
	.preview-link:focus-visible .open-affordance {
		opacity: 1;
		transform: translateY(0);
	}
	.concept-heading {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 16px;
		margin-top: 20px;
	}
	h2 {
		display: flex;
		align-items: baseline;
		gap: 13px;
		font-family: var(--font-display);
		font-size: 24px;
		line-height: 1.2;
		letter-spacing: -0.025em;
		margin: 0;
	}
	h2 > span {
		font-family: var(--font-body);
		color: var(--site-muted);
		font-size: 11px;
		letter-spacing: 0;
	}
	.save {
		display: flex;
		align-items: center;
		gap: 7px;
		padding: 5px 0 10px 8px;
		background: transparent;
		font-size: 11px;
		color: var(--site-muted);
		flex-shrink: 0;
		min-height: 34px;
	}
	.save.saved {
		color: var(--site-accent);
	}
	.thesis {
		color: var(--site-muted);
		font-size: 13px;
		line-height: 1.7;
		max-width: 65ch;
		margin: 13px 0;
	}
	details {
		font-size: 12px;
		line-height: 1.75;
		color: var(--site-muted);
	}
	summary {
		cursor: pointer;
		width: fit-content;
		padding: 5px 0;
		color: var(--site-ink);
	}
	details p {
		max-width: 65ch;
		margin-top: 12px;
	}
	.pending-preview {
		aspect-ratio: 1.44;
		background: var(--site-raised);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
		padding: 30px;
	}
	.pending-preview > span {
		font-family: var(--font-display);
		font-size: 60px;
		color: var(--site-muted);
	}
	.pending-preview p {
		font-size: 12px;
		color: var(--site-muted);
		text-align: center;
		max-width: 28ch;
		line-height: 1.7;
	}
	.pending h2 {
		color: var(--site-muted);
	}
	.empty,
	.notice {
		font-size: 16px;
		color: var(--site-muted);
		padding-block: 40px;
		line-height: 1.7;
	}
	@media (max-width: 1000px) {
		.concept-grid {
			gap: 42px 22px;
		}
		.concept-grid.mobile-previews {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		h2 {
			font-size: 20px;
		}
		.save span {
			display: none;
		}
	}
	@media (max-width: 700px) {
		.toolbar {
			top: 68px;
		}
	}
	@media (max-width: 650px) {
		.studio {
			width: calc(100% - 40px);
			padding-block: 40px 70px;
		}
		.studio-heading {
			display: block;
			margin-bottom: 30px;
		}
		.studio-heading .progress {
			margin-top: 20px;
		}
		.studio-heading p {
			font-size: 13px;
		}
		.toolbar {
			top: 68px;
			align-items: start;
			flex-direction: column;
			gap: 6px;
		}
		.filters {
			flex-wrap: wrap;
		}
		.toolbar button {
			padding: 8px 10px;
			font-size: 11px;
			gap: 7px;
		}
		.concept-grid,
		.concept-grid.mobile-previews {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		.open-affordance {
			opacity: 1;
			transform: none;
			padding: 7px 10px;
			font-size: 10px;
			right: 8px;
			bottom: 8px;
		}
		.save span {
			display: inline;
		}
		h2 {
			font-size: 23px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.open-affordance {
			transition: none;
			transform: none;
		}
	}
</style>
