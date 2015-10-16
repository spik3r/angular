'use strict';

angular.module('angularSeed')
  .controller('DashboardCtrl', function ($rootScope) {
    var sidebar = $rootScope.$$childHead.sidebar;

    console.log(sidebar);

    sidebar.show();

    this.test = function () {
      sidebar.toggle();
    }
  });
