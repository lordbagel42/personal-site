<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, Layers2, RotateCcw } from '@lucide/svelte';

	let storyElement: HTMLElement;
	let insideBeat: HTMLDivElement;
	let enhanced = $state(false);
	let scrollReveal = $state(0);
	let manualReveal = $state<number | null>(null);
	const reveal = $derived(manualReveal ?? (enhanced ? scrollReveal : 0));
	const inside = $derived(reveal >= 0.5);

	function togglePanels() {
		manualReveal = inside ? 0 : 1;
	}

	onMount(() => {
		const motionQuery = window.matchMedia(
			'(min-width: 821px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)'
		);
		let frame = 0;

		function measure() {
			frame = 0;
			if (!enhanced || !storyElement || !insideBeat) return;
			const bounds = storyElement.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			if (bounds.top > viewportHeight || bounds.bottom < 0) return;
			const distance = viewportHeight * 0.66 - insideBeat.getBoundingClientRect().top;
			const range = Math.min(440, viewportHeight * 0.48);
			const progress = Math.max(0, Math.min(1, distance / range));
			// A smooth midpoint keeps the change from feeling like a mechanical wipe.
			scrollReveal = progress * progress * (3 - 2 * progress);
		}

		function scheduleMeasure() {
			if (!frame) frame = window.requestAnimationFrame(measure);
		}

		function updateMotionPreference() {
			enhanced = motionQuery.matches;
			scheduleMeasure();
		}

		updateMotionPreference();
		window.addEventListener('scroll', scheduleMeasure, { passive: true });
		window.addEventListener('resize', scheduleMeasure, { passive: true });
		motionQuery.addEventListener('change', updateMotionPreference);

		return () => {
			window.cancelAnimationFrame(frame);
			window.removeEventListener('scroll', scheduleMeasure);
			window.removeEventListener('resize', scheduleMeasure);
			motionQuery.removeEventListener('change', updateMotionPreference);
		};
	});
</script>

<section
	class="printer-story"
	class:enhanced
	class:manual={manualReveal !== null}
	aria-labelledby="printer-story-title"
	bind:this={storyElement}
	style={`--inside: ${reveal}; --outside-cut: ${reveal * 100}%; --inside-cut: ${(1 - reveal) * 100}%; --inside-opacity: ${Math.min(1, reveal * 3)};`}
