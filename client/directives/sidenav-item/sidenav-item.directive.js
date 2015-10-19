'use strict';

angular.module('eiFrontend')
  .directive('sidenavItem', function ($rootScope, $route, $location) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'directives/sidenav-item/sidenav-item.html',
      scope: {
        name: '='
      },
      link: function (scope, element) {
        // If current path is equal to this tabs path, mark it as active
        if ($route.current.$$route.originalPath.split('/')[1] === scope.name) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }

        element.on('click', function (event) {
          $rootScope.$broadcast('tabActivated', scope.name);
        });

        // If activated event recieved, check active styles
        scope.$on("tabActivated", function (event, tab) {
          if (scope.name != tab) {
            element.removeClass('active');
          } else {
            element.addClass('active');
          }
        })
      }
    };
  });
