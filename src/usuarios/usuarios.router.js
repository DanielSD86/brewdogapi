"use strict";

const express = require("express");
const router = express.Router();
const jwt = require("../../services/jwt");
const controller = require("./usuarios.controller");

router.get("/", jwt.authorize, controller.getAll);
router.get("/:id", jwt.authorize, controller.getId);
router.post("/", jwt.authorize, controller.create);
router.put("/:id", jwt.authorize, controller.update);
router.delete("/:id", jwt.authorize, controller.desactive);

module.exports = router;