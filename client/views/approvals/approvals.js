'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/approvals', {
        templateUrl: 'views/approvals/approvals.html',
        controller: 'ApprovalsCtrl',
        controllerAs: 'ctrl',
        access: ['admin']
      });
  });
