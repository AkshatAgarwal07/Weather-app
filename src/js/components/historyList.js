
import { getHistory } from "../features/history.js";

export function renderHistory() {
  let history = getHistory();

  return history
    .map(city => `<li class="history-item">${city}</li>`)
    .join("");
}