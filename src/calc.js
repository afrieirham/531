const INCREMENT_KG = 2.5;

const WARMUP = [
  { pct: 40, reps: 5 },
  { pct: 50, reps: 5 },
  { pct: 60, reps: 3 },
];

const WEEKS = [
  {
    name: "5s",
    sets: [
      { pct: 65, reps: 5, amrap: false },
      { pct: 75, reps: 5, amrap: false },
      { pct: 85, reps: 5, amrap: true },
    ],
  },
  {
    name: "3s",
    sets: [
      { pct: 70, reps: 3, amrap: false },
      { pct: 80, reps: 3, amrap: false },
      { pct: 90, reps: 3, amrap: true },
    ],
  },
  {
    name: "5/3/1",
    sets: [
      { pct: 75, reps: 5, amrap: false },
      { pct: 85, reps: 3, amrap: false },
      { pct: 95, reps: 1, amrap: true },
    ],
  },
  {
    name: "deload",
    sets: [
      { pct: 40, reps: 5, amrap: false },
      { pct: 50, reps: 5, amrap: false },
      { pct: 60, reps: 5, amrap: false },
    ],
  },
];

function toWeight(trainingMax, pct) {
  const raw = (trainingMax * pct) / 100;
  return Math.round(Math.round(raw / INCREMENT_KG) * INCREMENT_KG * 100) / 100;
}

export function buildCycle(trainingMax) {
  const tm = Number(trainingMax);
  if (!Number.isFinite(tm) || tm <= 0) return null;

  return {
    trainingMax: tm,
    warmup: WARMUP.map((set) => ({
      pct: set.pct,
      reps: set.reps,
      weight: toWeight(tm, set.pct),
    })),
    weeks: WEEKS.map((week) => ({
      name: week.name,
      sets: week.sets.map((set) => ({
        pct: set.pct,
        reps: set.reps,
        amrap: set.amrap,
        weight: toWeight(tm, set.pct),
      })),
    })),
  };
}
