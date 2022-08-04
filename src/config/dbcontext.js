const Sequelize = require("sequelize");
const sequelize = new Sequelize("crud-db", "user", "password", {
  dialect: "sqlite",
  host: "./src/config/database.sqlite",
});

module.exports = sequelize;