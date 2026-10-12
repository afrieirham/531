---
name: 5/3/1 planner
description: A single-screen 5/3/1 cycle calculator for one lifter at the gym.
colors:
  ink: "#09090b"
  paper: "#f4f4f5"
  clean-white: "#ffffff"
  panel-mist: "#fafafa"
  hairline: "#e4e4e7"
  muted-ink: "#71717a"
  muted-ink-strong: "#52525b"
  obsidian: "#000000"
  charcoal-panel: "#111111"
  charcoal-deep: "#1c1c1c"
  hairline-dark: "#2e2e2e"
  pale-slate: "#fafafa"
  muted-neutral-dark: "#a1a1a1"
  on-accent: "#ffffff"
  on-accent-dark: "#09090b"
typography:
  appTitle:
    fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  title:
    fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "9px"
  lg: "14px"
  pill: "999px"
spacing:
  xs: "0.4rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  section: "3rem"
components:
  card:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1rem"
  field-input:
    backgroundColor: "{colors.panel-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.55rem 0.65rem"
  segment-pill:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.75rem"
  segment-pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.75rem"
  warmup-chip:
    backgroundColor: "{colors.panel-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.5rem"
  now-set:
    backgroundColor: "{colors.panel-mist}"
    textColor: "{colors.ink}"
    rounded: "10px"
    padding: "0.6rem 0.65rem"
  amrap-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0.12rem 0.4rem"
---

# Design System: 5/3/1 planner

## Overview

**Creative North Star: "The Gym Whiteboard"**

This is the dry-erase board by the rack, not a training app. You walk up, read today's numbers, and walk away. The system is calm, exact, and unobtrusive: chrome stays quiet, numbers stay loud, and nothing on screen asks to be admired. Density is comfortable rather than compressed, because the reader is standing, one-handed, mid-set.

The interface is a single flat plane of cards on a neutral grey ground. Depth is implied by hairline borders and one tonal step between the page, the card, and the inset fields — the card's faint shadow is a separator, not a hierarchy. The only accent is monochrome, ink in the light theme and paper in the dark, and it marks the only interactive state that matters: which Training Max percentage and which week are active, and what currently has focus.

The screen leads with **now**. A global current-week control drives every card; each card shows that week's three working sets at full size, with the AMRAP top set tagged, and folds the warm-up and the full four-week grid into an "All weeks & warm-up" disclosure. The flat all-weeks matrix is a reference the lifter opens, never the default view.

Everything here is instrument-like. Weights are set in tabular figures so columns align and nothing jitters as values change; labels are small, uppercase, and letter-spaced like the silkscreen on a machine; the results grid reads top-to-bottom without decoration. The system must never look like an athletic or fitness brand — no neon, no grit, no motivational energy — and equally not like a marketing dashboard.

**Key Characteristics:**
- Calm, exact, unobtrusive; the numbers are the only loud thing.
- One monochrome accent (ink on paper, paper on ink), reserved for active state and focus.
- Black-and-white neutrals only — no tinted hue in either theme.
- Flat by default; hairlines and tonal steps carry separation.
- Tabular figures for every weight and percentage.
- Instrument-like controls: legible, obvious, uncharming.

## Colors

The system is black and white. A neutral ink-and-paper family carries every surface and text role, with no tinted hue in either theme. The palette is theme-symmetric and inverting: the light theme runs Paper → Clean White → Panel Mist → Ink, the dark theme runs Obsidian → Charcoal Panel → Charcoal Deep → Pale Slate, and the single accent simply flips — ink on paper in light, paper on ink in dark.

