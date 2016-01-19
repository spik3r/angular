'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('authorize', {
                url: '/authorize?access_token&token_type&state&expires_in&id_token',
                resolve: {
                    // Fix hash issues with ui-router
                    // http://stackoverflow.com/questions/30257293/angular-ui-replace-with-on-redirect-from-facebook-oauth
                    'urlFix': ['$location', function($location){
                        $location.url($location.url().replace("#","?"));
                    }]
                },
                controller: function ($state, $stateParams, Auth, Log) {

                    function userinfo() {
                        Auth.getUserInfo().then(
                            function success(user) {
                                Log.debug('login', "Successfully retrieved userinfo for user " + user.id);
                                $state.go('dashboard');
                            },
                            function error(error) {
                                Log.error("Failed to retrieve userinfo. Reason: " + error);
                                $state.go('login');
                            }
                        );
                    }

                    switch (Auth.state.get()) {
                        case Auth.state.STATES.SIGNED_IN: {
                            // This should never happen unless you redirect here
                            $state.go('dashboard');
                            break;
                        }

                        case Auth.state.STATES.VERIFIED: {
                            userinfo();
                            break;
                        }

                        case Auth.state.STATES.VERIFICATION: {
                            if (Auth.authorize($stateParams)) {
                                userinfo();
                            } else {
                                Log.error('login', "Failed to authorize with provided OpenID parameters.");
                                $state.go('login');
                            }

                            break;
                        }

                        case Auth.state.STATES.SIGNED_OUT: {
                            Log.error('login', "Auth service is in invalid state.");
                            $state.go('login');
                            break;
                        }
                    }


                }
            });
    });
