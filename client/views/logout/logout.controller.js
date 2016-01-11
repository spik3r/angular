'use strict';

angular.module('ei.console')
  .controller('LogoutCtrl',
  ['Auth', '$window',
    function (Auth) {
      Auth.logout(function () {
        console.log("Logged out");
      });
    }]);
