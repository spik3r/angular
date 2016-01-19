'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('billing', {
              url: '/billing',
              templateUrl: '/views/billing/billing.html',
              resolve: {
                  userinfo: "userinfo-required"
              }
          });
  });
