'use strict';

angular.module('eiFrontend')
  .controller('IndexCtrl', function ($rootScope, $scope) {
    // Sidebar configuration object
    $scope.sidebar = {
      active: true,
      displayed: false,
      setActive: function () { this.active = true; },
      show: function () { this.displayed = true; },
      hide: function () { this.displayed = false; },
      toggle: function () { $('body').stop().toggleClass('sp-toggle-sidebar', 300); }
    };

    // Sidebar menu object
    // Describe menu object
    $scope.menu = [
      {
        name: 'dashboard',
        fullName: "Dashboard",
        path: '/dashboard',
        dropdown: [
          {
            name: 'label',
            fullName: "Label Insigts",
            path: '/dashboard/label'
          },
          {
            name: 'track',
            fullName: "Track Insigts",
            path: '/dashboard/track'
          },
          {
            name: 'listener',
            fullName: "Listener Insigts",
            path: '/dashboard/listener'
          }
        ]
      },
      {
        name: 'channel',
        fullName: "Brand Channel",
        path: '/channel',
        dropdown: [
          {
            name: 'profile',
            fullName: 'Profile',
            path: '/channel/profile'
          },
          {
            name: 'playlists',
            fullName: 'Playlists',
            path: '/channel/playlists'
          },
          {
            name: 'content',
            fullName: 'Content',
            path: '/channel/content'
          }
        ]
      },
      {
        name: 'export',
        fullName: 'Export Data',
        path: '/export'
      },
      {
        name: 'billing',
        fullName: 'Billing',
        path: '/billing'
      },
      {
        name: 'settings',
        fullName: 'Settings',
        path: '/settings'
      }
    ];


  });
