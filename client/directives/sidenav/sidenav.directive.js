'use strict';

angular.module('eiFrontend')
    .directive('sidenav', function ($route, $rootScope, $location, $timeout, Log, Auth) {
        return {
            restrict: 'EA',
            scope: {
                active: '='
            },
            templateUrl: 'directives/sidenav/sidenav.html',
            link: function (scope, element) {

                var expanded = element.hasClass('expanded');

                scope.role = Auth.user.role;

                // Get current route and activate relevant link;
                scope.currentRoute = $route.current.$$route.originalPath.split("/")[1];
                element.find("#menu-" + scope.currentRoute).addClass("active");
                element.find('.separator.' + scope.currentRoute).css('visibility', 'hidden');

                var target;
                var path;
                element.find('.menu-item').on('click', function (event) {
                    target = event.currentTarget.id;
                    // Remove active status from every tab
                    element.find(".menu-item").removeClass('active');

                    // Add active status to clicked tab
                    element.find("#" + target).addClass('active');

                    // Hide hr elements next to it
                    element.find('.separator').css('visibility', 'visible');
                    element.find('.separator.' + target.split('-')[1]).css('visibility', 'hidden');

                    path = '/' + target.split('-')[1];

                    element.find("#sidenav").addClass("untoggled");
                    element.find("#sidenav-toggle").addClass("toggled");
                    if (expanded) {
                        element.removeClass("expanded");
                        element.addClass("closed");

                        expanded = false;
                    }

                    event.stopPropagation();

                    $timeout(function () {

                        Log.say('sidenav', 'Redirect to: ' + path);
                        $location.path(path);

                        scope.currentRoute = path.split("/")[1];
                        scope.$digest();

                    }, 50);
                });

                element.find("#backdrop").on('click', function () {
                    if (expanded) {
                        element.removeClass("expanded");
                        element.addClass("closed");

                        expanded = false;
                    }
                });

                element.find("#sidenav-header #menu-icon").on('click', function () {
                   console.log("Header touched");

                    if (expanded) {
                        element.removeClass("expanded");
                        element.addClass("closed");

                        expanded = false;
                    } else {
                        element.removeClass("closed");
                        element.addClass("expanded");

                        expanded = true;
                    }
                });
            }
        };
    });
