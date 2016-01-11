'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/profile', {
        templateUrl: 'views/profile/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
