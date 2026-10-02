import { test } from "node:test";
import assert from "node:assert/strict";
import { buildCycle } from "../src/calc.js";

test("builds the four-week cycle for a training max of 100 kg", () => {
  assert.deepEqual(buildCycle(100), {
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

test("rounds every set to the nearest 2.5 kg", () => {
  const cycle = buildCycle(87);
  assert.deepEqual(
    cycle.warmup.map((set) => set.weight),
    [35, 42.5, 52.5],
  );
  assert.deepEqual(
    cycle.weeks.map((week) => week.sets.map((set) => set.weight)),
    [
      [57.5, 65, 75],
      [60, 70, 77.5],
      [65, 75, 82.5],
      [35, 42.5, 52.5],
    ],
  );
});

test("returns no cycle for a missing or non-positive training max", () => {
  for (const value of [0, -10, NaN, undefined, "", null]) {
    assert.equal(buildCycle(value), null);
  }
});
