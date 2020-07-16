"use strict";

const axios = require("axios");
const { punkApiConfig } = require("../config/api.external");

const punkApi = axios.create({ 
    baseURL: punkApiConfig("v2").url,
});

module.exports = {
    punkApi
};