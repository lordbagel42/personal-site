---
version: 1
slug: src-routes-blog
primary_target: src/routes/blog/+page.svelte
related_targets:
  - src/routes/blog/posts/[...slug]/+page.svelte
  - src/routes/blog/posts/[...slug]/+page.server.ts
  - src/lib/server/posts.ts
  - src/markdown.css
  - src/lib/components/site/Meta.svelte
---

# Writing and articles

Mode: Read. Status: implemented in the approved production world. The actual public
state contains no posts; starter examples are explicitly unpublished.

## Direction contract

THESIS: A quiet home for the longer thoughts that grow around making things.

OWN-WORLD: Inherit Archivo and Manrope, aubergine, cream, lilac, the shared shell,
thin rules, and the generous reading rhythm from [DESIGN.md](../../DESIGN.md).
Use the visual world without reproducing the homepage's oversized machine overlap.

STORY: The current “An unfinished thought.” title leads to a truthful empty state,
a project link, and RSS. When real posts are published, a date/title/description
index leads to individual articles and clear return navigation.

FIRST VIEWPORT: A large two-line cream/lilac title and brief introduction. The
empty-state row states that writing is still taking shape without invented
publication dates or placeholder articles presented as Raygen's work.

FORM: Svelte pages and the existing mdsvex pipeline. Article headers are capped
at 1040px, with 730px body measure; responsive styles reduce type and stack the
byline. Markdown supports readable links, lists, blockquotes, code, tables,
media, footnotes, and details. Long code and tables scroll within the article.

## Publication and verification

Only explicit `published: true` posts with valid required metadata enter the
index, API, RSS, or public article route. Unpublished and missing slugs return 404. See [README.md](../../README.md) for the blog submodule persistence requirement.

The empty index was visually captured at 1440, 768, 390, and 320 px; browser checks
covered navigation and the project return link. API, RSS, and all three draft URL
guards passed. Future populated index rows and article bodies have source styling
but no visual verification yet, since there are no published posts. Verify them
with the first real article. Evidence: `../review/production-26/validation.json`.
