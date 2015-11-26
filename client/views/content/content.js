'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/content', {
        templateUrl: 'views/content/content.html',
        controller: 'ContentCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
