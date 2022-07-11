import { ReducerState, useEffect, useState } from "react";
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
    <div className="bg-sky-50 text-gray-600 transition-all duration-200 dark:text-gray-200 dark:bg-neutral-900 w-screen h-screen">
      <Header />
      <CurrentWeather />
      <WeekForecast />
    </div>
  );
}

export default App;
