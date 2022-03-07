const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  host: String,
  roomName: String,
  roomRounds: Number,
  word: String,
});
const playerSchema = mongoose.Schema({
  name: String,
});
module.exports = {
  room: mongoose.model("room", roomSchema),
  player: mongoose.model("player", playerSchema),
};
