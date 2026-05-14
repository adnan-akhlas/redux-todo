import type { RootState } from "@/redux/store";

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectTasksCount = (state: RootState) => state.tasks.length;
