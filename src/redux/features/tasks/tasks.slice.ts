import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  name: string;
  description: string;
  priority: string;
  status: string;
}

const initialState: IInitialState = {
  name: "",
  description: "",
  priority: "",
  status: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
