'use strict';

angular.module('ei.console')
  .controller('ExportCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.activate();
  });
