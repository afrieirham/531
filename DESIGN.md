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
---

# Design System: 5/3/1 Calculator

## Overview

**Creative North Star: "The Gym Whiteboard"**

This is the dry-erase board by the rack, not a training app. You walk up, read today's numbers, and walk away. The system is calm, exact, and unobtrusive: chrome stays quiet, numbers stay loud, and nothing on screen asks to be admired. Density is comfortable rather than compressed, because the reader is standing, one-handed, mid-set.

The interface is a single flat plane of cards on a cool grey ground. Depth is implied by hairline borders and one tonal step between the page, the card, and the inset fields — the card's faint shadow is a separator, not a hierarchy. One accent color, a measured blue, marks the only interactive state that matters: which Training Max percentage is active, and what currently has focus.

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
- **Muted Steel** (#64748b): secondary text, field labels, and metadata in light theme.
- **Midnight Steel** (#0b1220): the dark-theme page background, and the PWA/`theme-color` value.
- **Slate Panel** (#111a2e): the card surface in dark theme.
- **Slate Panel Deep** (#16213a): the inset step — input and chip fills in dark theme.
- **Hairline Dark** (#24314d): dark-theme borders and dividers.
- **Pale Slate** (#e2e8f0): primary text in dark theme (same value as the light hairline, different role).
- **Muted Steel Dark** (#94a3b8): secondary text and labels in dark theme.

### Named Rules
**The One Accent Rule.** Signal Azure appears only on the active selection and on focus outlines. It is never used for body text, large fills, or decoration.

**The Cool Steel Rule.** Every neutral is cool and blue-leaning. No warm grey, cream, or brown-tinted surface enters the system.

## Typography

**Display Font:** system-ui (`-apple-system`, "Segoe UI", Roboto, sans-serif)
**Body Font:** system-ui (same stack)
**Numeric:** the body stack with `font-variant-numeric: tabular-nums` on the results grid

**Character:** One system family doing all the work, differentiated by size, weight, and case rather than by a second face. Small uppercase labels and tabular numbers give it the plain, silkscreened feel of an instrument panel.

### Hierarchy
- **Display** (700, `clamp(1.35rem, 4vw, 1.8rem)`, −0.02em): the app title only. The single largest element on the page.
- **Title** (600, `1rem`): working weights and the Training Max value — the numbers the lifter came for.
- **Body** (400, `16px`/1.5): inputs, exercise labels, and full-sentence copy.
- **Label** (600, `0.72rem`, uppercase, 0.06em): field labels, grid column headers, and section eyebrows.

### Named Rules
**The Tabular Figures Rule.** Every weight and percentage in the results grid uses tabular figures, so digits align in columns and never reflow as values change.

## Layout

A single centered column capped at 1400px, with page padding of `1.25rem` top, `clamp(0.75rem, 3vw, 2rem)` inline, and `3rem` bottom. The exercise cards form a responsive grid: one column on phones, two columns from 640px, four columns from 1200px, always with a `1rem` gap. Each card stacks a compact input row (free-text exercise label flexible, the 1RM field fixed at `7.5rem`) above a results block separated by a hairline top border. Spacing is comfortable, never dense: `1rem` card padding, `0.75rem` between internal groups, `0.4rem` between chips. The page is designed to be read in a single glance on a phone without scrolling between cards.

## Elevation & Depth

Flat by default. Surfaces sit flat at rest; the card carries one faint two-layer ambient shadow whose only job is to lift it just clear of the page background. Every other separation is a 1px hairline or a tonal step (page → card → inset field). No element gains or deepens a shadow on hover or focus — interaction is expressed in color and outline only. In the dark theme the same shadow is re-expressed at 30% black, where it reads as separation rather than light.

### Shadow Vocabulary
- **Ambient Separator** (`box-shadow: 0 1px 2px rgb(15 23 42 / 6%), 0 8px 24px rgb(15 23 42 / 6%)`): Cards in the light theme. A faint, wide halo, never a hard cast.
- **Ambient Separator Dark** (`box-shadow: 0 1px 2px rgb(0 0 0 / 30%), 0 8px 24px rgb(0 0 0 / 30%)`): The same role in the dark theme.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest, and the card separator is the system's only shadow. It never intensifies on interaction.

## Shapes

Softly rounded throughout, with a short radius ladder: chips at `8px`, inputs at `9px`, cards at `14px`, and the Training Max selection pills fully round (`999px`). There are no sharp corners and no heavy borders; fields and cards are outlined by a single 1px hairline, and the results grid is divided by 1px bottom rules that stop on the last row. The only pill shape in the system is the segmented selection control.

## Components

### Segmented Selection Pill
- **Shape:** fully round (999px), inline-flex, hairline border.
- **Default:** Clean White surface, Ink Slate text at `0.85rem`, padding `0.4rem 0.75rem`.
- **Selected:** filled with Signal Azure, border and text flipped to white; the only filled accent surface in the system.
- **Focus:** `:focus-visible` draws a 2px Signal Azure outline offset by 2px.

### Chips (Warm-up)
- **Style:** Panel Mist fill, 1px hairline border, `8px` radius, padding `0.3rem 0.5rem`.
- **Content:** the weight in bold, the percentage × reps in small muted text.
- **State:** static; chips are readouts, not controls.

### Cards / Containers
- **Corner Style:** `14px` radius.
- **Background:** Clean White (light) / Slate Panel (dark).
- **Shadow Strategy:** the Ambient Separator, per Elevation & Depth.
- **Border:** 1px Hairline / Hairline Dark.
- **Internal Padding:** `1rem`; inputs and results divided by a hairline top rule with `0.9rem` above and `1rem` between the TM line and the grid.

### Inputs / Fields
- **Style:** Panel Mist fill, 1px hairline border, `9px` radius, padding `0.55rem 0.65rem`, full width.
- **Focus:** `:focus-visible` draws a 2px Signal Azure outline offset by 1px and shifts `border-color` to the accent.
- **Number fields:** `inputmode="decimal"`, `step="2.5"`; the spinner is suppressed in favor of plain typed entry.

### Results Grid
- **Style:** full-width table, `border-collapse: collapse`, tabular figures, hairline bottom rules.
- **Headers:** column headers are the Label style (uppercase, `0.72rem`, muted); row headers are muted `0.85rem`/600 and never wrap.
- **Cells:** each weight sits at `1rem`/600 with a tiny muted `kg` unit suffix; the percentage × reps sits under it at `0.75rem` muted.

### App Header
- **Style:** flat, no border, no background. The Display title with a `0.95rem` muted tagline beneath.

## Do's and Don'ts

### Do:
- **Do** keep exactly one accent. Signal Azure is for the active segment and focus rings only.
- **Do** use `font-variant-numeric: tabular-nums` for every weight and percentage.
- **Do** keep all neutrals cool; pair Cool Paper with Ink Slate and Midnight Steel with Pale Slate.
- **Do** separate surfaces with 1px hairlines and one tonal step before reaching for any shadow.
- **Do** keep the weight values the largest, heaviest elements on a card.

### Don't:
- **Don't** introduce a second accent hue or any warm neutral.
- **Don't** deepen or add shadows on hover or focus; express state through color and outline only.
- **Don't** borrow athletic or fitness-brand signals — no neon, grit, gradients, or motivational energy.
- **Don't** exceed a `14px` radius on cards or reintroduce sharp corners.
- **Don't** set weight or percentage figures in proportional (non-tabular) figures.
