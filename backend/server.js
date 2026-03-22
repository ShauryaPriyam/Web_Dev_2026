import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔥 UNIQUE ROOM
const getRoomId = (user1, user2) => {
  return [user1, user2].sort().join("_");
};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_room", ({ user1, user2 }) => {
    const room = getRoomId(user1, user2);
    socket.join(room);
  });

  socket.on("send_message", (data) => {
    const room = getRoomId(data.sender, data.receiver);
    io.to(room).emit("receive_message", data);
  });

  socket.on("typing", ({ sender, receiver }) => {
    const room = getRoomId(sender, receiver);
    socket.to(room).emit("typing", sender);
  });

  socket.on("stop_typing", ({ sender, receiver }) => {
    const room = getRoomId(sender, receiver);
    socket.to(room).emit("stop_typing");
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});