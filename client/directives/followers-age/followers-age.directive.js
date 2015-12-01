'use strict';

angular.module('eiFrontend')
  .directive('followersAge', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/followers-age/followers-age.html',
      link: function (scope, element) {

      }
    };
  });
