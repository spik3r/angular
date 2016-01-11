'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/settings', {
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
