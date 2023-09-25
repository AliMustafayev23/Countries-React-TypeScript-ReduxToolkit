import axios from "axios";
import { Countries } from "./../../types/country";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CountriesState {
  data: [Countries] | null;
  loading: boolean;
  error: string;
}
const initialState: CountriesState = {
  data: null,
  loading: false,
  error: "",
};
export const getCountriesData = createAsyncThunk("fetchCountries", async () => {
  const response = await axios.get<[Countries]>(
    "https://restcountries.com/v3.1/all"
  );
  return response.data;
});
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountriesData.pending, (state) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(getCountriesData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      }),
      builder.addCase(getCountriesData.rejected, (state) => {
        state.loading = false;
        state.error = "Data not found";
      });
  },
});
export default countriesSlice.reducer;
