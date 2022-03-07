import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";
const initialState = {
  id: "",
  host: "",
  roomName: "",
  roomRounds: 1,
  word: "",
};
export const createRoom = createAsyncThunk(
  "/room/create",
  async (roomData, thunkAPI) => {
    try {
      return await roomService.createRoom(roomData);
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
export const getRoom = createAsyncThunk("/room/get", async (id, thunkAPI) => {
  try {
    return await roomService.getRoom(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    reset: () => initialState,
    addName: (state, action) => {
      state.name = action.payload;
    },
    addAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    addRounds: (state, action) => {
      state.roomRounds = action.payload;
    },
    addRoomName: (state, action) => {
      state.roomName = action.payload;
    },
    setword: (state, action) => {
      state.word = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoom.fulfilled, (state, action) => {
        state.host = action.payload.host;
        state.roomName = action.payload.roomName;
        state.roomRounds = action.payload.roomRounds;
        state.id = action.payload._id;
      })
      .addCase(getRoom.fulfilled, (state, action) => {
        state.host = action.payload.host;
        state.roomName = action.payload.roomName;
        state.roomRounds = action.payload.roomRounds;
      });
  },
});

export const { reset, addName, addAvatar, addRoomName, addRounds, setword } =
  roomSlice.actions;
export default roomSlice.reducer;
