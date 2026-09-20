---
version: 1
slug: src-routes-page-svelte
primary_target: src/routes/+page.svelte
related_targets:
  - src/app.css
  - src/routes/+layout.svelte
  - src/lib/ui/header/header.svelte
  - src/lib/components/site/Footer.svelte
---

# Raygen's production homepage

Mode: Experience. Status: implemented from the explicitly approved refinement of
26 — A Hand in the Making. The user requested the full site in this style after
approving its clearer project presentation. This replaces the rejected narrative
homepage; its previous surface brief is superseded.

## Direction contract

THESIS: A hand in the making. Real machines and a large personal identity lead
into the software, learning, and people connected to Raygen's work.

OWN-WORLD: Aubergine ground, cream and lilac lettering, broad Archivo display,
conversational Manrope body, real project renders, and official community assets.
Open compositions, tonal section fields, thin dividers, and functional motion.
[DESIGN.md](../../DESIGN.md) holds the actual reusable tokens and rules.

STORY: The layered name and SERV0 introduce the maker. Projects follow immediately:
current SERV0 is dominant, with distinct earlier DAVID and Monstrosity work and
direct repository links. Stardance bridges to the personal letter and software
contributions; teaching, Outpost support, robotics leadership, Hack Club, and
contact complete the story.

FIRST VIEWPORT: Giant cream RAYGEN behind the actual SERV0 assembly, with lilac
RUPE in front. Keep the approved overlap and crop. Small direct navigation, a
first-person introduction, panel control, and a current-build strip make both the
person and project clear. The hero's geometry is specific to this surface.

FORM: Code-led Svelte integration of the approved working prototype at
`static/directions/26.html`. The reference captures are in
`../directions/review/26-projects/`; no new concept roll or generated comp is part
of this implementation. The `/directions` archive remains historical.

MOTION: A native `aria-pressed` control clips the exterior render to reveal the
aligned interior. Bounded scrolling shifts the name and changes assembly angle.
Transitions and scroll drift stop for reduced motion; the manual state remains
available. No-JavaScript reading retains identity, projects, and the complete
story. There is no pinned story scene, pointer-follow animation, or perpetual loop.

## Product truth

SERV0 is the current build. DAVID and Monstrosity are earlier work, without an
unverified claim that they are ongoing. Preserve source-supported project facts,
Raygen's own role descriptions, and the original art. Community branding does
not imply Raygen designed it. The removed structural-enclosure claim stays absent.

## Verification

Production captures and interaction evidence are in `../review/production-26/`.
The 1440, 768, 390, and 320 px checks cover image loading, fragment targets,
overflow, keyboard and pointer panel states, navigation, reduced motion, and
runtime errors. No-JavaScript reading was checked. Independent review found the
homepage faithful to the approved composition and project-first hierarchy.
See [review status](../review/status.md) for the current final-review state.
