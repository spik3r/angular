'use strict';

angular.module('eiFrontend')
    .directive('sidenav', function ($route, $rootScope, $location, $timeout, Log, Sidenav, Auth) {
        return {
            restrict: 'EA',
            scope: {
                menu: '='
            },
            templateUrl: 'directives/sidenav/sidenav.html',
            link: function (scope, element) {

                var currentRoute;
                (function activateCurrentRoute() {
                    // Get current route and activate relevant link;
                    var currentRoute = $route.current.$$route.originalPath.split("/")[1];

                    element.find("#menu-" + currentRoute).addClass("active");

                    scope.navigateTo = function (element) {
                        console.log(element);
                    };
                })();


                var target;
                var path;
                element.find('.menu-item').on('click', function (event) {

                    target = event.currentTarget.id;
                    // Remove active status from every tab
                    element.find(".menu-item").removeClass('active');

                    // Add active status to clicked tab
                    element.find("#" + target).addClass('active');

                    path = '/' + target.split('-')[1];

                    if (path == "/dashboard" || path == "/logout" || path == "/settings") {
                        $timeout(function () {

                            Log.say('sidenav', 'Redirect to: ' + path);
                            $location.path(path);
                        }, 50);
                    }
                });

                //// When route is changed, update current route
                //scope.$on('$routeChangeSuccess', function (event, route) {
                //    scope.currentRoute = route.$$route.originalPath;
                //});
                //
                //// When tab is clicked, redirect to that tab
                //scope.$on('activateTab', function (event, tab) {
                //    // Create redirect path from the tab name
                //
                //});

            }
        };
    });
