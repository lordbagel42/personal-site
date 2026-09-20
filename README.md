# Raygen Rupe

A personal portfolio about making machines, writing software, and helping other
people make things. Built with Svelte 5, SvelteKit, TypeScript, Tailwind CSS, and
the Cloudflare adapter.

The production site implements **26 — A Hand in the Making**, approved after the
project-clarity refinement: oversized cream and lilac lettering around Raygen's
real SERV0 render, dark-purple sections, immediate project visibility, and a
personal story. This work has not been deployed.

## Development

Initialize the Markdown submodule when setting up a fresh checkout:

```sh
git submodule update --init --recursive
pnpm install
pnpm dev
```

The development site runs at [localhost:5173](http://localhost:5173).

```sh
pnpm check # Svelte and TypeScript diagnostics
pnpm build # Production build with the Cloudflare adapter
pnpm lint # Repository-wide Prettier and ESLint checks
pnpm preview # Build, then run the Cloudflare local preview
```

`pnpm deploy` builds and publishes with Wrangler when deployment is separately
requested and the Cloudflare account is configured. No deployment was performed
as part of this implementation.

## Site and source

- `/`: the layered name and interactive SERV0 hero, projects, personal letter,
  software contributions, community work, and contact links.
- `/blog`: Writing, currently an honest empty state with project and RSS links.
- `/blog/posts/<slug>`: the article template for explicitly published Markdown.
- `/api/posts` and `/rss.xml`: published writing from the same server-side source.
- Unknown and unpublished article URLs: themed error recovery with a real 404.
- `/directions`: the preserved 40-concept exploration archive.

Key implementation files:

- [`src/routes/+page.svelte`](src/routes/+page.svelte): the production homepage,
  aligned panel reveal, and bounded scroll composition.
- [`src/routes/+layout.svelte`](src/routes/+layout.svelte),
  [`header.svelte`](src/lib/ui/header/header.svelte), and
  [`Footer.svelte`](src/lib/components/site/Footer.svelte): the shared shell.
- [`src/app.css`](src/app.css): palette, self-hosted fonts, focus, and motion defaults.
- [`src/routes/blog/`](src/routes/blog/) and [`src/markdown.css`](src/markdown.css):
  Writing and article presentation.
- [`src/lib/server/posts.ts`](src/lib/server/posts.ts): publication filtering,
  metadata normalization, ordering, and RSS serialization.
- [`Meta.svelte`](src/lib/components/site/Meta.svelte) and
  [`src/lib/config.ts`](src/lib/config.ts): canonical URLs and social metadata.
- [`src/lib/portfolio.ts`](src/lib/portfolio.ts): profile and contact data.
- [`PRODUCT.md`](PRODUCT.md), [`DESIGN.md`](DESIGN.md), and
  [`.impeccable/design.json`](.impeccable/design.json): product facts and the current
  implemented design system, including token frontmatter and component previews.
- [Production brief](.impeccable/PRODUCTION-26-BRIEF.md) and
  [surface records](.impeccable/surfaces/): approved direction and surface behavior.

The previous landing components and command-search code are retained source;
they are not mounted by the current homepage or shared shell.

## Writing and publication

Markdown lives in `src/lib/blog-md/`, a Git submodule of
[lordbagel42/blog-md](https://github.com/lordbagel42/blog-md). Nested file paths map
directly to slugs: `notes/example.md` becomes `/blog/posts/notes/example`.

A post is public only when frontmatter contains the boolean `published: true`,
a nonempty string `title`, a string `description`, and a valid date string.
`categories` is an optional array of strings. Start drafts with `published: false`:

```yaml
---
title: A real post title
description: A short description of the actual article.
date: '2026-09-20'
categories:
  - Making
published: false
---
```

Change `published` only when the real article is ready. The writing index, API,
RSS, and article server guard share the publication rule. Dates are normalized
and entries sorted newest first. Missing or unpublished slugs return 404 before
article content is loaded. The current three starter examples remain in source
with `published: false`; there are no published posts.

**Submodule persistence:** writing lives in the separate `src/lib/blog-md/`
repository. Commit and push content changes there first, then commit the updated
submodule pointer in this repository. The pinned content revision keeps all three
starter examples unpublished. Use `git submodule update --init --recursive` after
cloning or pulling to check out the content revision the site expects.

Before publishing the first real article, visually check its populated index row
and article body, including code, images, tables, and narrow-screen overflow.
Those states are implemented but have not been visually exercised with published
content because the current site has none.

## Motion and artwork

The homepage layers two aligned original SERV0 renders. “Remove the panels” and
“Put the panels back” operate a clip-path wipe by pointer or keyboard. Ordinary
scrolling gently changes the assembly angle and lettering position. Animation is
bounded and event-driven, with listener and frame cleanup. Reduced motion removes
transitions and scroll drift. The server-rendered identity, projects, and story
remain readable without JavaScript. No runtime animation library is required.

Original project renders, the avatar, and official Hack Club, Stardance, and
Outpost assets are credited in [`static/projects/SOURCES.md`](static/projects/SOURCES.md)
and the [additional asset record](.impeccable/directions/NEW-ASSETS.md). The seven
production WebP images retain exact decoded RGBA pixels and embedded provenance;
the original PNGs remain. The conversion reduced the combined image size from
8.14 MB to 3.65 MB; see the [optimization report](.impeccable/review/production-26/asset-optimization.json).
Archivo and Manrope are self-hosted in `static/fonts/`, with their Open Font
License files alongside.

Regenerate the matching 1200 × 630 social preview with:

```sh
node scripts/generate-social-card.mjs
```

This requires `rsvg-convert` and `woff2_decompress`. It uses the local fonts and
original SERV0 PNG without network access, writes `static/social-card.svg` and
`static/social-card.png`, and preserves provenance metadata.

## Verification

[Production evidence](.impeccable/review/production-26/) covers the homepage,
Writing empty state, and error recovery at 1440, 768, 390, and 320 px. Checks passed
for overflow, images, fragments, pointer and keyboard panel operation, cross-page
navigation, reduced motion, no-JavaScript reading, draft 404 guards, the empty
published-post API, and RSS. The detector returned no findings. Svelte/TypeScript
diagnostics reported zero errors and warnings; scoped ESLint and Prettier checks
passed, and the Cloudflare production build completed. The build retains warnings
from `ins`/`mark` in an unpublished starter Markdown fixture.

The environment's pnpm/Corepack issue required direct local Node entry points for
the recorded checks, including:

```sh
node node_modules/@sveltejs/kit/svelte-kit.js sync
node node_modules/svelte-check/bin/svelte-check --tsconfig ./tsconfig.json
node node_modules/vite/bin/vite.js build
```

ESLint and Prettier were also run through their local Node entry points on changed
implementation files. This is scoped validation, not a claim that repository-wide
`pnpm lint` ran. See the [review status](.impeccable/review/status.md) for the
independent review and its limits.

## Design exploration archive

The [comparison gallery](http://localhost:5173/directions) preserves all 40
working proposals, preview images, notes, round views, and a browser-persisted
shortlist. Refined 26 is the selected production authority. The other concepts
remain historical alternatives, not a replacement for the current design system.

Prototypes live in `static/directions/NN.html`, with metadata in matching JSON
files. Refresh the gallery catalog after editing metadata:

```sh
node scripts/collect-directions.mjs
```

Historical records: [round one](.impeccable/directions/PROGRESS.md),
[round two](.impeccable/directions/ROUND-2-PROGRESS.md),
[26 refinement](.impeccable/directions/review/26-projects/), and
[sourced résumé facts](.impeccable/directions/RESUME.md). Archived technical and
visual reviews apply to their stated prototype scope.
