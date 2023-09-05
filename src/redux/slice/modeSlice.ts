import { createSlice } from "@reduxjs/toolkit";

interface Mode {
  mode: boolean;
}
const initialState: Mode = {
  mode: true,
};

export const changeModeSlice = createSlice({
  name: "change mode",
  initialState,
  reducers: {
    light: (state) => {
      state.mode = false;
    },
    dark: (state) => {
      state.mode = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { light, dark } = changeModeSlice.actions;

export default changeModeSlice.reducer;
