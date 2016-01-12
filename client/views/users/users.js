'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('user', {
              url: "/user",
              templateUrl: "/views/user/user.html"
          });
  });
