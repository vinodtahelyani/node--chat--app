const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public/');
const port = process.env.PORT || 3000;
var app = express();
const server = http.createServer(app);
var io = socketIO(server);
io.on('connection',(socket)=>{
    socket.broadcast.emit('newMsg',{msg:'new client connected'});
    // socket.emit('newEmail',{
    //     from:'chicku',
    //     message: 'hey vinod'
    // });
    socket.on('createEmail',(data)=>{
        console.log(data);
    });
    socket.on('disconnect',()=>{
        console.log('client disconnected');
    });
    socket.on('createMsg',(data)=>{
    console.log(data.msg);
        // socket.emit('newMsg',{msg:'ddddd'});
        // io.emit('newMsg',data);
        socket.broadcast.emit('newMsg',data);
    })
});



app.use(express.static(publicPath));

server.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
});