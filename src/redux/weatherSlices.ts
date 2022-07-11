import { ForecastData } from "../utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherState {
  forecast: ForecastData | undefined;
  loading: boolean;
  error: string | undefined;
  updatedAt: string;
}

const initialState: WeatherState = {
  forecast: undefined,
  loading: false,
  error: "",
  updatedAt: "",
};

export const fetchForecast = createAsyncThunk<
  ForecastData,
  void,
  { state: WeatherState }
>("forecast/fetch", async () => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&unit=metric&exclude=hourly,minutely&APPID=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    throw error;
  }
});

const weatherSlices = createSlice({
  name: "wheater",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.forecast = action.payload;
        state.error = "";
        state.updatedAt = new Date().toLocaleString("en-GB", {
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
        localStorage.setItem("forecast", JSON.stringify(state.forecast));
        localStorage.setItem("updatedAt", state.updatedAt);
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        let cachedForecast = localStorage.getItem("forecast");
        let lastUpdated = localStorage.getItem("updatedAt");
        state.loading = false;
        if (cachedForecast) {
          state.forecast = JSON.parse(cachedForecast);
        }
        if (lastUpdated) {
          state.updatedAt = lastUpdated;
        }
        state.error = action.error.message;
      });
  },
});

export default weatherSlices.reducer;
