'use strict';

/**
 * @ngdoc function
 * @name leaderboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leaderboardApp
 */
angular.module('leaderboardApp')

    .factory('ftrParticipants', function ($http)
    {
        return {
            'getParticipants': function ()
            {
                return $http.get('http://raspberrypi.local/backend/participants.php');
            }
        }
    })
    .controller('MainCtrl', function ($scope, ftrParticipants)
    {
        angular.extend($scope, {
            participants: [],
            orderTime: function (participant)
            {
                return participant.time === '-:-' ? 99999 : Number(participant.time.replace(':', '.'));
            }
        });

        ftrParticipants.getParticipants().success(function (resp)
        {
            $scope.participants = resp.participants;
        });
    });