const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/dbcontext");

class Customer extends Model {}

Customer.init({
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
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: "customer",
    timestamps: false
});

module.exports = Customer

