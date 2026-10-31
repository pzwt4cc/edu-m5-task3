import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      name: "Task 1",
      text: "Task go...",
      isDone: false,
    },
    {
      id: uuidv4(),
      name: "Task 2",
      text: "Task go2...",
      isDone: false,
    },
  ],
};

const taskSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ ...payload, id: uuidv4(), isDone: false });
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((t) => t.id !== payload);
    },
    updateTaskStatus: (state, { payload }) => {
      const task = state.tasks.find((t) => t.id === payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
  },
});

const { reducer, actions } = taskSlice;

export const { addTask, deleteTask, updateTaskStatus } = actions;

export default reducer;
