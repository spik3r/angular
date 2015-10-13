'use strict';

angular.module('angularSeed')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
