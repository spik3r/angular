'use strict';

angular.module('eiFrontend')
  .directive('followersGender', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/followers-gender/followers-gender.html',
      link: function (scope, element) {

      }
    };
  });
