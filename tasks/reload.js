'use strict';

/**
 * Run grunt build tasks
 */
var gulp                 = require('gulp');
var livereload		 = require('gulp-livereload');

module.exports = function () { livereload.reload(); }
