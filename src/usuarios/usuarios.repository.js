"use strict";
 
const usuarios = require("./usuarios.model");

const getAll = async () => {
    return await usuarios.findAll({
        order: [["nome"]],
        raw: true,
        attributes: {
            exclude: ["senha"]
        }
    });
}

const getId = async (id) => {
    return await usuarios.findOne({
        where : {
            id: id
        },
        attributes: {
            exclude: ["senha"]
        },
        raw: true,
    });
}

const create = async (data) => {
    return await usuarios.create(data, {
        returning: true,
    });
}

const update = async (id, data) => {
    return await usuarios.update(data, {
        where : {
            id: id
        },
        individualHooks: true
    });
}

const desactive = async (id) => {
    return await usuarios.update({ dh_desativacao: new Date() }, {
        where : {
            id: id
        },
        individualHooks: true
    });
}

const login = async (login, senha) => {
    return await usuarios.findOne({
        where : {
            login: login,
            senha: senha
        },
        attributes: {
            exclude: ["senha"]
        },
        returning: true,
    });
}

module.exports = {
    getAll,
    getId,
    
    create,
    update,
    desactive,

    login,
}