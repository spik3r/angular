'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/content', {
        templateUrl: 'views/content/content.html',
        controller: 'ContentCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
