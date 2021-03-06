// Karma configuration
// Generated on Thu Oct 22 2015 14:10:29 GMT+1000 (AEST)
var bowerFilesToExclude = require('./tasks/config/bowerFilesToExclude.js');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        preprocessors: {
            "client/views/**/*.html": ["ng-html2js"],
            "client/directives/**/*.html": ["ng-html2js"]
        },

        ngHtml2JsPreprocessor: {
            // If your build process changes the path to your templates,
            // use stripPrefix and prependPrefix to adjust it.
            // stripPrefix: "source/path/to/templates/.*/",
            // prependPrefix: "web/path/to/templates/",

            // the name of the Angular module to create
            moduleName: "my.templates"
        },


        // list of files / patterns to load in the browser
        files: require('main-bower-files')({
            filter: function (path) {
                for (var i = 0; i < bowerFilesToExclude.length; i++) {
                    if (!/\.js$/.test(path) || new RegExp(bowerFilesToExclude[i]).test(path)) {
                        return false;
                    }
                }
                return true;
            }
        }).concat([
            'client/bower_components/angular-mocks/angular-mocks.js',
            'client/app.js',
            'client/views/**/*.js',
            'client/services/**/*.js',
            'client/directives/**/*.js',
            'client/directives/**/*.html',
            // 'client/filters/**/*.js'
        ]),


        // list of files to exclude

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}