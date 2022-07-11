import { ReducerState, useEffect, useState } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeekForecast } from "./components/WeekForecast";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchForecast } from "./redux/weatherSlices";
import { Header } from "./components/Header";
import { Spinner } from "phosphor-react";

function App() {
  const dispatch = useAppDispatch();
  const { forecast, loading, error, updatedAt } = useAppSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchForecast());
  }, []);
  return (
    <div className="bg-sky-50 text-gray-600 transition-all duration-200 dark:text-gray-200 dark:bg-neutral-900 w-screen h-screen overflow-hidden">
      <Header />
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Spinner className="dark:text-white text-gray-600" size={50} />
          <span>Loading...</span>
        </div>
      ) : error && !forecast ? (
        <h1 className="flex justify-center">Something went wrong.</h1>
      ) : (
        <>
          <CurrentWeather />

          <WeekForecast />
        </>
      )}
    </div>
  );
}

export default App;
