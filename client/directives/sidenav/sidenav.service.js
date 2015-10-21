'use strict';

angular.module('eiFrontend')
  .service('Sidenav',
  [
    function () {
      return {
        active: true,
        displayed: false,
        setActive: function () {
          this.active = true;
        },
        show: function () {
          this.displayed = true;
        },
        hide: function () {
          this.displayed = false;
        },
        toggle: function () {
          this.displayed = !this.displayed;
          $('body').stop().toggleClass('sp-toggle-sidebar', 300);
        }
      };
    }]);
