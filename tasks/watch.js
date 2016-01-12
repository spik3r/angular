'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile scss if needed.
 * Reinject files
 */

var gulp        = require('gulp');
var bsync       = require('browser-sync');
var inject      = require('gulp-inject');
var plumber     = require('gulp-plumber');
var sass        = require('gulp-sass');
var bowerFiles  = require('main-bower-files');
var gaze        = require('gaze');
var uncss       = require('gulp-uncss');

var toInject    = require('./config/filesToInject');
var toExclude   = require('./config/bowerFilesToExclude');

module.exports = function () {

    var coreFiles = [
        'client/index.html', 
        'client/app.js',
        'client/views',
        'client/views/**/*.html',
        'client/views/**/*.js',
        '!client/views/**/*.scss',
        '!client/views/**/*.spec.js',
        '!client/views/**/*.e2e.js',
        'client/directives',
        'client/directives/**/*.html',
        'client/directives/**/*.js',
        '!client/directives/**/*.spec.js',
        'client/services',
        'client/services/**/*.js',
        '!client/services/**/*.spec.js',
        'client/animations',
        'client/animations/*.js',
        'client/filters',
        'client/filters/**/*.js',
        '!client/filters/**/*.spec.js',
        'tasks/config/filesToInject'
    ];

    bsync.init({
        proxy: "http://127.0.0.1:9000",
        port: 9001,
        ui: {
            port: 9002
        },

        ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
        },

        logPrefix: "Browser Sync",
        logFileChanges: true,
        open: false, // Open it when nodemon runs instead.
        online: false,
        reloadOnRestart: true,
        // Inject CSS changes
        injectChanges: true
    });

    // Watch all .scss files/dirs in process.cwd()
    gaze(['client/styles/app.scss',
          'client/styles/**/*.scss',
          'client/views/**/*.scss',
          'client/directives/**/*.scss'], 
      function(err, watcher) {
      // On changed/added/deleted
      this.on('all', function(event, filepath) {
        console.log("\n" + filepath + ' was ' + event);

        gulp.src('client/styles/app.scss')
            .pipe(plumber())
            .pipe(sass())
            .pipe(gulp.dest('client/styles/css'))
            .pipe(bsync.reload({ stream: true }));
      });
    });

    // Watch bower.json for new libraries
    gaze('bower.json', 
      function(err, watcher) {
      // On changed/added/deleted
      this.on('all', function(event, filepath) {
        console.log("\n" + filepath + ' was ' + event);

        gulp.src('client/index.html')
            .pipe(inject(gulp.src(bowerFiles(), { read: false }), {
                name: 'bower',
                relative: 'true',
                ignorePath: toExclude
            }))
            .pipe(gulp.dest('client'))
            .pipe(bsync.reload({ stream: true }));
      });
    });

    // Watch core files and reload browsers
    var lastInjection = Date.now();
    gaze(coreFiles, 
      function(err, watcher) {
      // On changed/added/deleted
      this.on('all', function(event, filepath) {
        console.log("\n" + filepath + ' was ' + event);

        if (Date.now() - lastInjection < 100) { return; }
        lastInjection = Date.now();
        gulp.src('client/index.html')
            .pipe(inject(gulp.src(toInject), { relative: true }))
            .pipe(gulp.dest('client'));

        bsync.reload();
      });
    });
};