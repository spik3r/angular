'use strict';

angular.module('ei.console', [
        'ui.router',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'oc.lazyLoad'
    ])
    // Possible states of LOG_LEVEL:
    // none - no output at all
    // info - only say, error and info output
    // warn - say, error, info and warn output
    // debug - all possible outputs (messes up testing with extra logging)
    .constant('LOG_LEVEL', 'debug')
    .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
        // Set location provider to use html5Mode
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('root', {
                url: '/',
                template: '<h1> Root </h1>'
            });

        // Temporary state
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

            console.log("State Params", $stateParams);

                    if (!Auth.authorize($stateParams)) {
                        console.log("Unauthorized");
                        $state.go('login');
                    } else {
                        console.log("Authorized");
                    }
                }
            });
    })
    .run(function () {
    });
