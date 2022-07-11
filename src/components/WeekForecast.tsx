import { WeatherCard } from "./WeatherCard";
import { useAppSelector } from "../redux/hooks";
import { DayInfo } from "../utils/types";

export const WeekForecast = () => {
  const { forecast, updatedAt } = useAppSelector((state) => state);
  return (
    <>
      <div className="sm:flex sm:justify-center ">
        {forecast?.daily.slice(1, 6).map((day: DayInfo) => {
          return (
            <WeatherCard
              temp={day.temp.max}
              max={day.temp.max}
              min={day.temp.min}
              date={day.dt}
              description={day.weather[0].description}
              key={day.dt.toString()}
              icon={day.weather[0].icon}
            />
          );
        })}
      </div>
      <div className="flex justify-center  mt-6 w-auto h-auto">
        <span>Updated on: {updatedAt}</span>
      </div>
    </>
  );
};
