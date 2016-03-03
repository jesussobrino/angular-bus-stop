'use strict';

/* App Module */

var busStopApp = angular.module('busStopApp', [
    'ngRoute',
    'uiGmapgoogle-maps',
    'busStopControllers',
    'busStopServices',
    'busStopFilters',
    'busStopDirectives'
]);

busStopApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'template/main.html',
        controller: 'BusStopCtrl'
    }).when('/bus-detail/:busId/:busStopName', {
        templateUrl: 'template/bus-stop-detail.html',
        controller: 'BusStopDetailCtrl'
    }).otherwise({
        redirectTo: '/main'
    });
}]);

busStopApp.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDdH01fqPwhOPgAyniEjIen7WI0TLBeOaA',
        v: '3.23',
        libraries: 'weather,geometry,visualization'
    });
});
