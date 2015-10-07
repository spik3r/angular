'use strict';

angular.module('angularSeed')
  .directive('navBar', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/nav-bar/nav-bar.html',
      link: function (scope, element) {
        element.text('navBar directive');
      }
    };
  });
