'use strict';

angular.module('gym.app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/home/home.html',
                controller: 'workoutCtrl'
            });
    });
