var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3033);

io.on('connection', function(socket){

    console.log('Someone connected');

    socket.on('message', function (msg) {

        // Send message to sender
        socket.emit('message', msg);

        socket.broadcast.emit('message', msg);

    });

});


/*var globalNs = io.of('/nexto-v2');

globalNs.on('connection', function(socket){

    console.log('Someone connected');

    socket.on('message', function (msg) {

        // Send message to sender
        socket.emit('message', msg);

        socket.broadcast.emit('message', msg);

    });

});

*/

