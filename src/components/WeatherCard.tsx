import { CloudSun } from "phosphor-react";
import { kelvinToCelsius } from "../api/utils";
interface WeatherCardProps {
  weekDay: number;
  temp: number;
  min: number;
  max: number;
}
export const WeatherCard = ({ weekDay, temp, min, max }: WeatherCardProps) => {
  const formattedDay = new Date(weekDay * 1000).toLocaleDateString();
  return (
    <div className="flex justify-center">
      <div className="bg-neutral-800 w-52 h-32 mt-20 rounded-md p-4">
        <strong className="text-white text-lg">{formattedDay}</strong>
        <div className="flex text-white mt-2 align-center gap-2">
          <CloudSun size={30} />
          <h1 className="text-2xl"> {kelvinToCelsius(temp)}°</h1>
        </div>
        <p className="text-gray-300 text-md whitespace-nowrap">
          Min {kelvinToCelsius(min)}° - Max {kelvinToCelsius(max)}°
        </p>
      </div>
    </div>
  );
};
