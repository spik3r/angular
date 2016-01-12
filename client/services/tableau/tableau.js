'use strict';

angular.module('ei.console')
  .service('Tableau', function ($window) {

    var workbook, activeSheet, viz;

    var init = function (id) {
      var element = document.getElementById(id);
      var url = "http://public.tableau.com/views/WorldIndicators/GDPpercapita";
      var options = {
        width: element.offsetWidth - 100,
        height: 500,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
          workbook = viz.getWorkbook();
          activeSheet = workbook.getActiveSheet();
        }
      };

      viz = new $window.tableau.Viz(element, url, options);
    };

    return {
      init: init
    }
  });
