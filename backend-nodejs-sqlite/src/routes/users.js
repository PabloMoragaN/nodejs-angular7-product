//configuracion de http://localhost:3000/users
module.exports = app => {
    const Users = app.db.models.Users;


    /*PARA TODOS USERS */
    app.route('/users')
        //Get users
        .get((req, res) => {
            //findAll metodo de sequelize para getAllUsers
            Users.findAll({}).then(result => res.json(result)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })
        //Create users
        .post((req, res) => {
            Users.create(req.body) //El create es de sequelize para insertar datos (INSERT INTO ...)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message })
                });
        });


    /*PARA UN UNICO USER*/

    app.route('/users/:id')
        //Get un solo user
        .get((req, res) => {
            //findOne metodo de sequelize para getUsuariobyID

            Users.findById(req.params.id, {
                attributes: ['id', 'name', 'email'] //atributos que quieres del usuario
            }).then(result => res.json(result)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })
        .put((req, res) => {
            //update metodo de sequelize para updateUser
            //nos devuelve el codigo de estado, no nos devuelve el objeto updateado

            Users.update(req.body, { where: req.params }).then(result => res.sendStatus(204)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })
        .delete((req, res) => {
            //destroy metodo de sequelize para deleteUser
            //nos devuelve el codigo de estado, no nos devuelve el objeto updateado

            Users.destroy({ where: req.params }).then(result => res.sendStatus(204)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })


}