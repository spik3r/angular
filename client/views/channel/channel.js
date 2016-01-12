'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('channel', {
              url: "/channel",
              templateUrl: "/views/channel/channel.html"
          });
  });
