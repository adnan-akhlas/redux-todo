import { createSlice } from "@reduxjs/toolkit";
import type { IFilterState } from "./filters.type";

const initialState: IFilterState = {
  query: "",
  priority: "all",
  status: "all",
  sort: "newest",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFiltersQuery: (state, action) => {
      state.query = action.payload;
    },
    changeFiltersPriority: (state, action) => {
      state.priority = action.payload;
    },
    changeFiltersStatus: (state, action) => {
      state.status = action.payload;
    },
    changeFiltersSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  changeFiltersQuery,
  changeFiltersPriority,
  changeFiltersStatus,
  changeFiltersSort,
} = filtersSlice.actions;

export default filtersSlice.reducer;
