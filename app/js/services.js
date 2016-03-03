'use strict';

/* Services */

var busStopServices = angular.module('busStopServices', ['ngResource']);

busStopServices.service('busService', ['$http', function ($http) {

    this.getBusStops = function (coordinates) {
        return $http.jsonp('https://digitaslbi-id-test.herokuapp.com/bus-stops?' +
            'northEast=' + coordinates.northEast.lat + ',' + coordinates.northEast.long +
            '&southWest=' + coordinates.southWest.lat + ',' + coordinates.southWest.long + '&callback=JSON_CALLBACK');
    };

    this.getBusStop = function (busStopId) {
        return $http.jsonp('https://digitaslbi-id-test.herokuapp.com/bus-stops/' + busStopId + '?callback=JSON_CALLBACK');
    };
}]);
