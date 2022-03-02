import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  avatar: 1,
  room: {
    roomName: "",
    roomRounds: 1,
  },
};

export const playerSlice = createSlice({
  name: "player",
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
      state.room.roomRounds = action.payload;
    },
    addRoomName: (state, action) => {
      state.room.roomName = action.payload;
    },
  },
});

export const { reset, addName, addAvatar, addRoomName, addRounds } =
  playerSlice.actions;
export default playerSlice.reducer;
