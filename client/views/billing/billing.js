'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/billing', {
        templateUrl: 'views/billing/billing.html',
        controller: 'BillingCtrl',
        controllerAs: 'ctrl',
        access: []
      });
  });
