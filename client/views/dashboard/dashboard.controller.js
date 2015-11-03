'use strict';

angular.module('eiFrontend')
  .controller('DashboardCtrl', function (Sidenav, $window, $timeout, Tableau, Redshift) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;

    this.redshift = Redshift.get();
    // Tableau.init('sampleGraph');
  });
