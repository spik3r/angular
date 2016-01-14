'use strict';

angular.module('ei.console')
    .controller('LoginCtrl',
        function ($state, $scope) {

            $scope.login = function () {
                $state.go('dashboard');
            };

        });
