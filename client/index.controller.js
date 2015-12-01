'use strict';

angular.module('eiFrontend')
    .controller('IndexCtrl', function ($scope, $window, Sidenav) {

        $scope.sidenav = {
            active: Sidenav.isActive()
        };

        $scope.$on('sidenav:activated', function (event, data) {
            $scope.sidenav.active = true;
        });

        $scope.$on('sidenav:deactivated', function (event, data) {
            $scope.sidenav.active = false;
        });
    });
