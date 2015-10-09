'use strict';

angular.module('angularSeed')
  .controller('ProfileCtrl', ['PhotoEdit', function (PhotoEdit) {
console.log('in control');
    var vm = this;
    angular.extend(vm, {
      name: 'ProfileCtrl',
      initalizeDarkroom : function(){
        console.log('clicked');
        PhotoEdit.init();
      }
    });

  }]);
