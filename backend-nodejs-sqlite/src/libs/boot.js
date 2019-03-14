//Archivo de arranque del server
module.exports = app => {

    //Creacion de las tablas y ejecucion del server
    app.db.sequelize.sync().done(() => {

        app.listen(app.get('port'), () => {
            console.log('Server on port', app.get('port'));
        });

    });



};