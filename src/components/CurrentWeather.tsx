import { ArrowDown, ArrowUp, CloudSun, Drop, Wind } from "phosphor-react";
import { kelvinToCelsius } from "../api/utils";
import { useAppSelector } from "../redux/hooks";

export const CurrentWeather = () => {
  const { forecast } = useAppSelector((state) => state);

  return (
    <div className="text-white w-full bg-neutral-800 h-80 rounded-lg my-5 py-10 px-20 flex gap-x-48">
      {forecast && (
        <>
          <div className="bg-neutral-800 w-auto rounded-md flex-col">
            <strong className="text-white text-5xl">London</strong>
            <div className="flex text-white align-center gap-2 my-8">
              <CloudSun size={80} />
              <h1 className="text-5xl">
                {kelvinToCelsius(forecast.current.temp)}°
              </h1>
            </div>
            <p className="text-gray-300 text-md whitespace-nowrap capitalize">
              {forecast.current.weather[0].description}
            </p>
          </div>
          <div className="w-auto flex-col justify-between ">
            <strong className="text-white text-xl">
              Feels like {kelvinToCelsius(forecast.current.feels_like)}
            </strong>
            <div className="flex mt-5">
              <ArrowUp size={20} />
              {kelvinToCelsius(forecast.daily[0].temp.max)}°
              <ArrowDown size={20} />
              {kelvinToCelsius(forecast.daily[0].temp.min)}°
            </div>
            <div className="flex mt-5">
              <Drop size={20} /> Humidity {forecast.current.humidity}%
            </div>
            <div className="flex mt-5">
              <Wind size={20} /> Wind {forecast.current.wind_speed}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
