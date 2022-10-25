'use strict'

let Controller = require('../controllers/controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/', Controller.getHome)

module.exports = router;