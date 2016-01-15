'use strict';

angular.module('ei.console')
    .controller('LoginCtrl',
        function ($scope, Auth) {

            $scope.login = function () {
                Auth.authenticate();
            };

        });
