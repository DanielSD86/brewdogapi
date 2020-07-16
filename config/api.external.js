"use strict";

const punkApiConfig = (versao) => {
    return {
        url: `https://api.punkapi.com/${versao}/`,
        token: "",
    }
}

module.exports = {
    punkApiConfig
};