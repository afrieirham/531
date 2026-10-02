import { test } from "node:test";
import assert from "node:assert/strict";
import { buildCycle } from "../src/calc.js";

test("builds the four-week cycle for a training max equal to the 1RM", () => {
  assert.deepEqual(buildCycle(100, 100), {
    tmPercent: 100,
    trainingMax: 100,
    warmup: [
      { pct: 40, reps: 5, amrap: false, weight: 40 },
      { pct: 50, reps: 5, amrap: false, weight: 50 },
      { pct: 60, reps: 3, amrap: false, weight: 60 },
    ],
    weeks: [
      {
        name: "5s",
        sets: [
          { pct: 65, reps: 5, amrap: false, weight: 65 },
          { pct: 75, reps: 5, amrap: false, weight: 75 },
          { pct: 85, reps: 5, amrap: true, weight: 85 },
        ],
      },
      {
        name: "3s",
        sets: [
          { pct: 70, reps: 3, amrap: false, weight: 70 },
          { pct: 80, reps: 3, amrap: false, weight: 80 },
          { pct: 90, reps: 3, amrap: true, weight: 90 },
        ],
      },
      {
        name: "5/3/1",
        sets: [
          { pct: 75, reps: 5, amrap: false, weight: 75 },
          { pct: 85, reps: 3, amrap: false, weight: 85 },
          { pct: 95, reps: 1, amrap: true, weight: 95 },
        ],
      },
      {
        name: "deload",
        sets: [
          { pct: 40, reps: 5, amrap: false, weight: 40 },
          { pct: 50, reps: 5, amrap: false, weight: 50 },
          { pct: 60, reps: 5, amrap: false, weight: 60 },
        ],
      },
    ],
  });
});

test("defaults to a training max of 90% of the 1RM", () => {
  const withDefault = buildCycle(100);
  assert.equal(withDefault.tmPercent, 90);
  assert.equal(withDefault.trainingMax, 90);
});

test("derives weights straight from the 1RM and chosen percentage", () => {
  const cycle = buildCycle(87, 90);
  assert.equal(cycle.trainingMax, 77.5);
  assert.deepEqual(
    cycle.warmup.map((set) => set.weight),
    [32.5, 40, 47.5],
  );
  assert.deepEqual(
    cycle.weeks.map((week) => week.sets.map((set) => set.weight)),
    [
      [50, 57.5, 67.5],
      [55, 62.5, 70],
      [57.5, 67.5, 75],
      [32.5, 40, 47.5],
    ],
  );
});

test("an 85% training max yields lighter weights", () => {
  const cycle = buildCycle(100, 85);
  assert.equal(cycle.trainingMax, 85);
  assert.deepEqual(
    cycle.weeks[0].sets.map((set) => set.weight),
    [55, 65, 72.5],
  );
});

test("returns no cycle for a missing or non-positive input", () => {
  for (const value of [0, -10, NaN, undefined, "", null]) {
    assert.equal(buildCycle(value, 90), null);
  }
  assert.equal(buildCycle(100, 0), null);
  assert.equal(buildCycle(100, -5), null);
});
