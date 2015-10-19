'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/export', {
        templateUrl: 'views/export/export.html',
        controller: 'ExportCtrl',
        controllerAs: 'ctrl',
        access: ['user']
      });
  });
