'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('export', {
              url: "/export",
              templateUrl: "/views/export/export.html"
          });
  });
