'use strict';

angular.module('eiFrontend')
    .directive('slicechart', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'directives/slicechart/slicechart.html',
            link: function (scope, element) {

                var age_groups = [  ['< 18',    20],
                                    ['18-24',   20],
                                    ['25-34',   30],
                                    ['35-44',   10],
                                    ['45-55',   10],
                                    ['60+',     10] ];

                // Create relative ages object to display:
                scope.ages = {};

                // 1. Find biggest age group
                var biggest_age_group = age_groups[0];
                for (var i = 1; i < age_groups.length; i++) {
                    if (age_groups[i][1] > biggest_age_group[1]) {
                        biggest_age_group = age_groups[i];
                    }
                }

                // 2. Scale other groups according to biggest group
                for (var j = 0; j < age_groups.length; j++) {
                    scope.ages[age_groups[j][0]] = 100 / biggest_age_group[1] * age_groups[j][1];
                }
            }
        };
    });


