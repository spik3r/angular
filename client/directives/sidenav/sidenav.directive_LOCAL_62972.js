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
                // Get current route
                scope.currentRoute = $route.current.$$route.originalPath.split("/")[1];

                // Get user role to display inside sidenav template
                scope.role = Auth.user.role;

                // Declare expand and close functions to manage state
                var expanded = element.hasClass('expanded');

                function close() {
                    element.removeClass("expanded");
                    element.addClass("closed");

                    expanded = false;
                }

                function expand() {
                    element.removeClass("closed");
                    element.addClass("expanded");

                    expanded = true;
                }

                // Function to make menu item look active
                function activate(route) {
                    // Deactivate all menu elements
                    element.find(".menu-item").removeClass("active");
                    // Activate required menu item
                    element.find("#menu-" + route).addClass("active");
                    // Hide relevant separators if needed
                    element.find('.separator').css('visibility', 'visible');
                    element.find('.separator.' + route).css('visibility', 'hidden');
                }

                // Declare navigate function
                // to navigate to menu states
                function navigate (path) {
                    console.log(path);

                    // Timeout is reqiured to prevent race conditions
                    $timeout(function () {
                        // Redirect
                        Log.say('sidenav', 'Redirect to: ' + path);
                        $location.path(path);
                        // Update current path variable
                        scope.currentRoute = path;
                        scope.$digest();

                        // Activate relevant menu item
                        activate(path);

                        // Hide menu if it is expanded (for mobiles)
                        if (expanded) {
                            close();
                        }
                    }, 50);
                }

                // Activate current route menu item
                activate(scope.currentRoute);

                // Navigation click handler
                var target;
                var path;
                element.find('.menu-item').on('click', function (event) {
                    // Get current target id
                    target = event.currentTarget.id;

                    // Navigate to the menu item path
                    navigate(target.split('-')[1]);

                    event.stopPropagation();
                });

                // Backdrop click handler
                element.find("#backdrop").on('click', function () {
                    close();
                });

                // Menu icon click handler
                element.find("#sidenav-header #menu-icon").on('click', function () {
                    if (expanded) {
                        close();
                    } else {
                        expand();
                    }
                });
            }
        };
    });
