export function kelvinToCelsius(value: number) {
  return Math.round(value - 273.15);
}
export function secondsToWeekday(dateInSeconds: number) {
  return new Date(dateInSeconds * 1000).toLocaleString("en-GB", {
    weekday: "long",
  });
}
