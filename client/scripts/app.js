define(['common'], function (angularAMD) {
  'use strict';
  var app = angular.module('angularAmdSample', ['ui.router', 'ngResource']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', angularAMD.route({
        url: '/home',
        templateUrl: 'views/home.html',
        controllerUrl: 'controllers/main/home_ctrl'
      }))
      .state('rooms', angularAMD.route({
        url: '/rooms',
        templateUrl: 'views/rooms.html',
        controllerUrl: 'controllers/rooms/rooms_ctrl'
      }))
      .state('users', angularAMD.route({
        url: '/users',
        templateUrl: 'views/users.html',
        controllerUrl: 'controllers/users/users_ctrl'
      }))
    ;

    // Else
    $urlRouterProvider
      .otherwise('/home');


  }]);

  return angularAMD.bootstrap(app);
});
