'use strict';

/* Directives */

var busStopDirectives = angular.module('busStopDirectives', []);

busStopDirectives.directive('busStopHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/header.html'
    };
});

busStopDirectives.directive('coordinatesForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/coordinates-form.html'
    };
});