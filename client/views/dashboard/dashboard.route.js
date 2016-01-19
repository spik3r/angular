'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/views/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                resolve: {
                    userinfo: "userinfo-required"
                }
            });
    });
