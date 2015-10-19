'use strict';

angular.module('eiFrontend')
  .controller('ProfileCtrl', ['PhotoEdit', function (PhotoEdit) {
    var vm = this,
      photoEditInitalized;
    angular.extend(vm, {
      name: 'ProfileCtrl',
      initalizeDarkroom : function(){
        console.log(photoEditInitalized);
        PhotoEdit.init();
      }
    });

  }]);
