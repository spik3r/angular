'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/listener', {
        templateUrl: 'views/listener/listener.html',
        controller: 'ListenerCtrl',
        controllerAs: 'ctrl',
        access: ['label', 'artist']
      });
  });
