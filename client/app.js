'use strict';

angular.module('angularSeed', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/profile', {
        controllerAs: '/views/profile/profile.controller.js',
        templateUrl: '/views/profile/profile.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
