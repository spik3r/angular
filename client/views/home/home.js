'use strict';

angular.module('angularSeed')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        access: ['user']
      });
  });
