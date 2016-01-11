'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/export', {
        templateUrl: 'views/export/export.html',
        controller: 'ExportCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
