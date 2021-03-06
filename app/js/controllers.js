'use strict';

/* Controllers */

var busStopControllers = angular.module('busStopControllers', []);

busStopControllers.controller('BusStopCtrl', ['$scope', 'busService', 'uiGmapGoogleMapApi', '$window',
    function ($scope, busService, uiGmapGoogleMapApi, $window) {
        $scope.orderByProperty = 'name';
        $scope.markers = [];
        $scope.map = {
            center: {latitude: 51.52, longitude: -0.08}, control: {}, zoom: 14,
            markersEvents: {
                click: function (marker, eventName, model) {
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

        $scope.updateCoordinates = function (validForm) {
            if (!validForm) {
                $window.alert('Please, insert valid values.');
                return
            }
            busService.getBusStops($scope.coordinatesToBound)
                .then(function (busInfo) {
                    var bounds = new google.maps.LatLngBounds();
                    angular.forEach(busInfo.data.markers, function (marker) {
                        marker.latitude = marker.lat;
                        marker.longitude = marker.lng;
                        bounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
                        this.push(marker);
                    }, $scope.markers);

                    $scope.map.control.getGMap().fitBounds(bounds);
                })
                .catch(function (error) {
                    $window.alert('Please, insert valid values.');
                    console.log('error', error);
                });
        };

        uiGmapGoogleMapApi.then(function (maps) {
            console.log('Google Maps API version: ', maps.version);
            $scope.updateCoordinates(true);
        });

    }]);

busStopControllers.controller('BusStopDetailCtrl', ['$scope', '$routeParams', 'busService', function ($scope, $routeParams, busService) {
    $scope.routeParams = $routeParams;
    busService.getBusStop($routeParams.busId).then(function (busStopInfo) {
        $scope.busStopDepartures = busStopInfo.data;
    });
}]);
