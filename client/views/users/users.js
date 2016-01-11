'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/users', {
        templateUrl: 'views/users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'ctrl',
        access: ['admin']
      });
  });
