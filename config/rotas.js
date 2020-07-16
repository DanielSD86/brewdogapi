"use strict";

const sistemasRouter = require('../src/sistemas/sistemas.router');
const usuariosRouter = require('../src/usuarios/usuarios.router');
const mercadoriasRouter = require('../src/mercadorias/mercadorias.router');

 const rotas = (app) => {    
    //CRUD Usuários 
    app.use("/:versao/usuarios/", usuariosRouter);
    //Punk Api
    app.use("/:versao/mercadorias", mercadoriasRouter);
    //Outros
    app.use("/:versao/", sistemasRouter);
}

module.exports = { rotas }