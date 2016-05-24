angular.module('socketExample').factory('socketService',function(
    NET,
    socketFactory
) {

    var socketService = {

        socket:null,
        connected:false,
        connect:function(){

            var myIoSocket = io.connect(NET.SIO_URL, {path:'/socket.io'});

            socketService.socket = socketFactory({
                ioSocket: myIoSocket
            });

            myIoSocket.on('connect', function(socket){

                socketService.connected = true;
                console.log('CONNECTED');
                console.log('Socket: ',myIoSocket);
                myIoSocket.emit('message',{name:'Franci'});

                myIoSocket.on('news', function(data){

                    console.log(data);

                });

            });

            myIoSocket.on('connection', function(socket){

                console.log('Socket: ',socket);

            });

            myIoSocket.on('disconnect', function(err){

                socketService.connected = false;

            });

            return socketService.socket;

        }
    };

    return socketService;
});
