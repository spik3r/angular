'use strict';

var path = require('path');

var all = {
    env: process.env.NODE_ENV || 'development',
    root: path.normalize(__dirname + '/../../..')
};

switch (all.env) {
    case 'development': {
        all.port = process.env.PORT || 9000;
        break;
    }

    case 'testing': {
        all.port = process.env.PORT || 8080;
        break;
    }

    case 'production': {
        all.port = process.env.PORT || 80;
        break;
    }
}

module.exports = all;
