'use strict';

var app = angular.module('challengeApp', ['ngResource','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/vehicle.html',
            controller: 'VehicleController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
