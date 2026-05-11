import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "@/redux/features/tasks/tasks.slice";
import filtersReducer from "@/redux/features/filters/filters.slice";

const rootReducers = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export default rootReducers;
