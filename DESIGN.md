---
name: Raygen Rupe — A Hand in the Making
description: An aubergine personal portfolio with oversized lettering, real machines, and a generous reading rhythm.
colors:
  ink: '#140f19'
  cream: '#f0ecdf'
  lilac: '#c6addc'
  soft: '#c5baca'
  line: '#524657'
  raised: '#27202f'
  community: '#372740'
  community-line: '#746080'
  community-muted: '#cdbbd5'
  control-line: '#8d789e'
  code-block: '#211a29'
  inline-code: '#2b2235'
typography:
  display:
    fontFamily: 'Archivo, sans-serif'
    fontSize: 'clamp(140px, 19.5vw, 380px)'
    fontWeight: 850
    lineHeight: 0.78
    letterSpacing: '-0.04em'
  headline:
    fontFamily: 'Archivo, sans-serif'
    fontSize: 'clamp(58px, 6.8vw, 104px)'
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.035em'
  title:
    fontFamily: 'Archivo, sans-serif'
    fontSize: '43px'
    fontWeight: 550
    lineHeight: 1.05
    letterSpacing: '-0.035em'
  body:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.7
  reading:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '18px'
    fontWeight: 400
    lineHeight: 1.85
  navigation:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '12px'
    fontWeight: 650
    lineHeight: 1.7
  action:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '12px'
    fontWeight: 400
    lineHeight: 1.4
rounded:
  square: '0'
  inline-code: '3px'
  code-block: '4px'
spacing:
  page-wide: '42px'
  page-medium: '30px'
  page-small: '22px'
  narrative-gap: '25px'
  story-row: '58px'
components:
  panel-toggle:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.cream}'
    typography: '{typography.action}'
    rounded: '{rounded.square}'
    padding: '15px 20px'
  panel-toggle-hover:
    backgroundColor: '{colors.lilac}'
    textColor: '{colors.ink}'
  navigation:
    textColor: '{colors.cream}'
    typography: '{typography.navigation}'
    padding: '27px 42px'
  project-record:
    textColor: '{colors.soft}'
    padding: '23px 0 0'
  story-row:
    backgroundColor: '{colors.community}'
    textColor: '{colors.cream}'
    padding: '58px 0'
  writing-empty:
    textColor: '{colors.soft}'
    padding: '46px 0 58px'
  code-block:
    backgroundColor: '{colors.code-block}'
    textColor: '{colors.cream}'
    rounded: '{rounded.code-block}'
    padding: '25px 28px'
---

# Design System: Raygen Rupe

## Overview

**Creative North Star: "A Hand in the Making"**

Aubergine fields, cream lettering, and lilac emphasis give Raygen's real machines
room to feel large and tangible. Archivo supplies the broad, tightly set display
voice; Manrope keeps the personal writing open and conversational. Original
project renders and official community artwork carry the detail and color.

Scale, overlap, and changes in section tone create the identity. Spacious reading
sections connect machines, software, and people without turning the site into a
uniform collection of cards. Motion responds to scrolling or a direct action;
content remains readable before enhancement.

**Key Characteristics:**

- Oversized display lettering balanced by direct, personal copy.
- Dark purple fields, cream text, and lilac emphasis.
- Real project imagery and unmodified community branding.
- Open, asymmetric compositions with thin dividers.
- Bounded functional motion and a complete static reading flow.

This record replaces the rejected charcoal/sage system under the user's explicit
approval of refined concept 26. It is extracted from the implemented Svelte site.
The [production brief](.impeccable/PRODUCTION-26-BRIEF.md) records that approval;
[the homepage surface brief](.impeccable/surfaces/src-routes-page-svelte.md) owns
its particular composition. The other archived concepts are historical references.

## Colors

The palette stays within a warm purple family while the authentic artwork keeps
its own colors. The frontmatter owns the exact values.

### Primary

- **Lilac** (`lilac`): the foreground surname, selected major headings, link
  emphasis, focus outlines, text selection, and active navigation.

### Neutral

- **Aubergine ink** (`ink`): the page ground and resting panel control.
- **Warm cream** (`cream`): primary text and display lettering.
- **Soft lavender** (`soft`): supporting paragraphs, descriptions, and metadata.
- **Quiet purple rule** (`line`): general dividers and article boundaries.
- **Raised aubergine** (`raised`): the personal letter and article table headers.
- **Community purple** (`community`): the full-width community chapter, with
  `community-line` dividers and `community-muted` factual metadata.
- **Control lavender** (`control-line`): the visible outline of the panel control.
- **Code surfaces** (`code-block`, `inline-code`): readable code inside articles.

The project's individual image backplates belong to the homepage composition;
they do not establish additional general-purpose interface accents. Compatibility
aliases such as `--site-accent` resolve to this palette. Unused chart, sidebar,
and legacy component tokens do not define the production identity.

**The Original Artwork Rule.** Preserve the colors and proportions of real project
renders and official community assets.

## Typography

**Display Font:** Archivo, with sans-serif fallback. **Body Font:** Manrope, with
sans-serif fallback. Both are self-hosted variable fonts. Monospace is reserved
for article code and keyboard notation.

The system pairs tightly tracked, compact display lines with relaxed body leading.
The frontmatter records the hero first-name, projects heading, community story
title, base body, article reading, navigation, and panel-action roles. It is a set
of observed roles, not a uniform modular scale.

- **Display:** the homepage name uses heavy lettering; the foreground surname has
  its own scale (`clamp(180px, 23.8vw, 440px)`) and leading (`0.79`). These extreme
  sizes belong to the identity composition, not ordinary page headings.
