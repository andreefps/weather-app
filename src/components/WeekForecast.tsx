import { CurrentWeather } from "./CurrentWeather";
import { WeatherCard } from "./WeatherCard";

export const WeekForecast = () => {
  return (
    <div className="flex justify-center gap-2">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};
