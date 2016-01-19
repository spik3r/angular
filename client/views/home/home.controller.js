'use strict';

angular.module('ei.console')
    .controller('HomeCtrl', function ($scope, $http) {
        // Define gender object for pie chart
        $scope.hello = function () {
            alert("Hello!");
        }

        $scope.sayHello = function () {
            $http.get('/hello').then(function success(){
                alert("Said Hello!");
            })
        }
    });
