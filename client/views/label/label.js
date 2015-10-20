'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/label', {
        templateUrl: 'views/label/label.html',
        controller: 'LabelCtrl',
        controllerAs: 'ctrl',
        access: ['user']
      });
  });
