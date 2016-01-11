'use strict';

angular.module('ei.console')
  .controller('ListenerCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.show();
    this.sidenav = Sidenav;
  });
