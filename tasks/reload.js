'use strict';

/**
 * Run grunt build tasks
 */
var gulp                 = require('gulp');
var path                 = require('path');
var sq                   = require('streamqueue');
var runSequence          = require('run-sequence');
var livereload		 = require('gulp-livereload');

require("gulp-grunt")(gulp);

module.exports = function () {
	console.log('Refreshing page');
	livereload.reload();
}
