import { configureStore } from "@reduxjs/toolkit";
import changeModeReducer from "./slice/modeSlice";
import countriesReducer from "./slice/countriesDataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    mode: changeModeReducer,
    countries: countriesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
