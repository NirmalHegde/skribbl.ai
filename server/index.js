//required library installations
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

//Port to send messages on
const PORT = process.env.PORT;

const router = require('./router');

//start socket.io server for FTP requests
const app = express();
const server = http.createServer(app);
const io = socket.io(server);

//detects when new users connect and disconnect
io.on('connection', (socket) => {
    console.log ("new connection");

    socket.on('disconnect', () => {
        console.log("User disconnected");
    })
});

app.use(router);

//checks for server start then outputs message to console
server.listen(PORT, () => console.log(`Server started on ${PORT}`));