'use strict';

angular.module('angularSeed')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
