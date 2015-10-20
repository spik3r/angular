'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/channel/content', {
        templateUrl: 'views/content/content.html',
        controller: 'ContentCtrl',
        controllerAs: 'ctrl',
        access: ['user']
      });
  });
