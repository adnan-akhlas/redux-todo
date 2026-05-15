import type { TTaskPriority, TTaskStatus } from "../tasks";

export type TFiltersPriority = "all" | TTaskPriority;
export type TFiltersStatus = "all" | TTaskStatus;
export type TFiltersSort = "newest" | "oldest";

export interface IFilterState {
  query: string;
  priority: TFiltersPriority;
  status: TFiltersStatus;
  sort: TFiltersSort;
}
