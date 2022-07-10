import { WeatherCard } from "./WeatherCard";
import { useAppSelector } from "../redux/hooks";
import { DayInfo } from "../utils/types";

export const WeekForecast = () => {
  const { forecast } = useAppSelector((state) => state);
  return (
    <div className="flex justify-center gap-2 ">
      {forecast?.daily.slice(1, 6).map((day: DayInfo) => {
        return (
          <WeatherCard
            temp={day.temp.max}
            max={day.temp.max}
            min={day.temp.min}
            date={day.dt}
            key={day.dt.toString()}
            icon={day.weather[0].icon}
          />
        );
      })}
    </div>
  );
};
