const express = require("express");
const cors = require("cors");

const { Server } = require("socket.io");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

io.on("connection", (socket) => {
  console.log("New Connection: " + socket.id);
  //   console.log(socket);
  io.emit("message", "How are you?");
  io.on("disconect", (socket) => {
    console.log("Disconection");
  });
});

httpServer.listen(3030, () => {
  console.log("Server on port 3030");
});
