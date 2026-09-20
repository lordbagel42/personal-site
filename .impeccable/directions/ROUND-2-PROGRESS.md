# Round two: completed concepts

All 15 new working proposals, IDs 26–40, are complete. The catalog contains 40 of
40 concepts. The original 25 proposals and existing homepage are preserved. No
production direction is selected, and this round has not been deployed.

The user requested this round after preferring 06, 05, 11, 22, 21, and 23: enormous
type layered with real machines, midnight purple, typography and mechanical
interaction, an intimate letter, and a more refined plotting idea. The new work
also draws on the public résumé to give software, teaching, leadership, and peer
support substantive space alongside engineering and CAD.

## Browse and compare

The `/directions` gallery opens on the new 15. The first 25 remain available in
their own view, and the combined shortlist persists choices from both rounds in
this browser. Every concept has a standalone `static/directions/NN.html` prototype
and matching JSON metadata. The names and interaction summaries below follow
that metadata.

| ID  | Name                 | Working interaction                                                                                                                                                       |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | A Hand in the Making | Scroll subtly shifts the layered machine and name; a keyboard-accessible button reveals SERV0's aligned internal assembly.                                                |
| 27  | A Corner, Kept Open  | Native disclosures open machine stories and field notes on software, makerspace responsibility, and Outpost; navigation works without JavaScript.                         |
| 28  | All These Pieces     | Select artifacts or facet buttons to change the story preview; mouse and pen users can tug artifacts within a bounded area before they return.                            |
| 29  | Both Sides of Making | Physical and Digital controls change the opening machine emphasis and story, with arrow, Home, and End key support.                                                       |
| 30  | Room to Make         | A making/helping switch changes the headline, portrait and SERV0 composition, introduction, and reading link; keyboard navigation is supported.                           |
| 31  | A Life in the Making | Native margin-note disclosures annotate a personal letter; a three-machine selector changes the large image, project facts, and source link.                              |
| 32  | Drawn to Making      | A six-second sequence traces actual Archivo glyph contours and finishes with solid lettering; visitors can finish instantly, and reduced motion keeps the completed name. |
| 33  | In Other Words       | Typographic reels turn MAKE into CODE, SHOW, or HELP and reveal a related story; tabs support arrow, Home, and End keys.                                                  |
| 34  | A Small Motion       | Drag the crank joint, use its keyboard-accessible angle slider, or reset a slider-crank with exact rigid-rod geometry.                                                    |
| 35  | Still Becoming       | Ordinary scrolling changes sticky artwork and the active chapter on desktop; mobile places each illustration beside its story.                                            |
| 36  | The Good Loop        | Learn it, Make it, and Pass it on trace different triangle edges and change the artwork and context, with keyboard navigation.                                            |
| 37  | Open Rooms           | Sticky room navigation tracks ordinary scrolling; a keyboard-accessible selector switches among three machines and their stories.                                         |
| 38  | A Common Thread      | A native range control and four story stops move a marker along one continuous SVG path and link each facet to its chapter.                                               |
| 39  | A Few Ways In        | A keyboard-accessible typographic index changes the image, title, description, and chapter link through a brief page reveal.                                              |
| 40  | A Little More Myself | A keyboard-accessible comparison slider reveals SERV0's internals through the actual aligned render pair; anchors connect the remaining story.                            |

## Content and asset evidence

- [BRIEF-ROUND-2.md](BRIEF-ROUND-2.md) records the user's preferences, scope, and
  truth constraints. Each `NN.json` records that proposal's specific composition
  and implemented interaction.
- [RESUME.md](RESUME.md) records self-reported facts from the
  [public résumé](https://rxresu.me/raygenrrupe/resume), read September 19, 2026.
  The concepts include Svelte and TypeScript, Stardance software contributions,
  One Stone makerspace tooling and safety teaching, Centennial VEX shop leadership,
  and Outpost design/debugging and help-desk support. The separately confirmed
  two-week hardware internship is not treated as the entire June–September role.
- [NEW-ASSETS.md](NEW-ASSETS.md) records the original Monstrosity assembly render
  from Raygen's repository and the official Outpost wordmark, including source
  URLs, dimensions, attribution, and usage notes. Existing project renders, avatar,
  and Hack Club/Stardance artwork remain in use. The Outpost event artwork is not
  presented as an upcoming invitation.

## Review and validation

All 15 concepts received opening desktop (1440 × 1000), opening mobile
(390 × 844), and full-page desktop/mobile inspection. Central Playwright review
checked native controls, keyboard paths, reduced-motion behavior, fragments,
image loading, runtime errors, and document overflow. The 15 interaction checks
covered both desktop and mobile widths, for 30 cases. Interaction and capture
records are in [review/](review/), including the `round2-interactions-*.json`
reports. Scoped ESLint and Prettier checks passed. Svelte/TypeScript diagnostics
passed with zero errors and warnings, and the production build completed with
the Cloudflare adapter. The build retains the pre-existing starter-blog fixture
warning.

The [independent review of 26–32](review/round2-independent-a.md) cleared those
concepts for comparison after 27's footer inset was fixed and its captures were
reviewed again. That follow-up verdict covers the footer repair; it is not a new
full-surface review. The [independent review of 33–40](review/round2-independent-b.md)
cleared all eight for the same comparison scope. Both reviews inspected the
supplied captures and source and used the central interaction reports; they did
not independently repeat every browser interaction. The separate initial-state
contrast scan for 33–40 does not cover every alternate state or text over imagery.

Final gallery validation passed: 15 new concepts, 25 original concepts, a combined
shortlist that persists across reload, and correctly scaled desktop/mobile
previews. The gallery has no document overflow or runtime errors in the checked
views, and its mobile capture confirms all 15 new concepts are ready. Tests wait
for the actual UI and catalog to be ready rather than network idle amid iframe
and font requests.

## Design authority

These are 15 alternatives, not one approved visual system. `DESIGN.md` and
`.impeccable/design.json` remain the inherited snapshot of the rejected earlier
homepage. Their difference from the new proposals records unselected design
exploration, not approval or a new shared canon. A selected production direction
will need integration and a corresponding design-system update.

## Concept 26 refinement

Raygen favored 26 and requested clearer project presentation. Its giant layered
name and SERV0 composition, dark palette, panel interaction, and personal story
remain. Projects now has a navigation link and hero action, leading directly to
an illustrated showcase before the letter. SERV0 is marked as the current build;
DAVID and Monstrosity have their own images, descriptions, and repository links.
An official Stardance wordmark links onward to software contributions. The old
small project list and duplicate SERV0 paragraph were removed from the letter.

The original 26 source and metadata are preserved in `revisions/`. Current
captures and validation are in [review/26-projects/](review/26-projects/).
Playwright checked 1440, 768, 390, and 320 px widths for loaded images, valid
fragments, runtime errors, and document overflow. The project jump, panel toggle,
keyboard operation, and reduced-motion behavior pass at all four widths. These
checks apply to the static concept refinement; the prior app build is historical.
The gallery metadata is refreshed, with all 40 concepts still available.
