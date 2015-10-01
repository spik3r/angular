require.config({
  baseUrl: 'scripts/',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angularAMD': '../bower_components/angularAMD/angularAMD',
    'ngload': '../bower_components/angularAMD/ngload',
    'angular-resource': '../bower_components/angular-resource/angular-resource'
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angular-route': [ 'angular' ],
    'angularAMD': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'angular-resource': [ 'angular' ],
    'angular-ui-router': [ 'angular' ]
  },

  // kick start application
  deps: ['app']
});
