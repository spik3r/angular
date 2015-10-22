'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'ctrl',
        access: ['admin']
      });
  });
