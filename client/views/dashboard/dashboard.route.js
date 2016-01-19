'use strict';

angular.module('ei.console')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/views/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                resolve: {
                    Auth: 'Auth',
                    userinfo: function ($state, Auth, Log) {
                        var deferred = $q.defer();

                        Auth.getUserInfo().then(
                            function success() {
                                Log.debug('login', 'Successfully retrieved userinfo.');
                                deferred.resolve();
                            },
                            function error() {
                                Log.error("login", "Not enough permissions or invalid Auth service state.");
                                $state.go('login');
                                deferred.reject();
                            }
                        );

                        return deferred.promise;
                    }
                }
            });
    });
