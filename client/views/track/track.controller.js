'use strict';

angular.module('eiFrontend')
  .controller('TrackCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;
  });
