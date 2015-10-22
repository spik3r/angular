'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/artist', {
        templateUrl: 'views/artist/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'ctrl',
        access: ['label']
      });
  });
