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
                controller: function ($state, $stateParams, Auth) {
                    if (!Auth.authorize($stateParams)) {
                        console.log("Unauthorized");
                        $state.go('login');
                    } else {
                        console.log("Authorized");

                        Auth.getUserInfo().then(
                            function success(user) {
                                console.log(user);
                            },
                            function error(error) {
                                console.log(error);
                            }
                        );
                    }
                }
            });
    });
