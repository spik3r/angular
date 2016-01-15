'use strict';

angular.module('ei.console', [
        'ui.router',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'oc.lazyLoad'
    ])
    .config(function ($locationProvider, $urlRouterProvider) {
        // Set location provider to use html5Mode
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/404');
    })
    .run(function () {
    });
