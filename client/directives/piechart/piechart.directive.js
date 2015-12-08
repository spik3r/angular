'use strict';

angular.module('eiFrontend')
    .directive('piechart', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
              percent: '='
            },
            templateUrl: 'directives/piechart/piechart.html',
            link: function (scope, element) {

                var percent = parseInt(scope.percent),
                    deg = 360*percent/100;

                if (percent > 50) {
                    element.addClass('over-50');
                }

                console.log(percent);

                $('.pie-chart-fill').css('transform','rotate('+ deg +'deg)');
            }
        };
    });
