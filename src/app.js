import { buildCycle } from "./calc.js";

const DEFAULT_LABELS = ["Bench", "OHP", "Deadlift", "Squat"];
const DEFAULT_ONE_REP_MAXES = ["65", "45", "115", "104"];
const DEFAULT_TM_PERCENT = 90;
const DEFAULT_WEEK = 1;
const WEEK_MIN = 1;
const WEEK_MAX = 4;
const STORAGE = {
  labels: "531.labels",
  oneRepMaxes: "531.oneRepMaxes",
  tmPercent: "531.tmPercent",
  week: "531.week",
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw === null ? undefined : JSON.parse(raw);
    if (Array.isArray(fallback)) {
      return Array.isArray(parsed) ? parsed : [...fallback];
    }
    return parsed ?? fallback;
  } catch {
    return Array.isArray(fallback) ? [...fallback] : fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode, quota) — calculator still works */
  }
}

const labels = load(STORAGE.labels, DEFAULT_LABELS);
const oneRepMaxes = load(STORAGE.oneRepMaxes, DEFAULT_ONE_REP_MAXES);
let tmPercent = load(STORAGE.tmPercent, DEFAULT_TM_PERCENT);
if (typeof tmPercent !== "number" || !(tmPercent > 0)) {
  tmPercent = DEFAULT_TM_PERCENT;
}

let currentWeek = load(STORAGE.week, DEFAULT_WEEK);
if (
  !Number.isInteger(currentWeek) ||
  currentWeek < WEEK_MIN ||
  currentWeek > WEEK_MAX
) {
  currentWeek = DEFAULT_WEEK;
}

const template = document.getElementById("card-template");
const container = document.getElementById("cards");
const refreshers = [];

const EMPTY_RESULTS = `<p class="results-empty">Enter a 1RM to see this cycle.</p>`;
const INVALID_RESULTS = `<p class="results-empty">1RM must be greater than 0 kg.</p>`;

function percentAndReps(set) {
  const reps = set.amrap ? `${set.reps}+` : String(set.reps);
  return `${set.pct}% &times; ${reps}`;
}

function amrapTag(set) {
  return set.amrap ? '<span class="amrap-tag">AMRAP</span>' : "";
}

function warmupSet(set) {
  return `
    <li class="now-set">
      <span class="weight">${String(set.weight)}<span class="unit">kg</span></span>
      <span class="meta">${percentAndReps(set)}</span>
    </li>`;
}

function warmupBlock(cycle) {
  return `
    <div class="warmup">
      <div class="now-head">
        <span class="now-week">Warm-up</span>
      </div>
      <ul class="now-sets">${cycle.warmup.map(warmupSet).join("")}</ul>
    </div>`;
}

function nowBlock(cycle, weekIndex) {
  const week = cycle.weeks[weekIndex];
  const sets = week.sets
    .map(
      (set) => `
      <li class="now-set${set.amrap ? " is-amrap" : ""}">
        <span class="weight">${String(set.weight)}<span class="unit">kg</span></span>
        <span class="meta">${percentAndReps(set)}</span>
        ${amrapTag(set)}
      </li>`,
    )
    .join("");

  return `
    <div class="now">
      <div class="now-head">
        <span class="now-week">Week ${weekIndex + 1}</span>
        <span class="now-type">${week.name}</span>
      </div>
      <ul class="now-sets">${sets}</ul>
    </div>`;
}

function renderResults(cycle, weekIndex) {
  return `
    <div class="tm-line">
      <span class="tm-line-label">TM</span>
      <b>${String(cycle.trainingMax)} kg</b>
    </div>
    ${warmupBlock(cycle)}
    ${nowBlock(cycle, weekIndex)}`;
}

function buildCard(index) {
  const node = template.content.firstElementChild.cloneNode(true);
  const exercise = node.querySelector(".exercise");
  const rmInput = node.querySelector(".one-rm");
  const results = node.querySelector(".results");

  exercise.value = labels[index] ?? DEFAULT_LABELS[index] ?? "";
  rmInput.value = oneRepMaxes[index] ?? "";

  const refresh = () => {
    const cycle = buildCycle(rmInput.value, tmPercent);
    if (!cycle) {
      const raw = rmInput.value.trim();
      results.innerHTML = raw === "" ? EMPTY_RESULTS : INVALID_RESULTS;
      results.hidden = false;
      return;
    }
    results.innerHTML = renderResults(cycle, currentWeek - 1);
    results.hidden = false;
  };

  exercise.addEventListener("input", () => {
    labels[index] = exercise.value;
    save(STORAGE.labels, labels);
  });

  rmInput.addEventListener("input", () => {
    oneRepMaxes[index] = rmInput.value;
    save(STORAGE.oneRepMaxes, oneRepMaxes);
    refresh();
  });

  refreshers[index] = refresh;
  refresh();
  return node;
}

for (let index = 0; index < DEFAULT_LABELS.length; index += 1) {
  container.append(buildCard(index));
}

const percentInputs = [
  ...document.querySelectorAll('input[name="tm-percent"]'),
];

function syncPercentInputs() {
  for (const input of percentInputs) {
    input.checked = Number(input.value) === tmPercent;
  }
}

for (const input of percentInputs) {
  input.addEventListener("change", () => {
    if (!input.checked) return;
    tmPercent = Number(input.value);
    save(STORAGE.tmPercent, tmPercent);
    refreshers.forEach((refresh) => refresh());
  });
}
syncPercentInputs();

const weekInputs = [...document.querySelectorAll('input[name="week"]')];

function syncWeekInputs() {
  for (const input of weekInputs) {
    input.checked = Number(input.value) === currentWeek;
  }
}

for (const input of weekInputs) {
  input.addEventListener("change", () => {
    if (!input.checked) return;
    currentWeek = Number(input.value);
    save(STORAGE.week, currentWeek);
    refreshers.forEach((refresh) => refresh());
  });
}
syncWeekInputs();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