- **Headline:** section headings vary with their composition, generally at
  weights (`550–600`) with leading near (`1`). The writing index title uses weight
  (`650`) and size (`clamp(66px, 8.5vw, 130px)`).
- **Title:** story titles use the smaller Archivo role; project titles vary by
  hierarchy, with current SERV0 larger than companion projects.
- **Body:** ordinary interface copy uses the base role. Personal narrative copy
  uses (`19–20px`) at (`1.8`) leading, reducing to (`18px`) on smaller screens.
  Project descriptions use (`15–16px`) at (`1.75`) leading.
- **Reading:** the article body has a maximum width of (`730px`); its size reduces
  to (`16px`) below (`600px`). The article heading container is wider (`1040px`).
- **Navigation and actions:** compact mixed-case text accompanies explicit links
  and SVG arrows. Small text serves navigation, captions, or real metadata.

## Layout

The shared page inset is (`42px`), reducing to (`30px`) at (`1100px`) and (`22px`)
at (`720px`). The homepage uses the available width. The writing index is capped
at (`1600px`), while articles use narrower reading containers.

Repeated narrative sections pair a (`43% / 57%`) title/body split, changing to
(`40% / 60%`) below (`1100px`) and a single reading column below (`720px`). Wide
section starts use approximately (`92–112px`) of space; compact sections use
approximately (`54–67px`). Thin rules and tonal chapter changes provide pauses.

The project area preserves its asymmetric hierarchy. It reorganizes at (`850px`)
and becomes a single sequence at (`600px`). The homepage's layered name and
machine have their own authored breakpoints; preserve their overlap and clipping
when adapting the surface. Do not generalize that hero positioning to reading
pages. The supported minimum document width is (`320px`).

## Elevation & Depth

Production surfaces are flat. Depth comes from the real machine render, the
front/back name layers, purple section fields, and dividers. There are no interface
box shadows or hero drop shadows in the implemented system. Hover responses move
artwork or small SVG arrows; they do not lift cards on artificial shadows.

## Shapes

Sections, image frames, and the outlined panel control use square corners. Project
renders retain their actual silhouette and proportions inside rectangular image
frames; intentional hero cropping is part of that composition. Article inline
code and keyboard notation have small corners, with slightly larger corners on
code blocks. Those reading utilities do not establish rounded portfolio cards.

## Components

### Panel control and machine reveal

The outlined control uses the page ground, cream text, a visible lavender stroke,
and a minimum height of (`48px`). Hover inverts to lilac with ink text. Its native
button exposes `aria-pressed`; the SVG plus rotates when the panels are removed.
Two aligned original renders provide a clip-path wipe (`900ms`) using
`cubic-bezier(0.16, 1, 0.3, 1)`. The control icon uses (`600ms`) with the same curve.

### Links and navigation

The shared header is absolute over the homepage hero and in normal flow on other
pages. It is not sticky. Identity and navigation links have (`44px`) minimum
height. Hover and the current Writing state turn lilac; current navigation is
underlined. At (`720px`) the header omits My people; at (`360px`) it also omits
About me. Both sections remain in the homepage reading flow. The footer wraps
on narrow screens and retains Writing, GitHub, and Back to the top.

Text links use a fine underline with (`5px`) offset. The shared keyboard focus
outline is lilac (`2px`) with (`5px`) offset. A focus-revealed skip link reaches
the main content. Project and writing arrows respond to hover (`250ms`); linked
project images move slightly (`650ms`). No command palette, search field, or
mobile menu is part of the current production shell.

### Project and story records

Project records combine real imagery, a linked name, a plain description, and a
quiet repository row. Current-build status is functional content attached to
SERV0. Community stories use open title/body rows and section dividers. There is
no generic card treatment or decorative status-chip system.

### Writing and recovery

The current Writing page states that no posts exist, then offers project
exploration and RSS. Its heading, divided reading row, and follow links inherit
the same palette and typography. Error recovery uses a large lilac heading,
plain explanation, and a home link in the shared shell.

The implemented future article template uses underlined lilac links, quiet
bylines, a slim blockquote rule, dark code surfaces, and horizontally scrollable
code and tables. These source styles are documented for continuity; populated
writing and article-body layouts have not had visual review because there are
currently no published posts.

### Motion

The homepage applies small, bounded scroll changes to the name and assembly:
translation stops after one hero-height of travel, and the printer angle changes
from (`-7deg`) to (`-3deg`). Event-driven animation frames avoid a continuous
render loop. Reduced-motion preferences disable transitions and scroll drift;
the manual panel state still works. Cleanup removes listeners and scheduled frames.

**The Readable Without Motion Rule.** Keep identity, project links, and the full
personal story readable without JavaScript or animation.

## Do's and Don'ts

### Do:

- **Do** use aubergine, cream, and lilac consistently across shared surfaces.
- **Do** preserve authentic artwork, proportions, and adjacent provenance records.
- **Do** use scale, open space, tonal fields, and thin dividers to organize content.
- **Do** connect motion to scrolling or a meaningful direct action.
- **Do** retain keyboard access, reduced-motion behavior, and static readability.

### Don't:

- **Don't** treat the rejected charcoal/sage design or other archived concepts as current visual authority.
- **Don't** replace real machines or official community branding with invented artwork.
- **Don't** apply the oversized overlapping homepage name to ordinary reading content.
- **Don't** introduce a generic rounded-card grid or decorative badge system.
- **Don't** make essential content visibility depend on animation.
