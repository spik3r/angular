'use strict';

angular.module('eiFrontend')
  .directive('sidenav', function ($route, $rootScope) {
    return {
      restrict: 'EA',
      templateUrl: 'directives/sidenav/sidenav.html',
      link: function (scope, element) {
        scope.currentRoute = $route.current.$$route.originalPath;

        scope.$on("$routeChangeSuccess", function (event, route) {
          scope.currentRoute = route.$$route.originalPath;
        });

        var sidebar = $rootScope.$$childHead.sidebar;

        scope.toggle = function () {
          sidebar.toggle();
        }
      }
    };
  });
