'use strict';

angular.module('angularSeed')
  .directive('sidenav', function ($route) {
    return {
      restrict: 'EA',
      templateUrl: 'directives/sidenav/sidenav.html',
      link: function (scope, element) {
        console.log("Directive scope", scope);
      }
    };
  });
