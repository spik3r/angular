'use strict';

angular.module('eiFrontend')
    .controller('IndexCtrl', function ($scope, $window, Sidenav) {
        // Link sidenav to scope
        $scope.sidenav = Sidenav;
        $window.sidenav = Sidenav;


    });
