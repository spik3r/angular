'use strict';

/**
 * Run grunt build tasks
 */
var gulp                 = require('gulp');
var path                 = require('path');
var sq                   = require('streamqueue');
var runSequence          = require('run-sequence');

require("gulp-grunt")(gulp);

module.exports = function (done) {
  runSequence(
    ['grunt-build'],
    done);
};
