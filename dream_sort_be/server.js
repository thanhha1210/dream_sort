const express = require('express');
const { createServer } = require('node:http');
const { Server } = require("socket.io")
const cors = require("cors");

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors:{
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

let sharedArray = [8, 5, 1, 2, 3]

io.on("connection", (socket) => {
  console.log(socket.id)
  // Send the current array state to the newly connected client
  socket.emit("arrayUpdate", sharedArray)

  socket.on("clicked", (newArray) => {
    sharedArray = newArray
    socket.broadcast.emit("arrayUpdate", sharedArray)
  })

})

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});