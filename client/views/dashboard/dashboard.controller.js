'use strict';

angular.module('eiFrontend')
    .controller('DashboardCtrl', function (Sidenav) {
        // Get access to sidenav object and show it
        Sidenav.activate();

        // Define gender object for pie chart
        this.gender = {
            labels: ['male', 'female'],
            percent: 80
        };

        // Define ages object for slice chart
        this.ages = {
            '< 18':     20,
            '18-24':    20,
            '25-34':    30,
            '35-44':    10,
            '45-55':    10,
            '56+':      10
        };
    });
