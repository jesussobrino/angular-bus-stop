'use strict';

/* Directives */

var busStopDirectives = angular.module('busStopDirectives', []);

busStopDirectives.directive('busStopHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/header.html'
    };
});