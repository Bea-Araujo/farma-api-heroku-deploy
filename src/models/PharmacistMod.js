const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/dbcontext");

class Pharmacist extends Model {}

Pharmacist.init({
    name: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING,
    },
    crf: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    birthdate : {
        type: DataTypes.DATE,
    },
    gender : {
        type: DataTypes.STRING,
        
    },

    salary : {
        type: DataTypes.STRING,
    },

    comission : {
        type: DataTypes.STRING,
    },

    workHours : {
        type : DataTypes.INTEGER,
    },

    email : {
        type: DataTypes.STRING,
    }

}, {
    sequelize,
    modelName: "pharmacist",
    timestamps: false
});

module.exports = Pharmacist