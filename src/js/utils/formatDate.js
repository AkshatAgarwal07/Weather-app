export function formatDate(dateStr) {
  let date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    weekday: "short"
  });
}