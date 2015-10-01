define('rooms/chat_service',['app'], function (app) {
  'use strict';
  app.factory('ChatService', function () {
    // Simulate a service
    return {
      getRooms: function () {
        return 'From chat_service: Here is a list of rooms';
      }
    };
  });
});

define('rooms/rooms_ctrl',['rooms/chat_service'], function () {
  'use strict';
  return ['$scope', 'ChatService', function ($scope, ChatService) {
    $scope.message = 'Shows a list of chat rooms';
    $scope.rooms = ChatService.getRooms();
  }];
});

