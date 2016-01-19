'use strict';

angular.module('ei.console')
    .controller('LoginCtrl',
        function ($scope, $state, Auth, Log) {

            $scope.login = function () {
                switch (Auth.state.get()) {
                    case Auth.state.STATES.SIGNED_IN: {
                        $state.go('dashboard');
                        break;
                    }

                    case Auth.state.STATES.VERIFIED: {
                        Auth.getUserInfo().then(
                            function success(user) {
                                Log.debug('login', 'Successfully retrieved user info.');
                                $state.go('dashboard');
                            },
                            function error(error) {
                                Log.error('login', 'Failed to retrieve user info. Reason: ' + error);
                            }
                        );
                        break;
                    }

                    case Auth.state.STATES.VERIFICATION:
                    case Auth.state.STATES.SIGNED_OUT:
                        Auth.authenticate();
                }
            };

        });
