import { fetchForecast } from "../redux/weatherSlices";
import { CurrentWeather } from "./CurrentWeather";
import { WeatherCard } from "./WeatherCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { DayInfo, ForecastData, WeatherInfo } from "../api/types";

export const WeekForecast = () => {
  const { forecast } = useAppSelector((state) => state);
  console.log(forecast?.daily);
  return (
    <div className="flex justify-center gap-2">
      {forecast?.daily.map((day: DayInfo) => {
        return (
          <WeatherCard
            temp={day.temp.max}
            max={day.temp.max}
            min={day.temp.min}
            weekDay={day.dt}
            key={day.dt.toString()}
          />
        );
      })}
    </div>
  );
};
