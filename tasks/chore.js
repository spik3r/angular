'use strict';

/**
 * Git versioning and bump
 */

var gulp = require('gulp');
var fs   = require('fs');
var bump = require('gulp-bump');
var git  = require('gulp-git');
var clean = require ('gulp-clean');

module.exports = {

  version: function () {
    return gulp.src(['./package.json', './bower.json'])
      .pipe(bump({
        type: process.argv[3] ? process.argv[3].substr(2) : 'patch'
      }))
      .pipe(gulp.dest('./'));
  },

  bump: function () {
    fs.readFile('./package.json', function (err, data) {
      if (err) { return ; }
      return gulp.src(['./package.json', './bower.json'])
        .pipe(git.add())
        .pipe(git.commit('chore(core): bump to ' + JSON.parse(data).version));
    });
  },

  welcome: function () {
		fs.readFile('./package.json', function (err, data) {
    			console.log("\n\nWelcome!");
			console.log("This is angular-seed project v." + JSON.parse(data).version + "\n\n");
         	});
		
		// Return stream so task does not end before file access to
		// ./package.json happened
		return gulp.src(['./package.json']);
  },

  clean: function () {
	 	return gulp.src( ['build/', 'dist/'], {read: false}).pipe(clean());
	}
};
