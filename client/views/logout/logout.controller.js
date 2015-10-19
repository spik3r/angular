'use strict';

angular.module('eiFrontend')
  .controller('LogoutCtrl',
  ['Auth', '$window',
    function (Auth, $window) {
      Auth.logout(function () {
        console.log("Logged out");
      });
    }]);
