'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/dashboard/track', {
        templateUrl: 'views/track/track.html',
        controller: 'TrackCtrl',
        controllerAs: 'ctrl',
        access: ['label', 'artist']
      });
  });
