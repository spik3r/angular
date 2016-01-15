'use strict';

angular.module('ei.console')
    .service('Log', function (LOG_LEVEL) {
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
        // Possible states of LOG_LEVEL:
        // none - no output at all
        // info - only say, error and info output
        // warn - say, error, info and warn output
        // debug - all possible outputs
        return {
            say: function (author, text) {
                if (LOG_LEVEL !== 'none') {
                    console.log('[' + time() + ']' + ' (' + author + ')', text);
                }
            },
            error: function (author, text) {
                if (LOG_LEVEL !== 'none') {
                    console.error('[' + time() + ']' + ' (' + author + ')', text);
                }
            },
            info: function (author, text) {
                if (LOG_LEVEL === 'info' || LOG_LEVEL === 'warn' || LOG_LEVEL === 'debug') {
                    console.info('[' + time() + ']' + ' (' + author + ')', text);
                }
            },
            warn: function (author, text) {
                if (LOG_LEVEL === 'warn' || LOG_LEVEL === 'debug') {
                    console.warn('[' + time() + ']' + ' (' + author + ')', text);
                }
            },
            debug: function (author, text) {
                if (LOG_LEVEL === 'debug') {
                    console.debug('[' + time() + ']' + ' (' + author + ')', text);
                }
            }
        };
    });
