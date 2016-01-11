'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/playlists', {
        templateUrl: 'views/playlists/playlists.html',
        controller: 'PlaylistsCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
