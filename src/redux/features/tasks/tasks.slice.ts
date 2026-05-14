import { createSlice } from "@reduxjs/toolkit";
import type { TInitialState } from "./tasks.type";

const initialState: TInitialState = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = crypto.randomUUID();
      state.push(action.payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
