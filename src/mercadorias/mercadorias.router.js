"use strict";

const express = require("express");
const router = express.Router();
const jwt = require("../../services/jwt");
const controller = require("./mercadorias.controller");

router.get("/", jwt.authorize, controller.getAll);

module.exports = router;