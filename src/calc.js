const INCREMENT_KG = 2.5;
const DEFAULT_TM_PERCENT = 90;

const WARMUP = [
  { pct: 40, reps: 5, amrap: false },
  { pct: 50, reps: 5, amrap: false },
  { pct: 60, reps: 3, amrap: false },
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

function roundToIncrement(value) {
  return Math.round(Math.round(value / INCREMENT_KG) * INCREMENT_KG * 100) / 100;
}

function withWeight(trainingMax) {
  return (set) => ({
    pct: set.pct,
    reps: set.reps,
    amrap: set.amrap,
    weight: roundToIncrement((trainingMax * set.pct) / 100),
  });
}

export function buildCycle(oneRepMax, tmPercent = DEFAULT_TM_PERCENT) {
  const max = Number(oneRepMax);
  const percent = Number(tmPercent);
  if (!Number.isFinite(max) || max <= 0) return null;
  if (!Number.isFinite(percent) || percent <= 0) return null;

  const trainingMax = (max * percent) / 100;
  const weigh = withWeight(trainingMax);

  return {
    tmPercent: percent,
    trainingMax: roundToIncrement(trainingMax),
    warmup: WARMUP.map(weigh),
    weeks: WEEKS.map((week) => ({
      name: week.name,
      sets: week.sets.map(weigh),
    })),
  };
}
