'use strict';

angular.module('ei.console')
    .controller('ContentCtrl', function (Sidenav) {
        // Get access to sidenav object and show it
        Sidenav.activate();
    });
