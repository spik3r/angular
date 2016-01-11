'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "/views/login/login.html"
            });
    });
