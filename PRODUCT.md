# Raygen Rupe — personal portfolio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone Raygen shares the site with who wants to understand Raygen and their work.
The audience is broad; no narrower hiring or commercial audience has been specified.

## Product Purpose

A personal portfolio explaining Raygen's engineering, software, interests, and
community involvement, with a working home for future writing.

## Positioning

Raygen is an engineer, software developer, student, and maker whose core motivation
is making things and helping other people make things. They build 3D printers,
are very experienced in Onshape, know electronics, and pour heart and soul into
Hack Club daily.

## Capabilities and Constraints

Preserve the existing SvelteKit, Svelte 5, TypeScript, and Cloudflare build. Projects
and contact links must work. The site supports mobile, keyboard use, reduced
motion, and reading without JavaScript.

The homepage introduces the actual work first, then develops Raygen's personal
story, software contributions, makerspace teaching, robotics leadership, and
community involvement. Do not restore the removed claim that the printer enclosure
is part of its structure, or infer a partnership, services, or hiring pitch.

Writing is implemented at `/blog`, with an honest empty state. The mdsvex article
route, publication guard, post API, and RSS support future real writing. The three
starter Markdown examples are unpublished; their public URLs return 404. Do not
invent posts or publication dates.

## Current production state

Raygen approved the refined **26 — A Hand in the Making** and instructed:
“cool, looks good. build the full site to be stylized like htat.” This explicitly
supersedes the earlier unselected state and authorizes production integration.
The site is now implemented in Svelte using the approved prototype's oversized
cream RAYGEN / real SERV0 / lilac RUPE composition, dark-purple palette, functional
motion, and project-first narrative.

The shared navigation and footer, Writing empty state and future article styles,
error recovery, favicon, metadata, social preview, and RSS carry that system.
[DESIGN.md](DESIGN.md) and its [sidecar](.impeccable/design.json) describe the actual
production implementation. The [production brief](.impeccable/PRODUCTION-26-BRIEF.md)
records the scope. Deployment was not requested or performed in this work.

## Brand Commitments

- Name: Raygen Rupe. Role: engineer, with software, student, and community work visible.
- Mostly dark mode, explicitly requested and retained in approved concept 26.
- Actual project renders, avatar, and official Hack Club, Stardance, and Outpost assets.
- Personality comes from Raygen's real work, first-person writing, and useful interaction.
- The user's request for “animations, flow, talk about me” remains satisfied by a
  continuous personal narrative and meaningful panel inspection.
- Earlier AI-looking badges, slogans, decorative marks, abstract sculpture, and the
  static catalog treatment were rejected; the later approval establishes the current world.

## Evidence on Hand

- SERV0: https://github.com/lordbagel42/Serv0 — current CoreXY printer, servo motors,
  steel panels, CPAP cooling, and Onshape design.
- DAVID: https://github.com/lordbagel42/DAVID — earlier Delteron printer design.
- Monstrosity: earlier printer work represented by its real assembly render;
  ongoing status has not been established.
- Stardance: https://github.com/hackclub/stardance — contributions to hardware review
  tools; Raygen confirmed a two-week hardware-team internship.
- Public contact and socials: https://link.raygen.dev, recorded in `src/lib/portfolio.ts`.
- Original renders and avatar in `static/projects/`; provenance in
  [SOURCES.md](static/projects/SOURCES.md). Lossless production WebP versions retain
  the original decoded RGBA pixels; source PNGs remain available.
- The public résumé at https://rxresu.me/raygenrrupe/resume supplies One Stone
  makerspace teaching, Centennial VEX shop leadership, Outpost assistance, Stardance
  development, Svelte/TypeScript, public demonstrations, and Monstrosity. Source
  details and dates are in [.impeccable/directions/RESUME.md](.impeccable/directions/RESUME.md).
  These are self-reported facts; avoid unverified printer performance or superlatives.

## Product Principles

- Show the things Raygen actually makes and distinguish current work from earlier work.
- Keep identity and contribution understandable in personal, factual language.
- Preserve genuine project and community imagery.
- Make exploration useful: interaction should reveal something about the work.
- Connect the personal story and projects through motion with accessible alternatives.

## Design exploration record

The initial 25 concepts and second round of 15 remain at `/directions` as a
40-concept archive. The gallery's round views and browser-persisted shortlist
remain useful historical tools. They do not reopen the production selection.

Round two developed the user's favorites: Objects of Obsession, My Little Corner,
Lettershift, Made to Move, An Unfinished Thought, and Pen Down. The refinement of
26 brought projects directly after the hero, showed distinct real project images,
and labeled SERV0 as the current build. The user then approved that refinement for
the full site. [The working prototype](static/directions/26.html) and
[refinement captures](.impeccable/directions/review/26-projects/) remain the visual
authority behind the integration; the production code is the current implementation.

Historical records: [round one](.impeccable/directions/PROGRESS.md),
[round two](.impeccable/directions/ROUND-2-PROGRESS.md), and
[round-two brief](.impeccable/directions/BRIEF-ROUND-2.md).
