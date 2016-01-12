'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('logout', {
              url: "/logout",
              templateUrl: "/views/logout/logout.html"
          });
  });
