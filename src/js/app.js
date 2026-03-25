import { getWeather } from "./api/weatherApi.js";
import { renderWeather } from "./components/weatherCard.js";
import { showLoader } from "./components/loader.js";
import { addHistory } from "./features/history.js";
import { renderHistory } from "./components/historyList.js";

const btn = document.getElementById("searchBtn");

//  Search button
btn.onclick = async () => {
  let city = document.getElementById("city").value;

  document.getElementById("weather").innerHTML = showLoader();

  let data = await getWeather(city);

  if (data.cod !== 200) {
    document.getElementById("weather").innerHTML =
      " City not found";
    return;
  }

  addHistory(city);

  document.getElementById("weather").innerHTML =
    renderWeather(data);

  loadHistoryUI();
};

// 🔹History UI render
function loadHistoryUI() {
  document.getElementById("history").innerHTML =
    renderHistory();

  addClickEvents(); // important
}

//  Click events
function addClickEvents() {
  const items = document.querySelectorAll(".history-item");

  items.forEach(item => {
    item.onclick = async () => {
      let city = item.innerText;

      document.getElementById("weather").innerHTML = showLoader();

      let data = await getWeather(city);

      if (data.cod !== 200) return;

      document.getElementById("weather").innerHTML =
        renderWeather(data);
    };
  });
}

// Page load
loadHistoryUI();