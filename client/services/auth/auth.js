'use strict';


angular.module('ei.console')
    .service('Auth',
            function () {
                return {
                    hello: function () {
                        var hello = "world";
                    }
                }
            });
