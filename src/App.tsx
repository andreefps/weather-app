import { ReducerState, useEffect } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeekForecast } from "./components/WeekForecast";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useAppDispatch } from "./redux/hooks";
import { fetchForecast } from "./redux/weatherSlices";
import { Header } from "./components/Header";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForecast());
  }, []);

  return (
    <div className="">
      <Header />
      <CurrentWeather />

      <WeekForecast />
    </div>
  );
}

export default App;
