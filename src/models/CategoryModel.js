const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/dbcontext");

class Category extends Model {}

Category.init({
    name: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
   
}, {
    sequelize,
    modelName: "category",
    timestamps: false
});

module.exports = Category