---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief — 5/3/1 Calculator single screen (`index.html`)

**Scope:** the app's single screen. Visitor mode: Operate.
**Audience/job:** one lifter, at the rack, phone in hand between sets; needs the current week's working weights without scrolling or decoding.
**Constraints:** kg-only, 2.5 kg rounding; single-cycle stateless model; offline PWA; keep the Gym Whiteboard visual system (cool slate, Signal Azure, flat, tabular).

## Direction contract

**THESIS:** The screen leads with the current week and refuses the flat all-weeks matrix as the default view; "what do I load now" is answered before "what is the whole cycle."

**OWN-WORLD:** The incumbent Gym Whiteboard system — Signal Azure on cool slate, flat surfaces, hairline separation, tabular figures. Two additive tokens: an on-accent color for the selected segment (fixes the dark-mode contrast failure) and a muted-strong color for helper text on the page ground (fixes the tagline contrast). No new identity.

**STORY:** The lifter lands, sees the current week's three working sets per lift at full size, changes week with one global control if needed, and opens "All weeks & warm-up" only when they want the reference grid.

**FIRST VIEWPORT:** App title; a settings bar with the Training Max 90/85% pills and a four-option Current week control (sticky on mobile); four exercise cards, each leading with the current week's set list (weight + %×reps, AMRAP tagged) above a collapsed native `<details>` holding the warm-up chips and full week × set grid.

**FORM:** Extension of the incumbent card-and-grid composition (no new world); the now-layer is an emphasis plus a native disclosure on top of the existing grid.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

None. Warm-up collapses with the non-current weeks; the mobile sticky element is the week control only.
