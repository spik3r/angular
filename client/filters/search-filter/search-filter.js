'use strict';

angular.module('eiFrontend')
  .filter('searchFilter', function () {
    return function (input) {
      return input;
    };
  });
