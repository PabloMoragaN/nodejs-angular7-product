module.exports = (sequelize, DataType) => {


    const Products = sequelize.define('Products', {

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        descripcion: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        precio: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        imagen: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });


    //Metodo associate
    Products.associate = (models) => {

        Products.belongsTo(models.Users); //Relacion de muchos a uno. Muchas tareas a un usuario

    }
    return Products;

}