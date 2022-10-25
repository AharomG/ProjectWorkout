'use strict'

let Model = require('../models/model.js'),
    AppController = () => {};

AppController.getHome = (req,res,next) => {
    res.sendFile('index.html',{root: 'dist/'});
}

module.exports = AppController;