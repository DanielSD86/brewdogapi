"use strict";

const { app } = require("./config/app.js");

const porta = process.env.PORT || 3000;

app().listen(porta, function() {
    console.log("BrewDog Api", `Porta ${porta}!`);
});