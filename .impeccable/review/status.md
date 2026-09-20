# Review status

## Approved production integration

Raygen explicitly approved refined **26 — A Hand in the Making** and requested
the full site in that style. The production Svelte homepage, shared shell,
Writing empty state, future article presentation, error recovery, favicon,
metadata, social preview, post API, and RSS are implemented. The previous
unselected/rejected design status is superseded. The user subsequently requested
publishing this work to GitHub. No direct Cloudflare deployment was requested or
performed.

The production visual authority is [the approved prototype](../../static/directions/26.html)
and [its refinement evidence](../directions/review/26-projects/). Current reusable
tokens and component rules are recorded in [DESIGN.md](../../DESIGN.md) and
[the schemaVersion 2 sidecar](../design.json). [PRODUCT.md](../../PRODUCT.md) and
[the surface records](../surfaces/) now describe the approved implementation.

## Evidence and limits

[Production validation](production-26/validation.json) covers desktop (1440 px),
tablet (768 px), mobile (390 px), and narrow (320 px). Homepage, Writing, and 404
captures passed checks for document overflow, broken images, fragment targets,
landmarks, and runtime errors. Pointer and keyboard panel operation, homepage
anchors, Writing navigation and return, error recovery, and reduced-motion
behavior passed at all four widths. No-JavaScript identity and project reading,
the empty published-post API, valid empty RSS, and all three unpublished starter
URL guards also passed. The [detector report](production-26/detector.json) is empty.

Svelte/TypeScript diagnostics returned zero errors and warnings. Scoped ESLint and
Prettier checks passed. The [production build](production-26/build.log) completed
with the Cloudflare adapter; `ins`/`mark` warnings remain in an unpublished starter
Markdown fixture. Validation used local Node CLI entry points due to the
environment's pnpm/Corepack issue; it does not imply repository-wide `pnpm lint` ran.

[Independent review](production-26/independent-review.md) found the hero, material,
palette, project-first hierarchy, personal story, Writing empty state, and
accessibility evidence consistent with the approved direction. Its initial
`fix` disposition named only stale persistence and a standalone 404 eyebrow.
The persistence files are now refreshed, and the parent implementation pass
removed that eyebrow and recaptured all four error views; see
[error confirmation](production-26/error-confirmation.json). The independent
reviewer's final verdict scored both repairs resolved with disposition `ship`.
That verdict covers the two listed fixes; the initial review retains its original
scope and evidence limits.

Future populated Writing rows and article bodies have not been visually reviewed
because no published posts exist. Verify those states when the first real article
is ready. No claim is made against an unseen quality card or a generated comp;
this was a code-led integration of an approved working prototype.

Seven lossless production WebP conversions preserve exact decoded RGBA pixels and
embedded provenance, reducing combined image bytes from 8.14 MB to 3.65 MB. Original
PNGs remain. See [the report](production-26/asset-optimization.json) and
[artwork sources](../../static/projects/SOURCES.md).

The three `published: false` starter edits belong to the blog Git submodule,
whose revision is pinned by the site repository. The [README](../../README.md)
records the content-first publication workflow and submodule checkout command.
Generated screenshots, build logs, raw résumé extraction, and local prototype
backups remain local; the small review reports and design records are versioned.

## Historical concept reviews

The `/directions` archive preserves all 40 working concepts, desktop/mobile
previews, comparison notes, two round views, and a combined browser-persisted
shortlist. Only refined 26 is current production authority.

- [26 project refinement](../directions/review/26-projects/): approved composition,
  immediate illustrated projects, SERV0 current-build label, and direct links.
  Its 1440/768/390/320 px checks and independent review passed within prototype scope.
- [Round-two record](../directions/ROUND-2-PROGRESS.md): 15 concepts, IDs 26–40,
  interaction evidence, source facts, and assets.
- [Review of 26–32](../directions/review/round2-independent-a.md) and
  [review of 33–40](../directions/review/round2-independent-b.md): concept comparison
  dispositions. The footer inset issue on 27 was repaired and reviewed again.
- [Concept captures and interactions](../directions/review/): desktop/mobile checks
  for all 15 round-two concepts and gallery validation for round counts, shortlist
  persistence, preview sizing, runtime errors, and overflow.
- [First-round record](../directions/PROGRESS.md): historical review of 01–25.

The user authorized installed Playwright tooling during the exploration. Earlier
records that mention unavailable browser review or pending permission are
historical and do not describe the completed production evidence.
