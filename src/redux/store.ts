import { configureStore } from "@reduxjs/toolkit";
import changeModeReducer from "./slice/modeSlice";

export const store = configureStore({
  reducer: {
    mode: changeModeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
