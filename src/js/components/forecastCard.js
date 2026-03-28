import { formatDate } from "../utils/formatDate.js";

export function renderForecast(forecastList, unit) {

  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return `
    <div class="forecast-container">
      ${forecastList.map(day => `
        <div class="forecast-card">

          <p>${formatDate(day.dt_txt)}</p>

          <img src="assets/icons/${day.weather[0].icon}.png" width="50">

          <p>${Math.round(day.main.temp)}${unitSymbol}</p>

          <p>${day.weather[0].main}</p>
          <p style="font-size:12px; opacity:0.7;">
            ${day.weather[0].description}
          </p>

        </div>
      `).join("")}
    </div>
  `;
}