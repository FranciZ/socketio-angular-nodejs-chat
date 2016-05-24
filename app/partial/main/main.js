angular.module('socketExample').controller('MainCtrl',function(
    $scope,
    socketService
){

    $scope.messages = [];
    $scope.message = {};

    socketService.connect();

    $scope.onKeyUp = function(evt){

        if(evt.keyCode === 13){

            socketService.socket.emit('message', $scope.message);

        }

    };

    socketService.socket.on('message', function(data){

        console.log('New message: ',data);

        $scope.message.content = '';

        $scope.messages.push(data);


    });

});
