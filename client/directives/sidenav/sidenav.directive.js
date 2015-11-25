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

                // Get current route and activate relevant link;
                scope.currentRoute = $route.current.$$route.originalPath.split("/")[1];

                element.find("#menu-" + scope.currentRoute).addClass("active");

                var target;
                var path;
                element.find('.menu-item').on('click', function (event) {
                    target = event.currentTarget.id;
                    // Remove active status from every tab
                    element.find(".menu-item").removeClass('active');

                    // Add active status to clicked tab
                    element.find("#" + target).addClass('active');

                    path = '/' + target.split('-')[1];

                    element.find("#sidenav").addClass("untoggled");
                    element.find("#sidenav-toggle").addClass("toggled");
                    event.stopPropagation();

                    if (path == "/dashboard" || path == "/logout" || path == "/settings") {

                        $timeout(function () {

                            Log.say('sidenav', 'Redirect to: ' + path);
                            $location.path(path);

                            scope.currentRoute = path.split("/")[1];
                            scope.$digest();

                        }, 50);
                    }
                });


                $(document).bind('click', function (event) {
                    toggle();
                });

                $(document).bind('touchstart', function (event) {
                   toggle();
                });


                function toggle() {
                    if(element.find(event.target).length > 0) {
                        element.find("#sidenav").removeClass("untoggled");
                        element.find("#sidenav-toggle").removeClass("toggled");
                    } else {
                        element.find("#sidenav").addClass("untoggled");
                        element.find("#sidenav-toggle").addClass("toggled");
                    }
                }

            }
        };
    });
