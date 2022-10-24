'use strict'

let Controller = require('./controllers/controller.js'),
    express = require('express'),
    router = express.Router();

router
    .get('/', Controller.getHome)