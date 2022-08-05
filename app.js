// import express from 'express'
const express = require("express");
const cors = require('cors')
const sequelize = require("./src/config/dbcontext");
const Routes = require("./src/routes/App.routes")

let port = process.env.PORT || 3000;

const app = express();
app.use(cors())

sequelize.sync().then(() => console.log("database connect Successfully!!!"));

app.use(express.json());

app.use("/", Routes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})