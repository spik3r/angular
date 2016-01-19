'use strict';

angular.module('ei.console')
    .controller('LoginCtrl',
        function ($scope, $state, $timeout, Auth, Log) {

            $scope.login = function () {
                switch (Auth.state.get()) {
                    case Auth.state.STATES.SIGNED_IN:
                    case Auth.state.STATES.VERIFIED:
                        $state.go('dashboard');
                        break;

                    case Auth.state.STATES.VERIFICATION:
                    case Auth.state.STATES.SIGNED_OUT:
                        Auth.authenticate();
                }
            };

        });
