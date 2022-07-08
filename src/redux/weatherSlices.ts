import { WeatherData } from "./../api/types";
import {
  createAsyncThunk,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface WeatherState {
  weatherInfo: WeatherData | undefined;
  loading: boolean;
  error: string | undefined;
  city: string;
}

const initialState: WeatherState = {
  weatherInfo: undefined,
  loading: false,
  error: "",
  city: "London",
};

export const fetchWeatherAction = createAsyncThunk<
  WeatherData,
  void,
  { state: WeatherState }
>("weather/fetch", async (payload, { getState }) => {
  const { city } = getState();
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=celsius&type=accurate&APPID=${
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
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weatherInfo = action.payload;
      state.loading = false;
      state.error = "";
    }),
      builder.addCase(fetchWeatherAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlices.reducer;
