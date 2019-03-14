//Archivo principal del servidor

const express = require('express');
const consign = require('consign');
const cors = require('cors');
const multer = require('multer');

/**
// SET STORAGE
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../assets/images')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage }) */


//CORS HEADERS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


const app = express();


consign({
    cwd: __dirname


}).include('libs/config.js').then('db.js').then('libs/middlewares.js').then('routes').then('libs/boot.js').into(app)

/** include-->config de DB,
 * then--> config de conexion a DB y los modelos,
 * then --> la configuracion del server/express ,
 *  then--> importa las rutas del express /peticiones GET POST DELETE PUT, 
 *  then--> inicializacion de los modelos y arranque del server 
 * into --> en el parametro app*/