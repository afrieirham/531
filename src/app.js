import { buildCycle } from "./calc.js";

const DEFAULT_LABELS = ["Bench Press", "Squat", "Deadlift", "Overhead Press"];
const STORAGE = { labels: "531.labels", tms: "531.tms" };

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
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
const tms = load(STORAGE.tms, ["", "", "", ""]);

const template = document.getElementById("card-template");
const container = document.getElementById("cards");

function formatWeight(weight) {
  return String(weight);
}

function setCell(set) {
  const reps = set.amrap ? `${set.reps}+` : String(set.reps);
  return `
    <span class="weight">${formatWeight(set.weight)}<span class="unit">kg</span></span>
    <span class="meta">${set.pct}% &times; ${reps}</span>`;
}

function warmupChip(set) {
  return `<span class="chip"><b>${formatWeight(set.weight)} kg</b> <small>${set.pct}% &times; ${set.reps}</small></span>`;
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
  const tmInput = node.querySelector(".tm");
  const results = node.querySelector(".results");

  exercise.value = labels[index] ?? DEFAULT_LABELS[index] ?? "";
  tmInput.value = tms[index] ?? "";

  const refresh = () => {
    const cycle = buildCycle(tmInput.value);
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

  tmInput.addEventListener("input", () => {
    tms[index] = tmInput.value;
    save(STORAGE.tms, tms);
    refresh();
  });

  refresh();
  return node;
}

for (let index = 0; index < DEFAULT_LABELS.length; index += 1) {
  container.append(buildCard(index));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
