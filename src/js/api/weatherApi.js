import { API_KEY } from "../config/config.js";

//  Current Weather
export async function getWeather(city, unit = "metric") {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
    );
    return await res.json();
  } catch {
    return { cod: 500 };
  }
}

export async function getForecast(city, unit = "metric") {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
    );
    return await res.json();
  } catch {
    return { cod: 500 };
  }
}

export async function getWeatherByCoords(lat, lon) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    return await res.json();
  } catch {
    return { cod: 500 };
  }
}