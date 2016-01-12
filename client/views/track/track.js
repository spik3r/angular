'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('track', {
              url: "/track",
              templateUrl: "/views/track/track.html"
          });
  });
