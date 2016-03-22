'use strict';

/**
 * @ngdoc directive
 * @name leaderboardApp.directive:place
 * @description
 * # place
 */
angular.module('leaderboardApp')
    .directive('place', function ()
    {
        return {
            restrict: 'E',
            scope: {
                participant: '=',
                index: '=',
            },
            templateUrl: 'views/templates/place.html',
            // link: function (scope, el, attrs, ctrl, transclude)
            // {
            //     console.log(scope);
            //     el.find('.place').append(transclude);
            // }
        };
    });
