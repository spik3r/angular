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
        role: 'admin, brand, label, artist, user',
        dropdown: [
          {
            name: 'label',
            fullName: "Artists",
            path: '/dashboard/artist',
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
            path: '/channel/profile',
            role: 'brand'
          },
          {
            name: 'playlists',
            fullName: 'Playlists',
            path: '/channel/playlists',
            role: 'brand'
          },
          {
            name: 'content',
            fullName: 'Content',
            path: '/channel/content',
            role: 'brand'
          }
        ]
      },
      {
        name: 'export',
        fullName: 'Export Data',
        path: '/export',
        // TODO Figure out if this menu item is needed or not
        role: 'label'
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
        role: 'user, admin, brand, label, artist'
      }
    ];
  });
