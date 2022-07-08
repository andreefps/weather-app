import { ReducerState, useEffect } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeekForecast } from "./components/WeekForecast";
import { useSelector } from "react-redux";
import { fetchWeatherAction } from "./redux/weatherSlices";
import { RootState } from "./redux/store";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const { loading, error, weatherInfo } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction());
  }, []);

  return (
    <div className="bg-neutral-900 w-screen h-screen">
      <div className="flex justify-center">
        <div className="max-w-[960px]">
          <CurrentWeather />
        </div>
      </div>
      <WeekForecast />
    </div>
  );
}

export default App;
