'use strict';

/**
 * @ngdoc function
 * @name leaderboardApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the leaderboardApp
 */
angular.module('leaderboardApp')
    .controller('AdminCtrl', function ($scope)
    {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.Frm = {};
    });
