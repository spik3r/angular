'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/views/landing/landing.html',
                controller: 'LandingCtrl'
            });
    });
