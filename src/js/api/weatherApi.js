import { API_KEY } from "../config/config.js";

export async function getWeather(city) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.json();
}