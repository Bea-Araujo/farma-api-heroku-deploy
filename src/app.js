// import express from 'express'
const express = require("express");
const sequelize = require("./config/dbcontext");
const Routes = require("./routes/App.routes")

let port = process.env.PORT || 3030;

const app = express();

sequelize.sync().then(() => console.log("database connect Successfully!!!"));

app.use(express.json());

app.use("/", Routes);

app.listen(path, () => {
    console.log(`Server started on port ${port}`);
})