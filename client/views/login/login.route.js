'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/views/login/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    LoginCtrl: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/views/login/login.controller.js');
                    }
                }
            })
            .state('logout', {
                url: '/logout',
                template: '<h3> Logging out </h3>',
                controller: function ($state, Auth) {
                    Auth.logout();
                    $state.go('login');
                }
            });
    });
