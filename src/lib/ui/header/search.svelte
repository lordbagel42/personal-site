<script lang="ts">
	import { resolve } from '$app/paths';
	import { Command, Dialog } from 'bits-ui';

	let open = $state(false);
	let searchInput: HTMLInputElement | null = $state(null);
	const destinations = [
		{ label: 'Home', detail: 'Raygen Rupe', hash: '', keywords: ['top'] },
		{
			label: 'About',
			detail: 'Engineering & Hack Club',
			hash: 'about',
			keywords: ['engineer', 'raygen', 'hack club']
		},
		{
			label: 'Things I’ve made',
			detail: 'SERV0, DAVID & Stardance',
			hash: 'work',
			keywords: ['work', 'projects', 'portfolio', 'serv0', 'david', 'stardance']
		},
		{
			label: 'Say hello',
			detail: 'Email & elsewhere',
			hash: 'contact',
			keywords: ['contact', 'hello', 'connect']
		}
	];

	function handleKeydown(event: KeyboardEvent) {
		if (event.isComposing || event.repeat) return;
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<Dialog.Root bind:open>
	<Dialog.Trigger
		class="site-command-trigger"
		aria-label="Search navigation (Control or Command K)"
		title="Jump to a section · ⌘ / Ctrl K"
	>
		<svg
			width="17"
			height="17"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.6"
			aria-hidden="true"
		>
			<circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 4.5 4.5" stroke-linecap="round" />
		</svg><span class="shortcut">K</span>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="site-command-overlay" />
		<Dialog.Content
			class="site-command-dialog"
			onOpenAutoFocus={(event) => {
				event.preventDefault();
				searchInput?.focus();
			}}
		>
			<div class="palette-heading">
				<Dialog.Title class="site-command-title">Jump to</Dialog.Title>
				<Dialog.Close class="site-command-close" aria-label="Close navigation search"
					>esc</Dialog.Close
				>
			</div>
			<Dialog.Description class="site-command-description"
				>Search the sections of this site.</Dialog.Description
			>
			<Command.Root class="site-command-root" loop>
				<div class="input-wrap">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						aria-hidden="true"
					>
						<circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 4.5 4.5" stroke-linecap="round" />
					</svg>
					<Command.Input
						bind:ref={searchInput}
						class="site-command-input"
						placeholder="Search sections…"
						aria-label="Search pages and sections"
					/>
				</div>
				<Command.List class="site-command-list" aria-label="Pages and sections">
					<Command.Viewport>
						<Command.Empty class="site-command-empty"
							>No sections found. Try “work”, “about”, or “contact”.</Command.Empty
						>
						{#each destinations as destination (destination.label)}
							<Command.LinkItem
								class="site-command-item"
								value={destination.label}
								keywords={destination.keywords}
								href={`${resolve('/')}${destination.hash ? `#${destination.hash}` : ''}`}
								onSelect={() => (open = false)}
							>
								<span class="destination-copy"
									><strong>{destination.label}</strong><span>{destination.detail}</span></span
								>
							</Command.LinkItem>
						{/each}
					</Command.Viewport>
				</Command.List>
			</Command.Root>
			<div class="palette-footer">
				<span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span><span><kbd>↵</kbd> Open</span>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>

<style>
	:global(.site-command-trigger) {
		display: flex;
		height: 38px;
		align-items: center;
		gap: 11px;
		border: 1px solid var(--site-line, #353939);
		border-radius: 6px;
		padding: 0 10px;
		background: transparent;
		color: var(--site-muted, #a5aaa5);
		cursor: pointer;
		transition:
			background 180ms ease,
			border-color 180ms ease;
	}
	:global(.site-command-trigger:hover) {
		border-color: var(--site-ink, #eae7e0);
		background: var(--site-ink, #eae7e0);
		color: var(--site-paper, #181a1b);
	}
	:global(.site-command-trigger:focus-visible),
	:global(.site-command-close:focus-visible) {
		outline: 2px solid var(--site-accent, #c2d6c8);
		outline-offset: 4px;
	}
	.shortcut {
		font:
			11px ui-monospace,
			monospace;
	}
	:global(.site-command-overlay) {
		position: fixed;
		inset: 0;
		z-index: 100;
		background: #0b0c0dc2;
	}
	:global(.site-command-dialog) {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 101;
		width: min(520px, calc(100% - 32px));
		max-height: calc(100dvh - 40px);
		overflow-y: auto;
		border: 1px solid var(--site-line, #353939);
		border-radius: 6px;
		padding: 28px;
		background: var(--site-raised, #202324);
		color: var(--site-ink, #eae7e0);
		transform: translate(-50%, -50%);
	}
	.palette-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}
	:global(.site-command-title) {
		margin: 0;
		font-family: var(--font-display);
		font-size: 22px;
		font-weight: 500;
		letter-spacing: -0.02em;
	}
	:global(.site-command-close) {
		border: 1px solid var(--site-line, #353939);
		border-radius: 5px;
		padding: 5px 8px;
		background: transparent;
		color: inherit;
		font:
			11px ui-monospace,
			monospace;
		cursor: pointer;
	}
	:global(.site-command-close:hover) {
		background: var(--site-ink, #eae7e0);
		color: var(--site-paper, #181a1b);
	}
	:global(.site-command-description) {
		margin: 5px 0 24px;
		color: var(--site-muted, #a5aaa5);
		font-size: 13px;
	}
	.input-wrap {
		display: flex;
		align-items: center;
		gap: 12px;
		border-bottom: 1px solid var(--site-line, #353939);
		padding: 0 2px 15px;
	}
	.input-wrap:focus-within {
		border-bottom-color: var(--site-accent, #c2d6c8);
	}
	:global(.site-command-input) {
		width: 100%;
		min-width: 0;
		border: 0;
		padding: 7px 0;
		background: transparent;
		color: inherit;
		font: inherit;
		font-size: 15px;
		caret-color: var(--site-accent, #c2d6c8);
		outline: none;
	}
	:global(.site-command-input::placeholder) {
		color: var(--site-muted, #a5aaa5);
	}
	:global(.site-command-list) {
		max-height: 360px;
		overflow-y: auto;
		padding-block: 12px;
	}
	:global(.site-command-item) {
		display: flex;
		align-items: center;
		gap: 16px;
		border-radius: 4px;
		padding: 15px 13px;
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		outline: none;
	}
	:global(.site-command-item[aria-selected='true']),
	:global(.site-command-item:hover) {
		background: var(--site-ink, #eae7e0);
		color: var(--site-paper, #181a1b);
	}
	:global(.site-command-item[aria-selected='true']) .destination-copy > span,
	:global(.site-command-item:hover) .destination-copy > span {
		color: #4d5551;
	}
	:global(.site-command-item:focus-visible) {
		outline: 2px solid var(--site-accent, #c2d6c8);
		outline-offset: -2px;
	}
	.destination-copy {
		display: grid;
		gap: 2px;
	}
	.destination-copy strong {
		font-size: 15px;
		font-weight: 600;
	}
	.destination-copy > span {
		color: var(--site-muted, #a5aaa5);
		font-size: 12px;
	}
	:global(.site-command-empty) {
		padding: 35px 12px;
		color: var(--site-muted, #a5aaa5);
		font-size: 14px;
		text-align: center;
	}
	.palette-footer {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid var(--site-line, #353939);
		padding-top: 16px;
		color: var(--site-muted, #a5aaa5);
		font-size: 11px;
	}
	.palette-footer kbd {
		margin-right: 4px;
		color: var(--site-ink, #eae7e0);
		font:
			12px ui-monospace,
			monospace;
	}
	@media (max-width: 700px) {
		:global(.site-command-trigger) {
			width: 42px;
			height: 42px;
			justify-content: center;
		}
		.shortcut {
			display: none;
		}
		:global(.site-command-dialog) {
			padding: 22px;
		}
	}
	@media (max-width: 379px) {
		:global(.site-command-trigger) {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		:global(.site-command-trigger) {
			transition: none;
		}
	}
</style>
