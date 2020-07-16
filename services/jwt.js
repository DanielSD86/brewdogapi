"use strict";

const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

const generate = async (data) => {
    return jwt.sign(data, jwtConfig.token, { expiresIn: jwtConfig.expiresIn });
}

const decode = async (token) => {
    return jwt.verify(token, jwtConfig.token);
}

const authorize = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({ message: ["Acesso restrito"] });
    } else {
        jwt.verify(token, jwtConfig.token, function(error, decoded) {
            if (error) {
                return res.status(401).json({ message: ["Token inválido ou expirado"] });
            } else {
                req.headers["data_token"] = decoded;
                next();
            }
        });
    }
}

module.exports = {
    generate,
    decode,
    authorize,
}