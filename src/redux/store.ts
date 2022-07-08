import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlices";

export const store = configureStore({
  reducer: weatherSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
