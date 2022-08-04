// import express from 'express'
const express = require("express");
const sequelize = require("./config/dbcontext");
const Routes = require("./routes/App.routes")

const app = express();

sequelize.sync().then(() => console.log("database connect Successfully!!!"));

app.use(express.json());

app.use("/", Routes);

app.listen(3030, () => {
    console.log("Server started on port 3030");
})