'use strict';

angular.module('ei.console')
    .directive('followersGender', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'directives/followers-gender/followers-gender.html',
            link: function (scope, element) {

            }
        };
    });
