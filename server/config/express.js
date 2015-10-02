'use strict';

var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var config = require('./environment');

module.exports = function (app) {

  var env = config.env;

  app.set('view engine', 'html');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.use(morgan('dev'));

  if (env === 'development' || env === 'test') {
    app.use(express.static(path.join(config.root, 'build')));
    app.set('appPath', 'dist');
    app.use(require('errorhandler')());
  } else {
    app.use(express.static(path.join(config.root, 'dist')));
    app.set('appPath', 'dist');
  }

};
