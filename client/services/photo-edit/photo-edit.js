'use strict';

angular.module('angularSeed')
  .service('PhotoEdit', function () {
    return {
      crop: function(){
        darkroom.crop();
      }
    }
  });
