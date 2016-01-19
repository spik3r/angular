'use strict';

angular.module('ei.console')
  .config(function ($stateProvider) {
      $stateProvider
          .state('profile', {
              url: '/profile',
              templateUrl: '/views/profile/profile.html',
              resolve: {
                  userinfo: "userinfo-required"
              }
          });
  });
