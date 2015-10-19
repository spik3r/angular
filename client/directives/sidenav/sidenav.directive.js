'use strict';

angular.module('eiFrontend')
  .directive('sidenav', function ($route) {
    return {
      restrict: 'EA',
      templateUrl: 'directives/sidenav/sidenav.html',
      link: function (scope, element) {
        scope.currentRoute = $route.current.$$route.originalPath;

        scope.$on("$routeChangeSuccess", function (event, route) {
          scope.currentRoute = route.$$route.originalPath;
        });
      }
    };
  });
