'use strict';

angular.module('ei.console')
  .controller('ApprovalsCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;
  });
