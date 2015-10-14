'use strict';

angular.module('angularSeed')
  .controller('LogoutCtrl',
  ['Auth', '$window',
    function (Auth, $window) {
      Auth.logout(function () {
        console.log("Logged out");
      });
    }]);
