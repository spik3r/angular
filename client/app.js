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
    // debug - all possible outputs
    .constant('LOG_LEVEL', 'warn')
    .config(function ($locationProvider, $urlRouterProvider) {
        // Set location provider to use html5Mode
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/404');
    })
    .run(function () {
    });
