'use strict';

angular.module('eiFrontend')
  .controller('IndexCtrl', function ($scope, $window, Sidenav) {
    // Link sidenav to scope
    $scope.sidenav = Sidenav;
    $window.sidenav = Sidenav;

    // Describe menu for sidenav directive
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
            path: '/dashboard/listener',
            role: 'user'
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
        path: '/settings',
        role: 'user'
      }
    ];
  });
