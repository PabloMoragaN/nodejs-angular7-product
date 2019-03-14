//archivo conexion BBDD

import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

//exportacion de la conf de la bbdd
module.exports = app => {
    const config = app.libs.config;

    if (!db) {
        const sequelize = new Sequelize(
            config.database, config.username, config.password, config.params
        );
        db = {
            sequelize,
            Sequelize,
            models: {}
        }

        //Para que sequelize recorra los modelos de la carpeta models y los lea/ejecute
        const dir = path.join(__dirname, 'models');
        fs.readdirSync(dir).forEach(filename => {
            const modelDir = path.join(dir, filename);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        //Ejecucion de las asociaciones
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        })

    }
    return db;
}