"use strict";

const { punkApi } = require("../../services/api.external");

exports.getAll = async (req, res, next) => {
    try {
        //Parametros
        const limite = req.query["limite"];
        const pagina = req.query["pagina"];
        const filtro = req.query["filtro"];
        let params = "";

        if (limite) params += "&per_page=" + limite;
        if (limite && pagina) params += "&page=" + pagina;
        if (filtro) params += "&beer_name=" + String(filtro).replace(" ", "_");
        if (params !== "") params = "?" + params.substr(1);        

        await punkApi.get("beers" + params)
            .then(response => {
                if (!response.data) 
                    return res.status(204).json([]);   
                else
                    return res.status(200).json(response.data);
            }).catch(error => {
                return res.status(500).json({ message: [error.response.data.message] });
            });
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}