export function renderWeather(data, unit) {

  const iconCode = data.weather[0].icon;

  // 🌡️ Unit decide
  const unitSymbol = unit === "metric" ? "°C" : "°F";

  // 🌬️ Wind unit change
  const windUnit = unit === "metric" ? "m/s" : "mph";

  return `
    <div class="card">
      <h2>${data.name}, ${data.sys.country}</h2>

      <!-- ICON -->
      <img src="assets/icons/${iconCode}.png" alt="weather icon" width="80">

      <h1>${data.main.temp}${unitSymbol}</h1>
      <p>${data.weather[0].main} (${data.weather[0].description})</p>

      <hr>

      <p>Feels Like: ${data.main.feels_like}${unitSymbol}</p>
      <p>Min Temp: ${data.main.temp_min}${unitSymbol}</p>
      <p>Max Temp: ${data.main.temp_max}${unitSymbol}</p>

      <p>Humidity: ${data.main.humidity}%</p>
      <p>Pressure: ${data.main.pressure} hPa</p>

      <p>Wind: ${data.wind.speed} ${windUnit}</p>
      <p>Clouds: ${data.clouds.all}%</p>

      <p>Visibility: ${data.visibility} m</p>

      <hr>

      <p>Sunrise: ${formatTime(data.sys.sunrise)}</p>
      <p>Sunset: ${formatTime(data.sys.sunset)}</p>
    </div>
  `;
}

// Time formatter
function formatTime(timestamp) {
  let date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
}