'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('playlists', {
              url: '/playlists',
              templateUrl: '/views/playlists/playlists.html'
          });
  });
