'use strict';

angular.module('eiFrontend')
  .controller('DashboardCtrl', function ($rootScope) {
    var sidebar = $rootScope.$$childHead.sidebar;

    console.log(sidebar);

    sidebar.show();

    this.test = function () {
      sidebar.toggle();
    }
  });
