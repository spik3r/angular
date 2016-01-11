'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/approvals', {
        templateUrl: 'views/approvals/approvals.html',
        controller: 'ApprovalsCtrl',
        controllerAs: 'ctrl',
        access: ['admin']
      });
  });
