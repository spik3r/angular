'use strict';


angular.module('ei.console')
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