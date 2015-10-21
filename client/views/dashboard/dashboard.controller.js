'use strict';

angular.module('eiFrontend')
  .controller('DashboardCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;
  });
