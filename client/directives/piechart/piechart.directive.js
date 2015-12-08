'use strict';

/**
 * This directive describes a pie chart that takes percent value and two labels.
 */
angular.module('eiFrontend')
    .directive('piechart', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
              percent: '=', // Percent value for first label
              labels: '=' // Two labels to display (if more then two labels, they are ignored and first two are used)
            },
            templateUrl: 'directives/piechart/piechart.html',
            link: function (scope, element) {
                if (scope.percent > 50) { element.addClass('over-50'); }
                element.find('.pie-chart-fill').css('transform','rotate('+ 360*scope.percent/100 +'deg)');
            }
        };
    });
