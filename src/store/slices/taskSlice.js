import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      name: "Task 1",
      text: "Task go...",
    },
    {
      id: uuidv4(),
      name: "Task 2",
      text: "Task go2...",
    },
  ],
};

const taskSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ ...payload, id: uuidv4() });
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((t) => t.id !== payload);
    },
  },
});

const { reducer, actions } = taskSlice;

export const { addTask, deleteTask } = actions;

export default reducer;
