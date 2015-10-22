'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'ctrl',
        access: ['user', 'admin']
      });
  });
