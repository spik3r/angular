'use strict';

var config = require('./config/environment');
var request = require('request');

module.exports = function (app) {

    // API
    app.route('/:url(api|app|bower_components|assets)/*')
        .get(function (req, res) {
            res.status(404).end();
        });

    app.route('/hello')
        .get(function (req, res) {

            res.sendStatus(300);

        });

    app.route('/*')
        .get(function (req, res) {
            res.sendFile(
                app.get('appPath') + '/index.html',
                {root: config.root}
            );
        });



};
