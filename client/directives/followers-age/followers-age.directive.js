'use strict';

<<<<<<< HEAD
angular.module('eiFrontend')
=======
angular.module('ei.console')
>>>>>>> master
    .directive('followersAge', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'directives/followers-age/followers-age.html',
            link: function (scope, element) {

            }
        };
    });
