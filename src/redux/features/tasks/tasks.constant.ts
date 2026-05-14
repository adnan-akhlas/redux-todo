import type { TTaskPriority, TTaskStatus } from "./tasks.type";

export const TASKS_STATUS: TTaskStatus[] = ["pending", "in-progress", "done"];

export const TASKS_STATUS_LABEL: Record<TTaskStatus, string> = {
  pending: "Pending",
  "in-progress": "In Progress",
  done: "Done",
};

export const TASKS_PRIORITY: TTaskPriority[] = ["low", "medium", "high"];

export const TASKS_PRIORITY_LABEL: Record<TTaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
