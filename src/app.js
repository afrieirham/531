import { buildCycle } from "./calc.js";

const DEFAULT_LABELS = ["Bench", "OHP", "Deadlift", "Squat"];
const DEFAULT_ONE_REP_MAXES = ["65", "45", "115", "104"];
const DEFAULT_TM_PERCENT = 90;
const STORAGE = {
  labels: "531.labels",
  oneRepMaxes: "531.oneRepMaxes",
  tmPercent: "531.tmPercent",
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

const template = document.getElementById("card-template");
const container = document.getElementById("cards");
const refreshers = [];

function percentAndReps(set) {
  const reps = set.amrap ? `${set.reps}+` : String(set.reps);
  return `${set.pct}% &times; ${reps}`;
}

function setCell(set) {
  return `
    <span class="weight">${String(set.weight)}<span class="unit">kg</span></span>
    <span class="meta">${percentAndReps(set)}</span>`;
}

function warmupChip(set) {
  return `<span class="chip"><b>${String(set.weight)} kg</b> <small>${percentAndReps(set)}</small></span>`;
}

function renderResults(cycle) {
  const warmup = cycle.warmup.map(warmupChip).join("");
  const rows = cycle.weeks
    .map(
      (week) => `
      <tr>
        <th scope="row">${week.name}</th>
        ${week.sets.map((set) => `<td>${setCell(set)}</td>`).join("")}
      </tr>`,
    )
    .join("");

  return `
    <div class="tm-line">
      <span class="tm-line-label">Training Max</span>
      <b>${String(cycle.trainingMax)} kg</b>
      <span class="tm-line-pct">${cycle.tmPercent}% of 1RM</span>
    </div>
    <div class="warmup">
      <span class="warmup-title">Warm-up</span>
      <div class="chips">${warmup}</div>
    </div>
    <table class="grid">
      <thead>
        <tr><th></th><th>Set 1</th><th>Set 2</th><th>Set 3</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
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
      results.hidden = true;
      results.innerHTML = "";
      return;
    }
    results.innerHTML = renderResults(cycle);
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
