var express = require('express')
var socket = require('socket.io')
var app = express();
app.set('view engine','ejs')
app.use(express.static('public'));
var server = app.listen(3000,function(req,res)
{
    console.log("Server is responding..");
});

var io = socket(server);
io.on('connection',function(socket)
{
    console.log('Made socket connection')
    socket.on('chat',function(data)
    {
        io.sockets.emit('chat',data);
    });
    socket.on('typing',function(name)
    {
        socket.broadcast.emit("typing",name);
    });
});
