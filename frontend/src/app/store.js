import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/player/roomSlice";
import PlayerReducer from "../features/player/playerSlice";
export const store = configureStore({
  reducer: {
    room: roomReducer,
    player: PlayerReducer,
  },
});
