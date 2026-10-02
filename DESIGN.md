---
name: 5/3/1 Calculator
description: A single-screen 5/3/1 cycle calculator for one lifter at the gym.
colors:
  signal-azure: "#2563eb"
  signal-azure-bright: "#60a5fa"
  azure-wash: "#dbeafe"
  azure-deep: "#1e3a8a"
  clean-white: "#ffffff"
  panel-mist: "#f8fafc"
  cool-paper: "#f1f5f9"
  slate-panel: "#111a2e"
  slate-panel-2: "#16213a"
  midnight-steel: "#0b1220"
  hairline: "#e2e8f0"
  hairline-dark: "#24314d"
  ink-slate: "#0f172a"
  pale-slate: "#e2e8f0"
  muted-steel: "#64748b"
  muted-steel-dark: "#94a3b8"
  muted-steel-strong: "#475569"
  on-accent: "#ffffff"
  on-accent-dark: "#0b1220"
typography:
  display:
    fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    fontSize: "clamp(1.35rem, 4vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.02em"
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
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.lg}"
    padding: "1rem"
  field-input:
    backgroundColor: "{colors.panel-mist}"
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.md}"
    padding: "0.55rem 0.65rem"
  segment-pill:
    backgroundColor: "{colors.clean-white}"
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.75rem"
  segment-pill-selected:
    backgroundColor: "{colors.signal-azure}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.75rem"
  warmup-chip:
    backgroundColor: "{colors.panel-mist}"
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.5rem"
  now-set:
    backgroundColor: "{colors.panel-mist}"
    textColor: "{colors.ink-slate}"
    rounded: "10px"
    padding: "0.6rem 0.65rem"
  amrap-tag:
    backgroundColor: "{colors.signal-azure}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0.12rem 0.4rem"
---

# Design System: 5/3/1 Calculator

## Overview

**Creative North Star: "The Gym Whiteboard"**

This is the dry-erase board by the rack, not a training app. You walk up, read today's numbers, and walk away. The system is calm, exact, and unobtrusive: chrome stays quiet, numbers stay loud, and nothing on screen asks to be admired. Density is comfortable rather than compressed, because the reader is standing, one-handed, mid-set.

The interface is a single flat plane of cards on a cool grey ground. Depth is implied by hairline borders and one tonal step between the page, the card, and the inset fields — the card's faint shadow is a separator, not a hierarchy. One accent color, a measured blue, marks the only interactive state that matters: which Training Max percentage and which week are active, and what currently has focus.

The screen leads with **now**. A global current-week control drives every card; each card shows that week's three working sets at full size, with the AMRAP top set tagged, and folds the warm-up and the full four-week grid into an "All weeks & warm-up" disclosure. The flat all-weeks matrix is a reference the lifter opens, never the default view.

Everything here is instrument-like. Weights are set in tabular figures so columns align and nothing jitters as values change; labels are small, uppercase, and letter-spaced like the silkscreen on a machine; the results grid reads top-to-bottom without decoration. The system must never look like an athletic or fitness brand — no neon, no grit, no motivational energy — and equally not like a marketing dashboard.

**Key Characteristics:**
- Calm, exact, unobtrusive; the numbers are the only loud thing.
- One accent (Signal Azure), reserved for active state and focus.
- Cool-slate neutrals only; no warm greys.
- Flat by default; hairlines and tonal steps carry separation.
- Tabular figures for every weight and percentage.
- Instrument-like controls: legible, obvious, uncharming.

## Colors

A cool slate family carries every surface and text role, lit by a single measured azure. The palette is theme-symmetric: the light theme runs Cool Paper → Clean White → Panel Mist → Ink Slate, the dark theme runs Midnight Steel → Slate Panel → Slate Panel Deep → Pale Slate, and the azure accent lifts from `#2563eb` to `#60a5fa` to hold contrast on the dark ground.

