angular.module('socketExample', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'btford.socket-io'
]);

angular.module('socketExample').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'partial/main/main.html',
        controller:'MainCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

})
    .constant('NET', {SIO_URL:'http://localhost:3033'});

angular.module('socketExample').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
