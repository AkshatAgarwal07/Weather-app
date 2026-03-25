export function renderWeather(data) {
  return `${data.name} - ${data.main.temp}°C`;
}