'use strict';

/**
 * @ngdoc function
 * @name leaderboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leaderboardApp
 */
angular.module('leaderboardApp')

    .controller('MainCtrl', function ($scope, $http)
    {
        $scope.orderTime = function (participant)
        {
            return participant.time === '-:-' ? 99999 : Number(participant.time.replace(':', '.'));
        };
        $http({
            method: 'get',
            url: 'http://localhost/dist/backend/slave.php?proof=participants'
        }).then(function (resp)
        {
            $scope.participants = resp.data.participants;

        }, function (resp)
        {
            console.log(resp);
        });
    });
