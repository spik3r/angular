'use strict';

angular.module('eiFrontend')
  .controller('DashboardCtrl', function ($rootScope) {
    // Get access to sidebar object and show it
    var sidebar = $rootScope.$$childHead.sidebar;
    sidebar.show();
    this.sidebar = sidebar;
  });
