# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The lifter running the 5/3/1 program — one person, authoring and using the tool for their own training. They use it at the gym, on a phone, between sets: they need the working weights for the current lift fast, without setup, login, or explanation. No second audience; no onboarding or sharing requirement.

## Product Purpose

Turns entered One-Rep Maxes into the exact weights for one four-week 5/3/1 cycle (Doing Jack Shit template: main lifts only, no assistance work). Success is the lifter glancing at the phone and immediately knowing what to load for each set.

## Positioning

A generic, stateless weight calculator, not a program app. Any named slot can hold a 1RM and produce a cycle (free-text exercise labels); the app stores no history and computes exactly one cycle, leaving progression to the lifter.

## Operating Context

Used mid-workout at the gym, typically on a phone, one-handed, in a hurry. Weights are in kilograms. The four main lifts (Bench, OHP, Deadlift, Squat) exist only as default label text. Inputs and the Training Max percentage persist in `localStorage` between sessions.

## Capabilities and Constraints

- Single screen: four exercise cards, each a free-text label plus one 1RM input; a global Training Max toggle (90% or 85% of 1RM).
- Derives the Training Max and renders a warm-up block plus a four-week grid (5s, 3s, 5/3/1, deload); the top set is AMRAP.
- Weights snap to 2.5 kg increments; the Training Max itself is shown unrounded.
- Kilograms are a deliberate constraint — imperial units are explicitly out of scope.
- Installable PWA with an offline service worker; runs entirely client-side with no backend, accounts, or network dependency.
- Single-cycle by design: no history, no cycle number, no automatic progression.

## Brand Commitments

None. Name, tagline, and neutral system-ui presentation are incidental and open to change.

## Evidence on Hand

- Domain vocabulary: `CONTEXT.md`.
- Decisions: `docs/adr/0001-exercise-labels-are-free-text.md`, `docs/adr/0002-single-cycle-manual-progression.md`.
- No testimonials, customer data, pricing, or marketing assets exist; future work must not fabricate any.

## Product Principles

1. Answer one question fast: what do I load for this lift, right now.
2. Stay generic — never hard-code a fixed set of lifts.
3. Stateless by design: compute a cycle, don't own training state.
4. Work offline, on a phone, with no ceremony.
