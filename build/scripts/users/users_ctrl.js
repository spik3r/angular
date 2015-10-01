define('users/users_state',['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('users.list', {
        url: '/list',
        templateUrl: 'views/users/list.html'
      })
      .state('users.search', {
        url: '/search',
        templateUrl: 'views/users/search.html'
      })
      .state('users.favorites', {
        url: '/favorites',
        templateUrl: 'views/users/favorites.html'
      })
    ;

    // Else -- This is not working for some reason:
    $urlRouterProvider
      .when('/users', '/users/list');

  }]);

});

define('main/state_name',['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.directive('stateName', ['$state', function ($state) {
    return {
      restrict: 'A',
      link: function (scope, elm, attr) {
        var state = $state.current.name;

        if ('stateName' in attr) {
          state = attr.stateName + ' ' + state;
        }

        elm.text(state);
      }
    };
  }]);
});

define('users/users_ctrl',['users/users_state','main/state_name'], function () {
  'use strict';
  return ['$scope', function ($scope) {
    $scope.message = 'Comprehensive User List';
  }];
});

