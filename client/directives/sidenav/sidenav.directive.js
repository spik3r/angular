'use strict';

angular.module('eiFrontend')
    .directive('sidenav', function ($route, $rootScope, $location, $timeout, Log, Auth) {
        return {
            restrict: 'EA',
            transclude: true,
            scope: {
                active: '='
            },
            templateUrl: 'directives/sidenav/sidenav.html',
            link: function (scope, element) {
                // Links to toggled elements
                var button  = element.find('#nav-btn');
                var sidebar = element.find('#sidebar');
                var main    = element.find('main');
                var cover   = element.find('#cover');
                var items   = element.find("#menu li");

                // Get initial route and activate relevant menu item
                var currentRoute = $route.current.$$route.originalPath;
                activate(currentRoute);

                /**
                 * Function that toggles sidebar menu on mobile screen using CSS
                 * 'active' class on following elements: button, sidebar, main section
                 * and content cover.
                 */
                function toggle() {
                    button  .toggleClass('active');
                    sidebar .toggleClass('active');
                    main    .toggleClass('active');
                    cover   .toggleClass('active');
                }

                /**
                 * Function that activates menu item relevant to the given path.
                 * Returns last activated item, or false if item with given path cannot be found.
                 *
                 * @param path of the tab that needs to be activated
                 * @type {String}
                 */
                var found = false;
                function activate(path) {
                    items.removeClass('active');

                    for (var i=0; i < items.length; i++) {
                        // If menu item has desired path, set it as active
                        if (items[i].dataset.path === path) {
                            element.find(items[i]).addClass('active');
                            found = items[i];
                        }
                    }

                    if (!found) {
                        // Throw warning to console if menu item is not found
                        Log.warn('sidenav', "Cannot find menu item with path: " + path);
                    }
                    return found;
                }

                /**
                 * Click event handlers
                 */
                // Menu toggle click handlers
                button  .on('click', toggle);
                main    .on('click', function () {
                    if (main.hasClass('active')) {
                        toggle();
                    }
                });

                // Redirect click handler
                var path;
                items   .on('click touchend', function (event) {
                    // Get redirect path
                    path = event.currentTarget.dataset.path;
                    // Redirect
                    $location.path(path);
                    scope.$apply(); // Location path does not get updated without this line
                    // Activate relevant menu item
                    activate(path);
                    // Hide menu after a small delay
                    $timeout(function () {
                        // This if is needed to properly hide menu after redirect on mobiles
                        if (main.hasClass('active')) {
                            toggle();
                        }
                    }, 400);
                });

            }
        };
    });
