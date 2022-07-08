import { CloudSun } from "phosphor-react";
export const WeatherCard = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-neutral-800 w-52 h-32 mt-20 rounded-md p-4">
        <strong className="text-white text-lg">Tomorrow</strong>
        <div className="flex text-white mt-2 align-center gap-2">
          <CloudSun size={30} />
          <h1 className="text-2xl"> 23°</h1>
        </div>
        <p className="text-gray-300 text-md whitespace-nowrap">
          Min 19° - Max 26°
        </p>
      </div>
    </div>
  );
};
