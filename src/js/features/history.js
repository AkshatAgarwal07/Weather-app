import { save, load } from "../services/storageService.js";

export function addHistory(city) {
  let history = load("history");

  if (!history.includes(city)) {
    history.push(city);
    save("history", history);
  }
}

export function getHistory() {
  return load("history");
}