import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import playerService from "./playerService";
const initialState = {
  name: "",
  id: "",
};
export const createPlayer = createAsyncThunk(
  "/player/create",
  async (name, thunkAPI) => {
    try {
      return await playerService.createPlayer(name);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getPlayer = createAsyncThunk(
  "/player/get",
  async (id, thunkAPI) => {
    try {
      return await playerService.getPlayer(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    reset: () => initialState,
    addPlayer: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.id = action.payload._id;
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

export const { reset, addPlayer } = playerSlice.actions;
export default playerSlice.reducer;
