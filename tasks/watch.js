'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile scss if needed.
 * Reinject files
 */

var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var watch      = require('gulp-watch');
var inject     = require('gulp-inject');
var plumber    = require('gulp-plumber');
var sass       = require('gulp-sass');
var bowerFiles = require('main-bower-files');
var rs         = require('run-sequence');

module.exports = function () {

  livereload.listen();

  // Watch CSS files and update if required
  watch([
    'client/styles/**/*.scss',
    'client/views/**/*.scss',
    'client/directives/**/*.scss'
  ], function () {
  	console.log("CSS files changed");
  });
};
