'use strict';

angular.module('eiFrontend')
  .service('Sidenav',
  [
    function () {
      return {
        active: true,
        displayed: false,
        setActive: function (bool) {
          this.active = bool;
        },
        show: function () {
          this.displayed = true;
        },
        hide: function () {
          this.displayed = false;
        },
        toggle: function () {
          this.displayed = !this.displayed;
          /* jshint ignore:start */
          $('body').stop().toggleClass('sp-toggle-sidebar', 300);
          /* jshint ignore:end */
        }
      };
    }]);
