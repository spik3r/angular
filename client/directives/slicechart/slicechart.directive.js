'use strict';

angular.module('ei.console')
    .directive('slicechart', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
              slices: '='
            },
            templateUrl: 'directives/slicechart/slicechart.html',
            link: function (scope, element) {
                // Create relative slice sizes to display:
                // 1. Find biggest age group
                var biggest_slice_size = null;
                var slice;
                for (slice in scope.slices) {
                    // This check it not required, but prevents IDEA from highlighting errors
                    if (scope.slices.hasOwnProperty(slice)) {
                        if (!biggest_slice_size) {
                            biggest_slice_size = scope.slices[slice];
                        } else {
                            if (scope.slices[slice] > biggest_slice_size) {
                                biggest_slice_size = scope.slices[slice];
                            }
                        }
                    }
                }
                // 2. Scale other groups according to biggest group
                scope.ages = {};
                for (slice in scope.slices) {
                    if (scope.slices.hasOwnProperty(slice)) {
                        scope.ages[slice] = 100 / biggest_slice_size * scope.slices[slice];
                    }
                }
            }
        };
    });


