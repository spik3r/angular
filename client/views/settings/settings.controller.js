'use strict';

angular.module('eiFrontend')
  .controller('SettingsCtrl', function ($rootScope) {
    // Get access to sidebar object and show it
    var sidebar = $rootScope.$$childHead.sidebar;
    sidebar.show();
    this.sidebar = sidebar;
  });
