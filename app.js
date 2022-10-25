'use strict'

let express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = (process.env.PORT || 3000),
    rest = require('method-override'),
    routes = require('./src/api/routes/routers.js'),
    viewDir = `${__dirname}/src`,
    app = express();

const path = require('path'),
      DIST_DIR = path.join(__dirname, './dist');

app
    .set('views', viewDir)
    .set('port', port)
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(rest('_method'))
    .use(morgan('dev'))
    .use(routes)
    .use(express.static(DIST_DIR));

module.exports = app;