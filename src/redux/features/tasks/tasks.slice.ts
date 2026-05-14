import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask, TInitialState } from "./tasks.type";

const initialState: TInitialState = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      prepare: (
        input: Pick<ITask, "title" | "description" | "status" | "priority">,
      ) => {
        const date = Date.now();
        const task: ITask = {
          id: nanoid(),
          title: input.title.trim(),
          description: input.description.trim(),
          status: input.status,
          priority: input.priority,
          createdAt: date,
          updatedAt: date,
        };
        return { payload: task };
      },
      reducer: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
