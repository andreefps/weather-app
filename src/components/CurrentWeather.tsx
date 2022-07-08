import { ArrowDown, ArrowUp, CloudSun, Drop, Wind } from "phosphor-react";
import { useAppSelector } from "../redux/hooks";

export const CurrentWeather = () => {
  const { weatherInfo } = useAppSelector((state) => state);
  function kelvinToCelsius(value: number) {
    return Math.round(value - 273.15);
  }

  return (
    <div className="text-white w-full bg-neutral-800 h-80 rounded-lg my-5 py-10 px-20 flex gap-x-48">
      {weatherInfo && (
        <>
          <div className="bg-neutral-800 w-auto rounded-md flex-col">
            <strong className="text-white text-5xl">London</strong>
            <div className="flex text-white align-center gap-2 my-8">
              <CloudSun size={80} />
              <h1 className="text-5xl">
                {kelvinToCelsius(weatherInfo?.main?.temp)}°
              </h1>
            </div>
            <p className="text-gray-300 text-md whitespace-nowrap capitalize">
              {weatherInfo?.weather[0]?.description}
            </p>
          </div>
          <div className="w-auto flex-col justify-between ">
            <strong className="text-white text-xl">
              Feels like {kelvinToCelsius(weatherInfo.main.feels_like)}
            </strong>
            <div className="flex mt-5">
              <ArrowUp size={20} />
              {kelvinToCelsius(weatherInfo.main.temp_max)}°
              <ArrowDown size={20} />
              {kelvinToCelsius(weatherInfo.main.temp_min)}°
            </div>
            <div className="flex mt-5">
              <Drop size={20} /> Humidity {weatherInfo.main.humidity}%
            </div>
            <div className="flex mt-5">
              <Wind size={20} /> Wind {weatherInfo.wind.speed}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
