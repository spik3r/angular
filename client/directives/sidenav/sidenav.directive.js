'use strict';

angular.module('eiFrontend')
  .directive('sidenav', function ($route, $rootScope, $location, $timeout, Log, Sidenav, Auth) {
    return {
      restrict: 'EA',
      scope: {
        menu: '='
      },
      templateUrl: 'directives/sidenav/sidenav.html',
      link: function (scope) {



        //// Filter menu based on user permissions
        //scope.filteredMenu = [];
        //for (var i = 0; i < scope.menu.length; i++) {
        //  if (Auth.match(scope.menu[i].role)) {
        //    // If menu item has dropdown, filter it
        //    if (scope.menu[i].dropdown && scope.menu[i].dropdown.length > 0) {
        //      var tempDropdown = [];
        //
        //      for (var j = 0; j < scope.menu[i].dropdown.length; j++) {
        //        if (Auth.match(scope.menu[i].dropdown[j].role)) {
        //          tempDropdown.push(scope.menu[i].dropdown[j]);
        //        }
        //      }
        //
        //      if (tempDropdown.length > 0) {
        //        scope.menu[i].dropdown = tempDropdown;
        //      } else {
        //        delete scope.menu[i].dropdown;
        //      }
        //
        //      scope.filteredMenu.push(scope.menu[i]);
        //    } else {
        //      scope.filteredMenu.push(scope.menu[i]);
        //    }
        //  }
        //}
        //scope.menu = scope.filteredMenu;
        //
        //var sidenav = Sidenav;
        //scope.currentRoute = $route.current.$$route.originalPath;
        //scope.user = Auth.user;
        //
        //// When route is changed, update current route
        //scope.$on('$routeChangeSuccess', function (event, route) {
        //  scope.currentRoute = route.$$route.originalPath;
        //});
        //
        //// When tab is clicked, redirect to that tab
        //scope.$on('activateTab', function (event, tab) {
        //  // Create redirect path from the tab name
        //  Log.say('sidenav', 'Redirect to: ' + tab.path);
        //
        //  $timeout(function () {
        //    $location.path(tab.path);
        //    // Broadcast that tab has changed, so children can update their styles
        //    scope.$broadcast('activateTabSuccess', tab);
        //  }, 100);
        //});
        //
        //scope.hide = function () {
        //  sidenav.toggle();
        //}
      }
    };
  });
