"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { rotas } = require("./rotas"); 

const app = () => {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    rotas(app);
    
    return app;
}

module.exports = { 
    app 
}