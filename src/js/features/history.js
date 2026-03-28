import { MAX_HISTORY } from "../utils/constants.js";

const KEY = "weatherHistory";

// 🔹 Get history
export function getHistory() {
  let data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

// 🔹 Add new city
export function addHistory(city) {
  let history = getHistory();

  // duplicate remove
  history = history.filter(item => item.toLowerCase() !== city.toLowerCase());

  // new city add at top
  history.unshift(city);

  // only last 5
  history = history.slice(0, MAX_HISTORY);

  localStorage.setItem(KEY, JSON.stringify(history));
}