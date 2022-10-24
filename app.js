'use strict'

let express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = (process.env.PORT || 3001),
    rest = require('method-override'),
    routes = require('.api/routes/routers.js'),
    viewDir = `${__dirname}/api/views`,
    publicDir = express.static(`${__dirname}/api/public`),
    app = express();

app
    .set('view engine','pug')
    .set('views', viewDir)
    .set('port', port)
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(rest('_method'))
    .use(morgan('dev'))
    .use(routes)
    .use(publicDir);

module.exports = app;