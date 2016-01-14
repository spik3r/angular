'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('settings', {
              url: '/settings',
              templateUrl: '/views/settings/settings.html'
          });
  });
