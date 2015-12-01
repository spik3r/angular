'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/playlists', {
        templateUrl: 'views/playlists/playlists.html',
        controller: 'PlaylistsCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
