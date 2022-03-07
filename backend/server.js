const app = require("express")();
const express = require("express");
const router = require("./roomControllers");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/room/", require("./roomControllers"));
app.use("/api/v1/player/", require("./playerController"));
io.on("connection", (socket) => {
  console.log(`user online`);
  socket.on("canvas-data", (data) => {
    console.log(data);
    socket.broadcast.emit("canvas-data", data);
  });
});
module.exports = http;
