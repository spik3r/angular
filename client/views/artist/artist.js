'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/dashboard/artist', {
        templateUrl: 'views/artist/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'ctrl',
        access: ['label']
      });
  });
