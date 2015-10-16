/**
 * Files injected into index.html by gulp-inject
 * used by tasks inject & watch
 */

module.exports = [
  'client/app.js',
  'client/index.controller.js',
  'client/animations/*.js',
  'client/directives/**/*.js', '!client/directives/**/*.spec.js',
  'client/filters/**/*.js', '!client/filters/**/*.spec.js',
  'client/services/**/*.js', '!client/services/**/*.spec.js',
  'client/views/**/*.js', '!client/views/**/*.spec.js', '!client/views/**/*.e2e.js',
  //block from global load
//this needs to NOT be loaded
  'client/services/photo-edit/*'
  //'!client/views/player/*.js'
];
