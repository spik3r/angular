'use strict';

/**
 * Files injected into index.html by gulp-inject
 * used by tasks inject & watch
 */

module.exports = [
    'client/app.js',
    'client/services/log/log.js',
    'client/services/auth/auth.js',
    // 'client/index.controller.js',
    // 'client/animations/*.js',
     'client/directives/**/*.js', '!client/directives/**/*.spec.js',
    // 'client/filters/**/*.js', '!client/filters/**/*.spec.js',
    // 'client/services/**/*.js', '!client/services/**/*.spec.js',
    'client/views/**/*.js',
    '!client/views/**/*.spec.js',
    '!client/views/**/*.e2e.js'
];
