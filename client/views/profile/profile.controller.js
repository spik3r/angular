'use strict';

angular.module('ei.console')
    .controller('ProfileCtrl', function (Sidenav) {
        // Get access to sidenav object and show it
        Sidenav.activate();
    });
