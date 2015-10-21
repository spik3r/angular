'use strict';

angular.module('eiFrontend')
  .directive('sidenav', function ($route, $rootScope, $location, $timeout, Log, Sidenav) {
    return {
      restrict: 'EA',
      scope: {
        menu: '='
      },
      templateUrl: 'directives/sidenav/sidenav.html',
      link: function (scope, element) {
        var sidenav = Sidenav;
        scope.currentRoute = $route.current.$$route.originalPath;

        // When route is changed, update current route
        scope.$on("$routeChangeSuccess", function (event, route) {
          scope.currentRoute = route.$$route.originalPath;
        });

        // When tab is clicked, redirect to that tab
        scope.$on("activateTab", function (event, tab) {
          // Create redirect path from the tab name
          Log.say('sidenav', "Redirect to: " + tab.path);

          $timeout(function () {
            $location.path(tab.path);
            // Broadcast that tab has changed, so children can update their styles
            scope.$broadcast("activateTabSuccess", tab);
          }, 100);
        });

        scope.hide = function () {
          sidenav.toggle();
        }
      }
    };
  });
