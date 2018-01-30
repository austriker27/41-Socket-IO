'use strict';

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let moment = require('moment');

app.use(express.static('./public'));

const USERS = {};

io.on('connection', (socket) => {
  USERS[socket.id] = {};
  USERS[socket.id].username = this.username;

  socket.on('disconnect', () => {
    console.log('DISCONNECTED', socket.id);
  });

  socket.on('send-message', (data) => {
    data.username = USERS[socket.id].username;
    data.timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log('MESSAGE:', data.message);
    io.emit('receive-message', data);
  });

  socket.on('set-username', (data) => {
    USERS[socket.id].username = data.username;

  });
});

let port = 3000;
http.listen(port, () => {
  console.log('http://localhost:' + port);
});
