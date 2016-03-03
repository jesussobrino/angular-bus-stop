'use strict';

/* Controllers */

var busStopControllers = angular.module('busStopControllers', []);

busStopControllers.controller('BusStopCtrl', ['$scope', 'busService', 'uiGmapGoogleMapApi', '$window',
    function ($scope, busService, uiGmapGoogleMapApi, $window) {
        $scope.markers = [];
        $scope.map = {
            center: {latitude: 51.52, longitude: -0.08}, control: {}, zoom: 14,
            markersEvents: {
                click: function (marker, eventName, model) {
                    console.log('Click marker', model);
                    $scope.map.window.model = model;
                    $scope.map.window.show = true;
                }
            },
            window: {
                marker: {},
                show: false,
                closeClick: function () {
                    this.show = false;
                },
                options: {}
            }
        };

        $scope.coordinatesToBound = {
            northEast: {
                lat: '51.52783450',
                long: '-0.04076115'
            },
            southWest: {
                lat: '51.51560467',
                long: '-0.10225884'
            }
        };

        uiGmapGoogleMapApi.then(function (maps) {
            console.log('Google Maps API version: ', maps.version);
            var bounds = new google.maps.LatLngBounds();

            busService.getBusStops($scope.coordinatesToBound).then(function (busInfo) {
                angular.forEach(busInfo.data.markers, function (marker) {
                    marker.latitude = marker.lat;
                    marker.longitude = marker.lng;
                    bounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
                    this.push(marker);
                }, $scope.markers);
                console.log('Markers: ', $scope.markers);

                $scope.map.control.getGMap().fitBounds(bounds);
            });
        });

    }]);

busStopControllers.controller('BusStopDetailCtrl', ['$scope', '$routeParams', 'busService', function ($scope, $routeParams, busService) {
    $scope.routeParams = $routeParams;
    busService.getBusStop($routeParams.busId).then(function (busStopInfo) {
        $scope.busStopDepartures = busStopInfo.data;
    });
}]);
