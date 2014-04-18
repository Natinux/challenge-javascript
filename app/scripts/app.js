'use strict';

angular
    .module('challengeApp', [
        'ngResource',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/vehicle.html',
                controller: 'VehicleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
