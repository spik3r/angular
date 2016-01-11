'use strict';

/**
 * Service that manages sidenav state for different pages. In order to hide sidenav on a certain page,
 * this service needs to be included and sidenav set to active;
 *
 * @author ry
 * @date 26/11/2015
 */
angular.module('ei.console')
    .service('Sidenav',
        [
            '$rootScope',
            function ($rootScope) {

                // Sidenav is deactivated by default
                var active = false;

                return {
                    isActive:   function () { return active; },
                    activate:   function () {
                        active = true;
                        $rootScope.$broadcast("sidenav:activated");
                    },
                    deactivate: function () {
                        active = false;
                        $rootScope.$broadcast("sidenav:deactivated");
                    }
                };
            }]);
