const express = require('express');
const socket = require('socket.io');
var app = express();
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, ()=>{
    console.log("server started on port " + PORT);
});

app.use(express.static('public'));

var io = socket(server);

// Conection event listener
io.on('connection',(socket)=>{
    console.log('made socket conection', socket.id);
    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    });
    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing',data);
    });
});