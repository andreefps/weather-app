import { ReducerState, useEffect } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeekForecast } from "./components/WeekForecast";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useAppDispatch } from "./redux/hooks";
import { fetchForecast } from "./redux/weatherSlices";

function App() {
  const { loading, error, forecast } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForecast());
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
