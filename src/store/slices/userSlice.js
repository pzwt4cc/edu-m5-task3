import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInitialUser = createAsyncThunk(
  "user/fetchInitialUser",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results[0];
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  },
);

const initialState = {
  user: null,
  isFetching: false,
  error: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInitialUser.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(fetchInitialUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isFetching = false;
    });
    builder.addCase(fetchInitialUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = userSlice;

export default reducer;
