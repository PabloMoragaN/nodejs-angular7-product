//Archivo de configuracion del server
const express = require('express');
const cors = require('cors');


//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


module.exports = app => {
    //settings del server
    app.set('port', process.env.PORT || 3000);

    //middleware
    app.use(cors());
    app.use(express.json());



};