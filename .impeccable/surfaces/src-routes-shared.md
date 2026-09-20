---
version: 1
slug: src-routes-shared
primary_target: src/routes/+layout.svelte
related_targets:
  - src/lib/ui/header/header.svelte
  - src/lib/components/site/Footer.svelte
  - src/routes/+error.svelte
  - src/lib/components/site/Meta.svelte
  - src/lib/assets/favicon.svg
  - scripts/generate-social-card.mjs
---

# Shared shell and recovery

The shared shell carries the approved production palette, self-hosted fonts,
identity link, project/personal anchors, Writing link, skip link, and footer.
The header sits over the homepage hero and enters normal flow elsewhere. Compact
navigation prioritizes Projects and Writing; all homepage sections remain in the
continuous reading flow.

Recovery uses a large lilac heading, a plain explanation, and a home link. Numeric
HTTP status remains in the response and document title; it is not a decorative
standalone eyebrow. Error pages use `noindex`.

Metadata uses the configured `https://raygen.dev/` origin, per-page canonical URLs,
a matching favicon, and the locally generated 1200 × 630 social preview. The
preview retains the actual SERV0 image, layered name, and embedded provenance.
RSS is discoverable from the document head and Writing page.

Keyboard focus, selection, scrollbars, reduced motion, and the page ground inherit
[DESIGN.md](../../DESIGN.md). Four viewport captures verify the current error
surface, and cross-route/fragment navigation checks cover the shared shell.
See `../review/production-26/error-confirmation.json` and
[review status](../review/status.md). No deployment was requested or performed.
