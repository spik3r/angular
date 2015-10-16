'use strict';

angular.module('angularSeed')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'vm',
        access: []
      });
  });