### Primary
- **Ink** (#09090b): the single accent in the light theme. Fills the selected Training Max segment and draws every `:focus-visible` outline. Its rarity is the point.
- **Pale Slate** (#fafafa): the same role in the dark theme, so the accent reads against Obsidian.

### Neutral
- **Paper** (#f4f4f5): the light-theme page background.
- **Clean White** (#ffffff): the card surface in light theme.
- **Panel Mist** (#fafafa): the inset step — input and chip fills in light theme.
- **Hairline** (#e4e4e7): light-theme borders, dividers, and the results-grid rules.
- **Ink** (#09090b): primary text and the accent in light theme.
- **Muted Ink** (#71717a): field labels, column headers, and unit suffixes in light theme.
- **Muted Ink Strong** (#52525b): helper text and secondary values that must clear AA on the page ground — the metadata beneath a weight. The one neutral stepped darker than Muted Ink to hold contrast on Paper.
- **Obsidian** (#000000): the dark-theme page background and the PWA/`theme-color` value.
- **Charcoal Panel** (#111111): the card surface in dark theme.
- **Charcoal Deep** (#1c1c1c): the inset step — input, chip, and now-set fills in dark theme.
- **Hairline Dark** (#2e2e2e): dark-theme borders and dividers.
- **Pale Slate** (#fafafa): primary text and the accent in dark theme.
- **Muted Neutral Dark** (#a1a1a1): field labels and secondary text in dark theme, where it already clears AA on the dark ground.
- **On-Accent** (#ffffff light / #09090b dark): the text that sits on a filled accent surface — the selected segment and the AMRAP tag. It flips with the theme so the ink or paper fill always carries legible text.

### Named Rules
**The One Accent Rule.** The accent is monochrome — Ink in the light theme, Pale Slate in the dark — and appears only on the active selection, the AMRAP tag, and focus outlines. It is never used for body text, large fills, or decoration.

**The Black-and-White Rule.** Every neutral is untinted: clean white, pure black, and neutral grey only. No blue, warm grey, cream, or brown-tinted surface enters the system.

**The On-Accent Rule.** Text on a filled accent surface uses the On-Accent token, never a hard-coded colour; the token flips with the theme so the ink or paper fill always stays legible.

## Typography

**Display Font:** system-ui (`-apple-system`, "Segoe UI", Roboto, sans-serif)
**Body Font:** system-ui (same stack)
**Numeric:** the body stack with `font-variant-numeric: tabular-nums` on the results grid

**Character:** One system family doing all the work, differentiated by size, weight, and case rather than by a second face. Small uppercase labels and tabular numbers give it the plain, silkscreened feel of an instrument panel.

### Hierarchy
- **App Title** (400, `1rem`): the "5/3/1 planner" wordmark, set in plain body weight and centred inline in the control bar. No display face and no oversized type — it is a quiet label, not a headline.
- **Title** (600, `1rem`): working weights and the Training Max value — the numbers the lifter came for.
- **Body** (400, `16px`/1.5): inputs, exercise labels, and full-sentence copy.
- **Label** (600, `0.72rem`, uppercase, 0.06em): field labels, grid column headers, and control labels.
- **Now Weight** (600, `1.15rem`): the current week's set weights — one step louder than a grid cell so the "now" numbers lead.

### Named Rules
**The Tabular Figures Rule.** Every weight and percentage uses tabular figures — the results grid, the warm-up chips, and the now-set tiles — so digits align in columns and never reflow as values change.

## Layout

A single centered column capped at 1400px, with page padding of `1.25rem` top, `clamp(0.75rem, 3vw, 2rem)` inline, and `3rem` bottom. One control bar doubles as the header, sitting above the cards as a three-column row (`1fr auto 1fr`): the Training Max field at the left, the "5/3/1 planner" wordmark centred, and the Week selector at the right. On phones the title takes its own centred line above the two controls, and the bar is sticky at the top so the current week is always in view. The exercise cards form a responsive grid: one column on phones, two columns from 640px, four columns from 1024px (so an iPad in landscape reaches the four-up view), always with a `1rem` gap. Each card stacks a compact input row (free-text exercise label flexible, the 1RM field fixed at `7.5rem`) above the results block, separated by a hairline top border. The results block leads with the Training Max line and the current week's three-set row, then the collapsed "All weeks & warm-up" disclosure. Spacing is comfortable, never dense: `1rem` card padding, `0.75rem` between internal groups, `0.5rem` between now-set tiles, `0.4rem` between chips. The now-layer is the reading target; the full four-week matrix is deliberately behind the disclosure, so the collapsed page is shorter than the reference view (on a 390px phone the collapsed page is roughly two screens for all four lifts).

## Elevation & Depth

Flat by default. Surfaces sit flat at rest; the card carries one faint two-layer ambient shadow whose only job is to lift it just clear of the page background. Every other separation is a 1px hairline or a tonal step (page → card → inset field). No element gains or deepens a shadow on hover or focus — interaction is expressed in color and outline only. In the dark theme the same shadow is re-expressed at 30% black, where it reads as separation rather than light.

### Shadow Vocabulary
- **Ambient Separator** (`box-shadow: 0 1px 2px rgb(15 23 42 / 6%), 0 8px 24px rgb(15 23 42 / 6%)`): Cards in the light theme. A faint, wide halo, never a hard cast.
- **Ambient Separator Dark** (`box-shadow: 0 1px 2px rgb(0 0 0 / 30%), 0 8px 24px rgb(0 0 0 / 30%)`): The same role in the dark theme.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest, and the card separator is the system's only shadow. It never intensifies on interaction.

## Shapes

Softly rounded throughout, with a short radius ladder: chips and warm-up at `8px`, inputs at `9px`, now-set tiles at `10px`, cards at `14px`, and segmented pills fully round (`999px`). There are no sharp corners and no heavy borders; fields and cards are outlined by a single 1px hairline, and the results grid is divided by 1px bottom rules that stop on the last row. Pills are reserved for the two segmented controls and the AMRAP tag.

## Components

### Segmented Selection Pill
- **Shape:** fully round (999px), inline-flex, hairline border, `min-height: 44px` for touch.
- **Default:** Clean White surface, Ink text at `0.85rem`, padding `0.4rem 0.75rem`.
- **Selected:** filled with the accent (Ink in light, Pale Slate in dark), border and text set to the On-Accent token; the only filled accent surface besides the AMRAP tag.
- **Hover:** border shifts to the accent.
- **Focus:** `:focus-visible` draws a 2px accent outline offset by 2px.
- **Used by:** both the Training Max control and the Week control.

### Current-Week Control
- **Style:** a segmented pill row labelled "WEEK", values 1–4, driven by `input[name="week"]`; it shares one control bar with the Training Max field, on the same row.
- **On phones:** the whole control bar is sticky at the top of the viewport, on the page background with a hairline bottom border, so the active week stays visible while scrolling.
- **State:** exactly one week selected; changing it re-renders every card's now-row and moves the `is-current` tint in each grid.

### Now Set (current week)
- **Shape:** three equal tiles (`grid-template-columns: repeat(3, 1fr)`), `10px` radius, `0.5rem` gap.
- **Style:** Panel Mist fill, 1px hairline border, tabular figures; weight at `1.15rem`/600 with a muted `kg` suffix; the `% × reps` beneath at `0.75rem` muted.
- **AMRAP set:** the tile border shifts to the accent and an AMRAP pill is appended below the meta.
- **Purpose:** the screen's reading target; everything a lifter needs between sets.

### AMRAP Tag
- **Shape:** fully round pill, `0.6rem`/700 uppercase, `0.08em` tracking, padding `0.12rem 0.4rem`.
- **Color:** accent fill, On-Accent text.
- **Placement:** inside the now-set tile and beside the current-week grid cell's meta; it names the top set explicitly instead of leaving a bare `+`.

### All-Weeks Disclosure
- **Style:** a native `<details>` with a summary row (`min-height: 44px`, `0.8rem`/600 muted-strong) and a chevron that rotates on open; the open summary gains a hairline bottom rule.
- **Content:** the warm-up chips and the full week × set grid.
- **State:** hover shifts the summary text to the accent; `:focus-visible` draws the 2px accent outline; the current week's row carries the Panel Mist tint.

### Chips (Warm-up)
- **Style:** Panel Mist fill, 1px hairline border, `8px` radius, padding `0.3rem 0.5rem`, tabular figures.
- **Content:** the weight in bold, the percentage × reps in small muted text.
- **State:** static; chips are readouts, not controls.

### Cards / Containers
- **Corner Style:** `14px` radius.
- **Background:** Clean White (light) / Charcoal Panel (dark).
- **Shadow Strategy:** the Ambient Separator, per Elevation & Depth.
- **Border:** 1px Hairline / Hairline Dark.
- **Internal Padding:** `1rem`; the results block is divided from the inputs by a hairline top rule, and the disclosure from the now-row by a second hairline.

### Inputs / Fields
- **Style:** Panel Mist fill, 1px hairline border, `9px` radius, padding `0.55rem 0.65rem`, full width; placeholder uses Muted Ink Strong.
- **Focus:** `:focus-visible` draws a 2px accent outline offset by 1px and shifts `border-color` to the accent.
- **Number fields:** `inputmode="decimal"`, `step="2.5"`; the spinner is suppressed in favor of plain typed entry.

### Empty / Invalid State
- **Style:** a muted-strong message inside the results block, held at `min-height: 4.5rem` so the card does not collapse.
- **Copy:** "Enter a 1RM to see this cycle." for an empty field; "1RM must be greater than 0 kg." for a non-positive value.

### Results Grid
- **Style:** full-width table, `border-collapse: collapse`, tabular figures, hairline bottom rules.
- **Headers:** column headers are the Label style (uppercase, `0.72rem`, muted); row headers are muted `0.85rem`/600 and never wrap.
- **Cells:** each weight sits at `1rem`/600 with a tiny muted `kg` unit suffix and `white-space: nowrap`; the percentage × reps sits under it at `0.75rem` muted-strong, and the AMRAP tag beneath that.
- **Current row:** the row matching the selected week carries the Panel Mist tint and Ink row-label text.

### App Header
- **Style:** flat, no border, no background, and no separate header block — the control bar is the header. The Training Max field sits left, the "5/3/1 planner" wordmark is centred in plain body weight (`1rem`/400), and the Week selector sits right. There is no tagline.

## Do's and Don'ts

### Do:
- **Do** keep exactly one accent. The accent is for the active segment, the AMRAP tag, and focus rings only.
- **Do** use `font-variant-numeric: tabular-nums` for every weight and percentage.
- **Do** keep both themes black and white; pair Paper with Ink and Obsidian with Pale Slate.
- **Do** separate surfaces with 1px hairlines and one tonal step before reaching for any shadow.
- **Do** keep the current week's weights the largest, heaviest numbers on a card.
- **Do** use the On-Accent token for any text on a filled accent surface.

### Don't:
- **Don't** introduce a second accent hue or any warm neutral.
- **Don't** deepen or add shadows on hover or focus; express state through color and outline only.
- **Don't** borrow athletic or fitness-brand signals — no neon, grit, gradients, or motivational energy.
- **Don't** exceed a `14px` radius on cards or reintroduce sharp corners.
- **Don't** set weight or percentage figures in proportional (non-tabular) figures.
- **Don't** show the full all-weeks matrix by default; the now-row leads and the matrix stays behind its disclosure.
