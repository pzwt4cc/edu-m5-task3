import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const fetchInitialTasks = createAsyncThunk(
  "tasks/fetchInitialTasks",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
      );
      const { data } = await response.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  },
);

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
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
  extraReducers: (builder) => {
    builder.addCase(fetchInitialTasks.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(fetchInitialTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isFetching = false;
    });
    builder.addCase(fetchInitialTasks.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = taskSlice;

export const { addTask, deleteTask, updateTaskStatus } = actions;

export default reducer;
