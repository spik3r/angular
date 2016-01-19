'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/home/home.html',
                controller: 'HomeCtrl'
            });
    });
