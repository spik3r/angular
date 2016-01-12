'use strict';

angular.module('ei.console')
  .service('Redshift', function ($resource) {

    var actions = {
      'test': {
        method: 'GET',
        isArray: false
      }
    };

    return $resource('http://localhost:8080/api/rest/test', {}, actions);
  });
