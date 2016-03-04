'use strict';

/* Directives */

var busStopDirectives = angular.module('busStopDirectives', []);

busStopDirectives.directive('busStopHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/bus-stop-header.html'
    };
});

busStopDirectives.directive('coordinatesForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/coordinates-form.html'
    };
});

busStopDirectives.directive('busListFilter', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/bus-list-filter.html',
        scope: {
            query: '=',
            order: '='
        }
    };
});

busStopDirectives.directive('busStopMap', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/bus-stop-map.html'
    };
});

busStopDirectives.directive('busListMenu', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/bus-list-menu.html'
    };
});