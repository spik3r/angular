'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/channel', {
        templateUrl: 'views/channel/channel.html',
        controller: 'ChannelCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
