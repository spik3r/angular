'use strict';

angular.module('angularSeed')
  .controller('LoginCtrl',
  ['Auth', '$window',
    function (Auth, $window) {
      // link to self
      var ctrl = this;

      // If logged in, redirect to /home page
      if (Auth.isLoggedIn()) {
        $window.location.href = '/';
      }

      // Take login form and login
      ctrl.login = function (form) {

        if (form.$valid && !form.$pristine) {
          Auth.login(form.username.$viewValue, form.password.$viewValue, function (response) {
            if (response.success) {
              // Successful login
              $window.location.href = '/';
            } else {
              console.warn("[login] Unsuccessful authorisation attempt.");

              form.$invalid = true;
              form.$valid = false;
            }
          });

        } else {
          ctrl.error = "Required fields are empty";
        }
      }
    }]);
