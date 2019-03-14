const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
    //configuracion de http://localhost:3000/products
module.exports = app => {
    const Products = app.db.models.Products;


    /*PARA TODAS PRODUCTOS */
    app.route('/productos')
        //Get products
        .get((req, res) => {


            //findAll metodo de sequelize para getAllProducts
            Products.findAll().then(productsSeq => {
                res.json(productsSeq);
            }).catch(error => {
                res.status(412).json({ msg: error.message })
            });


        })
        //Create productos
        .post((req, res) => {
            Products.create(req.body) //El create es de sequelize para insertar datos (INSERT INTO ...)
                .then(productCreated => res.json(productCreated))
                .catch(error => {
                    res.status(412).json({ msg: error.message })
                });
        });




    /*PARA UN UNICO PRODUTO */

    app.route('/producto/:id')
        //Get una sola tarea
        .get((req, res) => {
            //findOne metodo de sequelize para getProductbyID

            Products.findOne({ where: req.params }).then(productID => res.json(productID)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        });
    app.route('/update-producto/:id').put((req, res) => {
        //update metodo de sequelize para updateTask
        //nos devuelve el codigo de estado, no nos devuelve el objeto updateado

        Products.update(req.body, { where: req.params }).then(result => res.sendStatus(204)).catch(error => {

            res.status(412).json({ msg: error.message })
        });


    });
    app.route('/delete-producto/:id').delete((req, res) => {
        //destroy metodo de sequelize para deleteTask
        //nos devuelve el codigo de estado, no nos devuelve el objeto updateado

        Products.destroy({ where: req.params }).then(result => res.sendStatus(204)).catch(error => {

            res.status(412).json({ msg: error.message })
        });


    })

    /** 
    //UPLOAD IMAGE
    app.route('/upload-file')
        //Get products
        .post(upload.single('avatar'), (req, res) => {
            //findAll metodo de sequelize para getAllProducts
            Products.findAll({}).then(result => res.json(result)).catch(error => {

                res.status(412).json({ msg: error.message })
            });
        });

     app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
         const file = req.file
         if (!file) {
           const error = new Error('Please upload a file')
           error.httpStatusCode = 400
           return next(error)
         }
           res.send(file)
         
       }) */


}