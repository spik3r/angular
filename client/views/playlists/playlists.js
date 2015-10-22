'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/channel/playlists', {
        templateUrl: 'views/playlists/playlists.html',
        controller: 'PlaylistsCtrl',
        controllerAs: 'ctrl',
        access: ['brand']
      });
  });
