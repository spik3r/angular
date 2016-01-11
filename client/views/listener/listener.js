'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/dashboard/listener', {
        templateUrl: 'views/listener/listener.html',
        controller: 'ListenerCtrl',
        controllerAs: 'ctrl',
        access: ['label', 'artist']
      });
  });
