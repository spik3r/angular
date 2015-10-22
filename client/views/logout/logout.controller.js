'use strict';

angular.module('eiFrontend')
  .controller('LogoutCtrl',
  ['Auth', '$window',
    function (Auth) {
      Auth.logout(function () {
        console.log("Logged out");
      });
    }]);
