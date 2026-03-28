export function processForecast(data) {
  let result = [];

  let list = data.list;

  for (let i = 0; i < list.length; i += 8) {
    result.push(list[i]);
  }

  return result.slice(0, 5); // next 5 days
}