const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/dbcontext");

class Supplier extends Model {}

Supplier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    cnpj: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    address : {
        type: DataTypes.STRING,
    },
    email : {
        type: DataTypes.STRING,  
    },
}, {
    sequelize,
    modelName: "supplier",
    timestamps: false
});

module.exports = Supplier