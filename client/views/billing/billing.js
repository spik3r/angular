'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/billing', {
        templateUrl: 'views/billing/billing.html',
        controller: 'BillingCtrl',
        controllerAs: 'ctrl',
        access: ['brand']
      });
  });
