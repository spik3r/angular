'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/track', {
        templateUrl: 'views/track/track.html',
        controller: 'TrackCtrl',
        controllerAs: 'ctrl',
        access: ['label', 'artist']
      });
  });
