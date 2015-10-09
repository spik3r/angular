'use strict';

angular.module('angularSeed')
  .controller('HomeCtrl', function () {
console.log('home crl');
    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
