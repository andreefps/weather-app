import { CloudSun } from "phosphor-react";
import { kelvinToCelsius, secondsToWeekday } from "../utils/formatters";
interface WeatherCardProps {
  date: number;
  temp: number;
  min: number;
  max: number;
  icon: string;
}
export const WeatherCard = ({
  date,
  temp,
  min,
  max,
  icon,
}: WeatherCardProps) => {
  return (
    <div className="flex justify-center">
      <div className="transition-all duration-200 dark:bg-neutral-800 bg-slate-200 w-52 h-fit mt-20 rounded-md p-4">
        <strong className=" text-lg">{secondsToWeekday(date)}</strong>
        <div className="flex items-center mt-2 gap-2">
          <img
            className="w-12"
            src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
          />
          <h1 className="text-2xl "> {kelvinToCelsius(temp)}°</h1>
        </div>
        <p className=" text-md whitespace-nowrap">
          Min {kelvinToCelsius(min)}° - Max {kelvinToCelsius(max)}°
        </p>
      </div>
    </div>
  );
};
