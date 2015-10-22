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
            fullName: "Artists",
            path: '/dashboard/label',
            role: 'label'
          },
          {
            name: 'track',
            fullName: "Tracks",
            path: '/dashboard/track',
            role: 'label, artist'
          },
          {
            name: 'listener',
            fullName: "Listeners",
            path: '/dashboard/listener',
            role: 'label, artist'
          }
        ]
      },
      {
        name: 'users',
        fullName: 'Users & Brands',
        path: '/users',
        role: 'admin'
      },
      {
        name: 'approvals',
        fullName: 'Approval Requests',
        path: '/approvals',
        role: 'admin'
      },
      {
        name: 'channel',
        fullName: "Brand Channel",
        path: '/channel',
        role: 'brand',
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
        path: '/export',
        // TODO Figure out if this menu item is needed or not
        role: 'none'
      },
      {
        name: 'billing',
        fullName: 'Billing',
        path: '/billing',
        role: 'brand'
      },
      {
        name: 'settings',
        fullName: 'Settings',
        path: '/settings',
        role: 'user, admin'
      }
    ];
  });
