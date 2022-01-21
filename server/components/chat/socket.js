const createChat = (io) => {
  io.on("connection", (socket) => {
    // console.log("New Connection: " + socket.id);
    socket.on("joinRoom", (roomName) => {
      socket.join(roomName);
      console.log(`User ${socket.id} conected to room ${roomName}`);

      socket.emit("resivedMessage", {
        username: "BOT",
        message: "Welcome user: " + socket.id,
        time: new Date(),
      });
      socket.broadcast.to(roomName).emit("resivedMessage", {
        username: "BOT",
        message: `User ${socket.id} is connected`,
        time: new Date(),
      });

      socket.on("sendMessage", (message) => {
        socket.emit("resivedMessage", { ...message, username: "You" });
        socket.broadcast.to(roomName).emit("resivedMessage", message);
        console.log("recived");
      });
    });

    socket.on("disconnect", (socket) => {
      console.log("Disconection");
    });
  });
};

module.exports = createChat;
