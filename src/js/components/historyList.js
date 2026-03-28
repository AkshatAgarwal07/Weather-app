import { getHistory } from "../features/history.js";

export function renderHistory() {
  let history = getHistory();

  if (history.length === 0) {
    return "<li>No recent searches</li>";
  }

  return history.map(city => `
    <li class="history-item">${city}</li>
  `).join("");
}