>
	<div class="assembly-column">
		<figure class="assembly">
			<div
				class="render"
				role="img"
				aria-label={inside
					? 'SERV0 with its panels removed, revealing the frame, belts, servo motors, and toolhead.'
					: 'SERV0, a compact 3D printer with steel panels and turquoise printed parts.'}
			>
				<img
					class="interior"
					src="/projects/serv0-open.png"
					alt=""
					width="2547"
					height="3296"
					decoding="async"
				/>
				<img
					class="exterior"
					src="/projects/serv0.png"
					alt=""
					width="2547"
					height="3296"
					decoding="async"
				/>
			</div>
			<figcaption>
				<div class="assembly-actions">
					<button class="inspect-button" onclick={togglePanels}>
						<Layers2 size={17} aria-hidden="true" />
						{inside ? 'Put the panels back' : 'Look inside'}
					</button>
					{#if manualReveal !== null && enhanced}
						<button class="follow-button" onclick={() => (manualReveal = null)}>
							<RotateCcw size={14} aria-hidden="true" /> Follow the story
						</button>
					{/if}
				</div>
				<span class="render-caption">SERV0, in Onshape.</span>
			</figcaption>
		</figure>
	</div>

	<div class="narrative">
		<div class="story-beat first-beat">
			<div class="beat-copy">
				<h2 id="printer-story-title">I build the<br />machines, too.</h2>
				<p>
					I love building 3D printers. SERV0 is a compact CoreXY I designed in Onshape, with servo
					motors and steel panels.
				</p>
			</div>
		</div>
		<div class="story-beat inside-beat" bind:this={insideBeat}>
			<div class="beat-copy">
				<h3>A look inside<br /><span>SERV0.</span></h3>
				<p>
					Take the panels off and you can see how the motors, belts, and toolhead fit together.
					SERV0 also uses CPAP cooling.
				</p>
				<a
					class="project-link"
					href="https://github.com/lordbagel42/Serv0"
					target="_blank"
					rel="noreferrer"
				>
					The whole build is on GitHub <ArrowUpRight size={18} aria-hidden="true" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.printer-story {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
		gap: clamp(40px, 6vw, 100px);
		color: var(--site-ink, #eae7e0);
		padding-block: 48px;
	}

	.assembly-column {
		min-width: 0;
	}

	.assembly {
		margin: 0;
	}

	.render {
		position: relative;
		height: clamp(430px, 62vh, 560px);
		isolation: isolate;
	}

	.render img {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		user-select: none;
		transform: translate3d(calc(var(--inside) * -8px), calc(var(--inside) * -6px), 0)
			scale(calc(1 + var(--inside) * 0.015));
	}

	.exterior {
		clip-path: inset(0 var(--outside-cut) 0 0);
	}

	.interior {
		clip-path: inset(0 0 0 var(--inside-cut));
		opacity: var(--inside-opacity);
	}

	.manual .render img {
		transition:
			clip-path 700ms cubic-bezier(0.16, 1, 0.3, 1),
			opacity 500ms ease-out,
			transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	figcaption {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 13px;
		padding-top: 24px;
	}

	.assembly-actions {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 8px 18px;
		min-height: 44px;
	}

	.inspect-button,
	.follow-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		min-height: 44px;
		padding: 8px 0;
		border: 0;
		background: transparent;
		color: var(--site-accent, #b9dbcc);
		font: inherit;
		font-size: 14px;
		cursor: pointer;
		text-decoration: underline;
		text-underline-offset: 5px;
		text-decoration-color: transparent;
		transition: text-decoration-color 150ms ease-out;
	}

	.follow-button {
		font-size: 12px;
		color: var(--site-muted, #a5aaa5);
	}

	.render-caption {
		color: var(--site-muted, #a5aaa5);
		font-size: 12px;
	}

	.narrative {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 60px;
	}

	.beat-copy {
		max-width: 440px;
	}

	h2,
	h3 {
		margin: 0;
		font-family: var(--font-display, sans-serif);
		font-size: clamp(40px, 4.8vw, 66px);
		font-weight: 500;
		line-height: 1.06;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}

	h3 {
		font-size: clamp(36px, 4.1vw, 58px);
	}

	h3 span {
		color: var(--site-accent, #b9dbcc);
	}

	p {
		max-width: 38ch;
		margin: 27px 0 0;
		color: var(--site-muted, #a5aaa5);
		font-size: 17px;
		line-height: 1.8;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		min-height: 44px;
		margin-top: 24px;
		color: var(--site-accent, #b9dbcc);
		font-size: 14px;
		line-height: 1.5;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 5px;
		transition: text-decoration-color 150ms ease-out;
	}

	button:focus-visible,
	a:focus-visible {
		outline: 2px solid var(--site-accent, #b9dbcc);
		outline-offset: 6px;
	}

	.enhanced .assembly {
		position: sticky;
		top: max(88px, calc(50vh - 330px));
	}

	.enhanced .narrative {
		gap: 0;
	}

	.enhanced .story-beat {
		display: flex;
		align-items: center;
		min-height: clamp(620px, 83vh, 800px);
	}

	.enhanced .inside-beat {
		padding-bottom: 12vh;
	}

	@media (hover: hover) {
		.inspect-button:hover,
		.follow-button:hover,
		.project-link:hover {
			text-decoration-color: currentColor;
		}
	}

	@media (max-width: 1050px) {
		.printer-story {
			gap: 40px;
		}

		p {
			font-size: 16px;
		}
	}

	@media (max-width: 820px) {
		.printer-story {
			grid-template-columns: 1fr;
			gap: 43px;
			padding-block: 24px 48px;
		}

		.assembly {
			max-width: 560px;
			margin-inline: auto;
		}

		.render {
			height: clamp(350px, 70vw, 510px);
		}

		.narrative {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: start;
			gap: 36px;
		}

		h2,
		h3 {
			font-size: 38px;
		}

		p {
			margin-top: 20px;
			font-size: 15px;
		}

		figcaption {
			gap: 5px;
			padding-top: 16px;
		}
	}

	@media (max-width: 560px) {
		.printer-story {
			gap: 32px;
		}

		.narrative {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		h2 {
			font-size: clamp(39px, 10vw, 52px);
		}

		h3 {
			font-size: 34px;
		}

		h3 br {
			display: none;
		}

		h3 span::before {
			content: ' ';
		}

		p {
			max-width: 42ch;
			margin-top: 17px;
		}

		.project-link {
			margin-top: 15px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.render img {
			transform: none;
			transition: none;
		}
	}
</style>
