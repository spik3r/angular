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
    .config(function ($locationProvider, $urlRouterProvider) {
        // Set location provider to use html5Mode
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/404');
    });