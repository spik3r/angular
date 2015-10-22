'use strict';

angular.module('eiFrontend')
  .directive('role', function (Auth) {
    return {
      restrict: 'EA',
      link: function (scope, element, attributes) {
        var found = false;

        if (Auth.isLoggedIn() && attributes.role && attributes.role.length > 0) {
          var array = attributes.role.split(',');

          for (var i = 0; i < array.length; i++) {
            // Remove spaces
            array[i] = array[i].replace(/\s+/g, '');

            array[i] = array[i].toLowerCase();
            // Delete empty roles
            if (array[i].length < 1) {
              delete array[i];
            } else {
              if (Auth.user.role === array[i]) {
                found = true;
              }
            }
          }
        } else if (attributes.role.length === 0) {
          // Let configuration with an empty string pass
          found = true;
        }

        if (!found) {
          element.remove();
        }
      }
    };
  });
