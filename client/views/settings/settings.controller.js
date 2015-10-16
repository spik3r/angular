'use strict';

angular.module('angularSeed')
  .controller('SettingsCtrl', function ($rootScope) {
    // Get access to sidebar object and show it
    var sidebar = $rootScope.$$childHead.sidebar;
    sidebar.show();


  });
