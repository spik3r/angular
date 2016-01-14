'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('content', {
              url: '/content',
              templateUrl: '/views/content/content.html'
          });
  });
