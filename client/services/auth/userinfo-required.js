'use strict';

/**
 * Userinfo resolve service
 */
angular.module('ei.console')
    .service('userinfo-required',
        function ($state, $q, Auth, Log) {

            var deferred = $q.defer();

            Auth.getUserInfo().then(
                function success() {
                    deferred.resolve();
                },
                function error() {
                    Log.error("login", "Not enough permissions or invalid Auth service state.");
                    $state.go('login');
                    deferred.reject();
                }
            );

            return deferred.promise;
        });
