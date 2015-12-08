'use strict';

angular.module('eiFrontend')
    .directive('slicechart', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'directives/slicechart/slicechart.html',
            link: function (scope, element) {
                scope.ages = {
                    '< 18':     20,
                    '18-24':    20,
                    //'25-34':    30,
                    //'35-44':    10,
                    //'45-55':    10,
                    //'60+':      10
                }
            }
        };
    });
