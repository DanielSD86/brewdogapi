"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../usuarios/usuarios.controller");

router.post("/login", controller.login);

module.exports = router;