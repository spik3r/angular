'use strict';

angular.module('angularSeed')
  .controller('IndexCtrl', function ($rootScope, $scope) {
    // Sidebar configuration object
    $scope.sidebar = {
      active: true,
      displayed: false,
      setActive: function () { this.active = true; },
      show: function () { this.displayed = true; },
      hide: function () { this.displayed = false; },
      toggle: function () { $('body').stop().toggleClass('sp-toggle-sidebar', 300); }
    };


  });
