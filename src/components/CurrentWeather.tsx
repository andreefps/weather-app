import { ArrowDown, ArrowUp, CloudSun, Drop, Wind } from "phosphor-react";
import { kelvinToCelsius } from "../utils/formatters";
import { useAppSelector } from "../redux/hooks";

export const CurrentWeather = () => {
  const { forecast } = useAppSelector((state) => state);

  return (
    <div className="flex justify-center">
      <div className=" bg-neutral-800 h-80 rounded-lg my-5 py-10 px-20 flex gap-x-48">
        {forecast && (
          <>
            <div className="bg-neutral-800 w-auto rounded-md flex-col">
              <strong className=" text-5xl">London</strong>
              <div className="flex  items-center gap-2 my-8">
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h1 className="text-5xl">
                  {kelvinToCelsius(forecast.current.temp)}°
                </h1>
              </div>
              <p className="text-gray-300 text-md whitespace-nowrap capitalize">
                {forecast.current.weather[0].description}
              </p>
            </div>
            <div className="w-auto flex-col justify-between ">
              <strong className=" text-xl">
                Feels like {kelvinToCelsius(forecast.current.feels_like)}°
              </strong>
              <div className="flex mt-5 gap-1">
                <ArrowUp size={20} />
                {kelvinToCelsius(forecast.daily[0].temp.max)}°
                <ArrowDown size={20} />
                {kelvinToCelsius(forecast.daily[0].temp.min)}°
              </div>
              <div className="flex mt-5 gap-1">
                <Drop size={20} /> {forecast.current.humidity}%
              </div>
              <div className="flex mt-5 gap-1">
                <Wind size={20} /> {forecast.current.wind_speed}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
