'use strict';

/**
 * Run grunt build tasks
 */
var gulp                 = require('gulp');
var path                 = require('path');
var sq                   = require('streamqueue');
var runSequence          = require('run-sequence');

require("gulp-grunt")(gulp);

module.exports = {
	build: function (done) { runSequence(['grunt-build'], done); },
	deploy: function (done) { runSequence(['grunt-deploy'], done); },
	clean: function (done) { runSequence(['grunt-clean'], done); },
	css: function (done) { runSequence(['grunt-css'], done); },
	html: function (done) { runSequence(['grunt-html'], done); }
};
