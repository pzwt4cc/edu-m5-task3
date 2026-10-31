import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    tasksList: tasksReducer,
  },
});

export default store;
