'use strict';

angular.module('eiFrontend')
  .controller('SettingsCtrl', function (Sidenav) {
    // Get access to sidenav object and show it
    Sidenav.activate();
  });
