'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('listener', {
              url: "/listener",
              templateUrl: "/views/listener/listener.html"
          });
  });
