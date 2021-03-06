'use strict';

/**
 * Git versioning, bump and dist clean task.
 */

var gulp = require('gulp');
var fs = require('fs');
var bump = require('gulp-bump');
var git = require('gulp-git');
var del = require('del');

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
            if (err) {
                return;
            }
            return gulp.src(['./package.json', './bower.json'])
                .pipe(git.add())
                .pipe(git.commit('chore(core): bump to ' + JSON.parse(data).version));
        });
    },

    clean: function (done) {
        del(['dist/**', '!dist', '!dist/.git{,/**}', 'dist'])
            .then(function () {
                done();
            }).catch(done);
    }
};
