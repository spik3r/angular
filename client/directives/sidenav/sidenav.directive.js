'use strict';

angular.module('eiFrontend')
  .directive('sidenav', function ($route, $rootScope, $location, $timeout) {
    return {
      restrict: 'EA',
      templateUrl: 'directives/sidenav/sidenav.html',
      link: function (scope, element) {

        scope.menuItems = ['dashboard',
          'channel',
          'export',
          'billing',
          'settings'];

        scope.currentRoute = $route.current.$$route.originalPath;

        scope.$on("$routeChangeSuccess", function (event, route) {
          scope.currentRoute = route.$$route.originalPath;
        });

        scope.$on("tabActivated", function (event, tab) {

          var redirectPath = '/' + tab;
          console.log("Redirect to: ", redirectPath);

          $timeout(function () {
            $location.path(redirectPath);
          }, 100);

        });

        var sidebar = $rootScope.$$childHead.sidebar;

        scope.toggle = function () {
          sidebar.toggle();
        };

        var submenuActive = false;
        var toggledTag = '';
        scope.toggleSubmenu = function (element, $event) {
          console.log(element);
          console.log($event);
        };

        scope.activate = function (route, $event) {
          console.log("Activate route: " + route);
          console.log("Activated element: ", $event);
        };

        ////
        //if (true) {
        //  scope.toggleSubmenu(scope.currentRoute.split('/')[1]);
        //}
      }
    };
  });
