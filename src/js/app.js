// Imports
import { getWeather, getForecast, getWeatherByCoords } from "./api/weatherApi.js";
import { renderWeather } from "./components/weatherCard.js";
import { renderForecast } from "./components/forecastCard.js";
import { showLoader } from "./components/loader.js";
import { addHistory } from "./features/history.js";
import { renderHistory } from "./components/historyList.js";
import { processForecast } from "./features/forecast.js";

// Elements
const btn = document.getElementById("searchBtn");
const unitBtn = document.getElementById("unitToggle");

// 🌡️ Unit
let currentUnit = "metric";

// 🔥 Main function
async function loadWeather(city) {
  document.getElementById("weather").innerHTML = showLoader();

  let weatherData = await getWeather(city, currentUnit);
  let forecastData = await getForecast(city, currentUnit);

  if (weatherData.cod !== 200) {
    document.getElementById("weather").innerHTML = "City not found";
    return;
  }

  addHistory(city);

  let forecastList = processForecast(forecastData);

  document.getElementById("weather").innerHTML =
    renderWeather(weatherData, currentUnit) +
    renderForecast(forecastList, currentUnit);

  loadHistoryUI();
}

// 🔍 Button click
btn.onclick = () => {
  let city = document.getElementById("city").value;
  if (city) loadWeather(city);
};

// ⌨️ Enter key
document.getElementById("city").addEventListener("keypress", (e) => {
  if (e.key === "Enter") btn.click();
});

// 🔄 History UI
function loadHistoryUI() {
  document.getElementById("history").innerHTML = renderHistory();
  addClickEvents();
}

// 🔁 Click history
function addClickEvents() {
  const items = document.querySelectorAll(".history-item");

  items.forEach(item => {
    item.onclick = () => {
      let city = item.innerText;
      document.getElementById("city").value = city;
      loadWeather(city);
    };
  });
}

// 🌍 Location auto load
function loadDefaultLocation() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("weather").innerHTML = showLoader();

    let data = await getWeatherByCoords(lat, lon);

    if (data.cod !== 200) return;

    loadWeather(data.name);
  });
}

// 🌡️ Unit toggle
if (unitBtn) {
  unitBtn.onclick = () => {
    currentUnit = currentUnit === "metric" ? "imperial" : "metric";

    unitBtn.innerText = currentUnit === "metric" ? "°F" : "°C";

    let city = document.getElementById("city").value;

    if (city) {
      loadWeather(city);
    }
  };
}

// Initial load
loadHistoryUI();
loadDefaultLocation();