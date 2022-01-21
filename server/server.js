//Module
const http = require("http");
//Libraries
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
//Files
const routes = require("./router/router");
const createChat = require("./components/chat/socket");
const dbConnection = require("./lib/DB");
//Express server
const app = express();
dbConnection();
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Http server from express
const httpServer = http.createServer(app);

//Chat websocket endpoint
const chat = new Server(httpServer).of("/chat");
createChat(chat);

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//Api rest endpoints
routes(app);

httpServer.listen(3030, () => {
  console.log("Server on port 3030");
});
