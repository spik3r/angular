'use strict';

angular.module('eiFrontend')
  .service('Redshift', function ($resource) {

    return $resource('http://localhost:8080/api/rest/test');

  });
