'use strict';

angular.module('ei.console')
    .directive('followersAge', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'directives/followers-age/followers-age.html',
            link: function (scope, element) {

            }
        };
    });
