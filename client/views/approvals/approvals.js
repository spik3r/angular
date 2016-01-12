'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('approvals', {
              url: "/approvals",
              templateUrl: "/views/approvals/approvals.html"
          });
  });
