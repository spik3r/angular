'use strict';

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

angular.module('eiFrontend', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/home'
      });

    $locationProvider.html5Mode(true);
  })
  .run(
  ['$rootScope', '$route', '$location', 'Auth',
    function ($rootScope, $route, $location, Auth) {

      var redirectPath = '/login';

      // Check that user has access on every route change
      $rootScope.$on('$routeChangeStart', function (event, next) {
        if (next.$$route && next.$$route.access) {
          // If page is public, skip auth credentials check
          if (next.$$route.access.length !== 0) {
            // User needs to be logged in at that point.
            // If user is not logged in, redirect to login
            if (!Auth.isLoggedIn()) {
              $location.path(redirectPath);
            } else {
              // Check that user role matches access restrictions
              var allowed = false;
              for (var i = 0; i < next.$$route.access.length; i++) {
                var accessRole = next.$$route.access[i];
                if (Auth.user.role === accessRole) {
                  allowed = true;
                }
              }
              // If user does not have required role, redirect.
              if (!allowed) {
                $location.path(redirectPath);
              }
            }
          }
        } else if (next.$$route && !next.$$route.access) {
          console.error('Access parameter for ' + next.$$route.templateUrl + ' is not specified. Redirecting to /login.');
          $location.path(redirectPath);
        }

      });
    }]);

