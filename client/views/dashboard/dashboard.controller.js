'use strict';

angular.module('ei.console')
    .controller('DashboardCtrl', function ($scope) {
        // Define gender object for pie chart
        this.gender = {
            labels: ['male', 'female'],
            percent: 80
        };

        // Define ages object for slice chart
        $scope.ages = {
            '< 18':     20,
            '18-24':    20,
            '25-34':    30,
            '35-44':    10,
            '45-55':    10,
            '56+':      10
        };
    });
