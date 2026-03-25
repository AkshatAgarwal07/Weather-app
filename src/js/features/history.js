import { save, load } from "../services/storageService.js";

export function addHistory(city) {
  let history = load("history");

  // duplicate remove
  history = history.filter(item => item !== city);

  
  history.unshift(city);

  history = history.slice(0, 5);

  save("history", history);
}

export function getHistory() {
  return load("history");
}