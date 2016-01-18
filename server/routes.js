'use strict';

var config = require('./config/environment');
var request = require('request');

module.exports = function (app) {

    // API
    app.route('/:url(api|app|bower_components|assets)/*')
        .get(function (req, res) {
            res.status(404).end();
        });

    app.route('/*')
        .get(function (req, res) {
            res.sendFile(
                app.get('appPath') + '/index.html',
                {root: config.root}
            );
        });

    app.route('/send')
        .post(function (req, res) {
            // Set the headers
            var headers = {
                'Authorization': 'guvera e758ab96530ead0306f3e9c130f5330f-us9',
                'Content-Type': 'application/json'
            };

            // Configure the request
            var options = {
                url: 'http://us9.api.mailchimp.com/3.0/lists/b64ed421e5/members',
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "email_address": req.body.email,
                    "status": "subscribed",
                    "merge_fields": {
                        "UTYPE": req.body.user,
                        "STYPE": req.body.type || ""
                    }
                })
            };

            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.sendStatus(200);
                } else if (response.statusCode == 400) {
                    console.log(body);
                    res.status(400).send(body);
                } else {
                    res.sendStatus(500);
                }
            });

        });
};
