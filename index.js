const express = require('express');
const { Server } = require('socket.io');
const app = express();

const server = require('http').createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: 'true',
  },
});

io.on('connect', (socket) => {});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
