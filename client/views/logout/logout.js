'use strict';

angular.module('eiFrontend')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/logout', {
        templateUrl: 'views/logout/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'vm',
        access: []
      });
  });
