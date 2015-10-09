'use strict';

angular.module('angularSeed')
  .service('PhotoEdit', function () {
    var isOpen = false;
    return {
      init : function(){
        if(!isOpen){
          console.log(isOpen);
          var dkrm = new Darkroom('#profile-pic img', {
            // Size options
            minWidth : 100,
            minHeight : 100,
            maxWidth : 600,
            maxHeight : 500,
            ratio : 4 / 3,
            backgroundColor : '#000',

            // Plugins options
            plugins : {
              //save: false,
              crop : {
                quickCropKey : 67, //key "c"
                //minHeight: 50,
                //minWidth: 50,
                //ratio: 4/3
              },
              save : {
                callback : function(){
                  // get rid of the toolbar and finalize
                  this.darkroom.selfDestroy();
                  isOpen = false;
                  var newImage = dkrm.canvas.toDataURL();

                  // Set your data that will be sent to reflect this change

                  console.log('saved:');
                  console.log(newImage);
                }
              }
            },

            // Post initialize script
            initialize : function(){
              var cropPlugin = this.plugins['crop'];
              // cropPlugin.selectZone(170, 25, 300, 300);
              cropPlugin.requireFocus();
            }
          });
          isOpen = true;
        }
      }
    }
  });
