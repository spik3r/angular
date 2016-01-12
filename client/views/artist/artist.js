'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('artist', {
              url: "/artist",
              templateUrl: "/views/artist/artist.html"
          });
  });
