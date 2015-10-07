'use strict';

angular.module('angularSeed')
  .filter('searchFilter', function () {
    return function (input) {
      return input;
    };
  });
