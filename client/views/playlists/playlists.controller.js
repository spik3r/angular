'use strict';

angular.module('eiFrontend')
  .controller('PlaylistsCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;
  });
