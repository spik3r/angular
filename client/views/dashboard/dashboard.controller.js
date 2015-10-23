'use strict';

angular.module('eiFrontend')
  .controller('DashboardCtrl', function (Sidenav, $window, $timeout, Tableau) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;

    Tableau.init('sampleGraph');
  });