### Primary
- **Signal Azure** (#2563eb): the single accent, light theme. Fills the selected Training Max segment and draws every `:focus-visible` outline. Its rarity is the point.
- **Signal Azure Bright** (#60a5fa): the same role in the dark theme, raised in lightness so it reads against Midnight Steel.

### Tertiary
- **Azure Wash** (#dbeafe) and **Azure Deep** (#1e3a8a): the `--accent-soft` pair, reserved for a future low-emphasis accent surface. Defined but not yet used in the interface.

### Neutral
- **Cool Paper** (#f1f5f9): the light-theme page background.
- **Clean White** (#ffffff): the card surface in light theme.
- **Panel Mist** (#f8fafc): the inset step — input and chip fills in light theme.
- **Hairline** (#e2e8f0): light-theme borders, dividers, and the results-grid rules.
- **Ink Slate** (#0f172a): primary text in light theme.
- **Muted Steel** (#64748b): field labels, column headers, and unit suffixes in light theme.
- **Muted Steel Strong** (#475569): helper text and secondary values that must clear AA on the page ground — the tagline and metadata. The one neutral stepped darker than Muted Steel to hold contrast on Cool Paper.
- **Midnight Steel** (#0b1220): the dark-theme page background, the PWA/`theme-color` value, and the dark on-accent text.
- **Slate Panel** (#111a2e): the card surface in dark theme.
- **Slate Panel Deep** (#16213a): the inset step — input, chip, and now-set fills in dark theme.
- **Hairline Dark** (#24314d): dark-theme borders and dividers.
- **Pale Slate** (#e2e8f0): primary text in dark theme (same value as the light hairline, different role).
- **Muted Steel Dark** (#94a3b8): field labels and secondary text in dark theme, where it already clears AA on the dark ground.
- **On-Accent** (#ffffff light / #0b1220 dark): the text that sits on a filled Signal Azure surface — the selected segment and the AMRAP tag. It flips with the theme so the azure fill always carries legible text.

### Named Rules
**The One Accent Rule.** Signal Azure appears only on the active selection, the AMRAP tag, and focus outlines. It is never used for body text, large fills, or decoration.

**The Cool Steel Rule.** Every neutral is cool and blue-leaning. No warm grey, cream, or brown-tinted surface enters the system.

**The On-Accent Rule.** Text on a filled azure surface uses the On-Accent token, never a hard-coded white; in dark mode that is near-black, so the bright azure fill stays legible.

## Typography

**Display Font:** system-ui (`-apple-system`, "Segoe UI", Roboto, sans-serif)
**Body Font:** system-ui (same stack)
**Numeric:** the body stack with `font-variant-numeric: tabular-nums` on the results grid

**Character:** One system family doing all the work, differentiated by size, weight, and case rather than by a second face. Small uppercase labels and tabular numbers give it the plain, silkscreened feel of an instrument panel.

### Hierarchy
- **Display** (700, `clamp(1.35rem, 4vw, 1.8rem)`, −0.02em): the app title only. The single largest element on the page.
- **Title** (600, `1rem`): working weights and the Training Max value — the numbers the lifter came for.
- **Body** (400, `16px`/1.5): inputs, exercise labels, and full-sentence copy.
- **Label** (600, `0.72rem`, uppercase, 0.06em): field labels, grid column headers, and control labels.
- **Now Weight** (600, `1.15rem`): the current week's set weights — one step louder than a grid cell so the "now" numbers lead.

### Named Rules
**The Tabular Figures Rule.** Every weight and percentage uses tabular figures — the results grid, the warm-up chips, and the now-set tiles — so digits align in columns and never reflow as values change.

## Layout

A single centered column capped at 1400px, with page padding of `1.25rem` top, `clamp(0.75rem, 3vw, 2rem)` inline, and `3rem` bottom. Two stacked control bars (Training Max, then Week) sit above the cards; on phones the Week bar is sticky at the top so the current week is always in view. The exercise cards form a responsive grid: one column on phones, two columns from 640px, four columns from 1320px, always with a `1rem` gap. Each card stacks a compact input row (free-text exercise label flexible, the 1RM field fixed at `7.5rem`) above the results block, separated by a hairline top border. The results block leads with the Training Max line and the current week's three-set row, then the collapsed "All weeks & warm-up" disclosure. Spacing is comfortable, never dense: `1rem` card padding, `0.75rem` between internal groups, `0.5rem` between now-set tiles, `0.4rem` between chips. The now-layer is the reading target; the full four-week matrix is deliberately behind the disclosure, so the collapsed page is shorter than the reference view (on a 390px phone the collapsed page is roughly two screens for all four lifts).

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
- **Default:** Clean White surface, Ink Slate text at `0.85rem`, padding `0.4rem 0.75rem`.
- **Selected:** filled with Signal Azure, border and text set to the On-Accent token (#ffffff light, #0b1220 dark); the only filled accent surface besides the AMRAP tag.
- **Hover:** border shifts to Signal Azure.
- **Focus:** `:focus-visible` draws a 2px Signal Azure outline offset by 2px.
- **Used by:** both the Training Max control and the Week control.

### Current-Week Control
- **Style:** a second segmented pill row labelled "WEEK", values 1–4, driven by `input[name="week"]`.
- **On phones:** the row is sticky at the top of the viewport, on the page background with a hairline bottom border, so the active week stays visible while scrolling.
- **State:** exactly one week selected; changing it re-renders every card's now-row and moves the `is-current` tint in each grid.

### Now Set (current week)
- **Shape:** three equal tiles (`grid-template-columns: repeat(3, 1fr)`), `10px` radius, `0.5rem` gap.
- **Style:** Panel Mist fill, 1px hairline border, tabular figures; weight at `1.15rem`/600 with a muted `kg` suffix; the `% × reps` beneath at `0.75rem` muted.
- **AMRAP set:** the tile border shifts to Signal Azure and an AMRAP pill is appended below the meta.
- **Purpose:** the screen's reading target; everything a lifter needs between sets.

### AMRAP Tag
- **Shape:** fully round pill, `0.6rem`/700 uppercase, `0.08em` tracking, padding `0.12rem 0.4rem`.
- **Color:** Signal Azure fill, On-Accent text.
- **Placement:** inside the now-set tile and beside the current-week grid cell's meta; it names the top set explicitly instead of leaving a bare `+`.

### All-Weeks Disclosure
- **Style:** a native `<details>` with a summary row (`min-height: 44px`, `0.8rem`/600 muted-strong) and a chevron that rotates on open; the open summary gains a hairline bottom rule.
- **Content:** the warm-up chips and the full week × set grid.
- **State:** hover shifts the summary text to Signal Azure; `:focus-visible` draws the 2px azure outline; the current week's row carries the Panel Mist tint.

### Chips (Warm-up)
- **Style:** Panel Mist fill, 1px hairline border, `8px` radius, padding `0.3rem 0.5rem`, tabular figures.
- **Content:** the weight in bold, the percentage × reps in small muted text.
- **State:** static; chips are readouts, not controls.

### Cards / Containers
- **Corner Style:** `14px` radius.
- **Background:** Clean White (light) / Slate Panel (dark).
- **Shadow Strategy:** the Ambient Separator, per Elevation & Depth.
- **Border:** 1px Hairline / Hairline Dark.
- **Internal Padding:** `1rem`; the results block is divided from the inputs by a hairline top rule, and the disclosure from the now-row by a second hairline.

### Inputs / Fields
- **Style:** Panel Mist fill, 1px hairline border, `9px` radius, padding `0.55rem 0.65rem`, full width; placeholder uses Muted Steel Strong.
- **Focus:** `:focus-visible` draws a 2px Signal Azure outline offset by 1px and shifts `border-color` to the accent.
- **Number fields:** `inputmode="decimal"`, `step="2.5"`; the spinner is suppressed in favor of plain typed entry.

### Empty / Invalid State
- **Style:** a muted-strong message inside the results block, held at `min-height: 4.5rem` so the card does not collapse.
- **Copy:** "Enter a 1RM to see this cycle." for an empty field; "1RM must be greater than 0 kg." for a non-positive value.

### Results Grid
- **Style:** full-width table, `border-collapse: collapse`, tabular figures, hairline bottom rules.
- **Headers:** column headers are the Label style (uppercase, `0.72rem`, muted); row headers are muted `0.85rem`/600 and never wrap.
- **Cells:** each weight sits at `1rem`/600 with a tiny muted `kg` unit suffix and `white-space: nowrap`; the percentage × reps sits under it at `0.75rem` muted-strong, and the AMRAP tag beneath that.
- **Current row:** the row matching the selected week carries the Panel Mist tint and Ink Slate row-label text.

### App Header
- **Style:** flat, no border, no background. The Display title with a `0.95rem` Muted Steel Strong tagline beneath.

## Do's and Don'ts

### Do:
- **Do** keep exactly one accent. Signal Azure is for the active segment, the AMRAP tag, and focus rings only.
- **Do** use `font-variant-numeric: tabular-nums` for every weight and percentage.
- **Do** keep all neutrals cool; pair Cool Paper with Ink Slate and Midnight Steel with Pale Slate.
- **Do** separate surfaces with 1px hairlines and one tonal step before reaching for any shadow.
- **Do** keep the current week's weights the largest, heaviest numbers on a card.
- **Do** use the On-Accent token for any text on a filled azure surface.

### Don't:
- **Don't** introduce a second accent hue or any warm neutral.
- **Don't** deepen or add shadows on hover or focus; express state through color and outline only.
- **Don't** borrow athletic or fitness-brand signals — no neon, grit, gradients, or motivational energy.
- **Don't** exceed a `14px` radius on cards or reintroduce sharp corners.
- **Don't** set weight or percentage figures in proportional (non-tabular) figures.
- **Don't** show the full all-weeks matrix by default; the now-row leads and the matrix stays behind its disclosure.
