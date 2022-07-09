import { ForecastData } from "./../api/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherState {
  forecast: ForecastData | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState: WeatherState = {
  forecast: undefined,
  loading: false,
  error: "",
};

// export const fetchWeatherAction = createAsyncThunk<
//   WeatherData,
//   void,
//   { state: WeatherState }
// >("weather/fetch", async (payload, { getState }) => {
//   const { city } = getState();
//   try {
//     const { data } = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=celsius&type=accurate&APPID=${
//         import.meta.env.VITE_API_KEY
//       }`
//     );
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });

export const fetchForecast = createAsyncThunk<
  ForecastData,
  void,
  { state: WeatherState }
>("forecast/fetch", async (payload, { getState }) => {
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
      // .addCase(fetchWeatherAction.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(fetchWeatherAction.fulfilled, (state, action) => {
      //   state.weatherInfo = action.payload;
      //   state.loading = false;
      //   state.error = "";
      // })
      // .addCase(fetchWeatherAction.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      .addCase(fetchForecast.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlices.reducer;
