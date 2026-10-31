import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: "1", text: "Task 1" },
    { id: "2", text: "Task 2" },
  ],
};

const taskSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { reducer, actions } = taskSlice;

export default reducer;
