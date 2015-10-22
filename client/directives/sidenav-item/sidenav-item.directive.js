'use strict';

angular.module('eiFrontend')
  .directive('sidenavItem', function ($rootScope, $route) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'directives/sidenav-item/sidenav-item.html',
      scope: {
        object: '=',
        route: '='
      },
      link: function (scope, element) {
        scope.active = false;

        var dropdown;
        // If object has dropdown, create link to it
        if (scope.object.dropdown) {
          dropdown = element.find('.dropdown');
        }

        // If current path is equal to this tabs path, mark it as active
        if ($route.current.$$route.originalPath.split('/')[1] === scope.object.path.split('/')[1]) {
          scope.active = true;

          if (dropdown && $route.current.$$route.originalPath === scope.object.path) {
            // If this tab matches path, keep it active
            if (dropdown.is(':visible')) {
              dropdown.hide(300);
            }
            // Set active status to false
            scope.object.dropdown.active = false;
          } else if (dropdown) {
            // Otherwise one of the subitems should follow path
            if (dropdown.is(':hidden')) {
              dropdown.show(0);
            }
            // Set active status to true
            scope.object.dropdown.active = true;
          }
        } else {
          scope.active = false;
        }

        element.find('.menu-item-container').on('click', function () {
          // When tab is clicked
          if (scope.active) {
            // If submenu is active, trigger route change to the root
            if (scope.route !== scope.object.path) {
              scope.$emit('activateTab', scope.object);
            } else {
              // If tab is active, toggle dropdown menu
              if (dropdown) {
                // Toggle active status
                scope.object.dropdown.active = !scope.object.dropdown.active;
                scope.$digest();
                // Toggle dropdown
                dropdown.toggle(300);
              }
            }
          } else {
            // If tab is not active, activate tab and broadcast event
            scope.$emit('activateTab', scope.object);
          }
        });

        scope.submenu = function (item) {
          // If this submenu is not active yet, activate submenu
          if (scope.route !== item.path) {
            scope.$emit('activateTab', item);
          }
        };

        // If activated event received, check active styles
        scope.$on('activateTabSuccess', function (event, tab) {
          if (scope.object.path.split('/')[1] === tab.path.split('/')[1]) {
            // If this tab was activated, update active status
            scope.active = true;

            if (dropdown) {
              dropdown.show(300);
              scope.object.dropdown.active = true;
              scope.$digest();
            }
          } else {
            // If another tab was activated, remove active status and hide menu
            scope.active = false;
            if (dropdown) {
              dropdown.hide(300);
            }
          }
        });
      }
    };
  });
