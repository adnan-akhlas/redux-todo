import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  priority: string;
}

const initialState: IInitialState = {
  priority: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export default filtersSlice.reducer;
