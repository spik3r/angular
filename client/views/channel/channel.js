'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/channel', {
        templateUrl: 'views/channel/channel.html',
        controller: 'ChannelCtrl',
        controllerAs: 'ctrl',
        access: ['brand']
      });
  });
