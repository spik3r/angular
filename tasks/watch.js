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

require('gulp-grunt')(gulp);

module.exports = function () {

  livereload.listen();

  // Watch HTML and JS files and rebuild when required
  watch([
    'client/**.js',
    'client/**.html',
    'client/**.css'
    ], function () {
  	rs('reload');
    });
};
