"use strict";

const Sequilize = require("sequelize");
const config = require("../config/db");

const sequelize = new Sequilize(
    "postgres://" + config.username +
    ":" + config.password +
    "@" + config.host +
    ":" + config.port +
    "/" + config.database, 
    { logging: config.log }
);

module.exports = sequelize;