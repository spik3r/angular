'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
    $stateProvider
      .when('/logout', {
        templateUrl: 'views/logout/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'vm',
        access: []
      });
  });
