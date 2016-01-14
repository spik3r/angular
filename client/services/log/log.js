'use strict';

angular.module('ei.console')
    .service('Log', function () {
        /* jshint ignore:start */
        // TODO Fix it to be simple method
        // Extend date prototype with timeNow function to get current time
        Date.prototype.timeNow = function () {
            return ((this.getHours() < 10) ? '0' : '') + this.getHours() + ':' + ((this.getMinutes() < 10) ? '0' : '') + this.getMinutes() + ':' + ((this.getSeconds() < 10) ? '0' : '') + this.getSeconds();
        };
        /* jshint ignore:end */

        // Return current time
        function time () {
            var dateNow = new Date();
            return dateNow.timeNow();
        }

        return {
            say: function (author, text) {
                console.log('[' + time() + ']' + ' (' + author + ')', text);
            },
            info: function (author, text) {
                console.info('[' + time() + ']' + ' (' + author + ')', text);
            },
            warn: function (author, text) {
                console.warn('[' + time() + ']' + ' (' + author + ')', text);
            },
            error: function (author, text) {
                console.error('[' + time() + ']' + ' (' + author + ')', text);
            },
            debug: function (author, text) {
                console.debug('[' + time() + ']' + ' (' + author + ')', text);
            }
        };
    });
