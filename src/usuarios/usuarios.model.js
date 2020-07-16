"use strict";

const Sequelize = require("sequelize");

const sequelize = require("../../services/db");
const Model = Sequelize.Model;

class Usuarios extends Model {};

Usuarios.init({
    id: { type: Sequelize.INTEGER, primaryKey: true, allowNull: true },

    nome: { type: Sequelize.STRING, allowNull: false },

    login: { type: Sequelize.STRING, allowNull: false },
    senha: { type: Sequelize.STRING, allowNull: false },

    dh_inclusao: { type: Sequelize.DATE, allowNull: true },
    dh_desativacao: { type: Sequelize.DATE, allowNull: true }
}, {
    hooks: {
        beforeCreate: (record, options) => {
            record.id = sequelize.fn("nextval", "sistema.usuarios_id_seq");
            record.dh_inclusao = new Date();
        },
        beforeUpdate: (record, options) => {
            record.dh_inclusao = new Date();
        }
    },
    sequelize,
    modelName: "usuarios",
    schema: "sistema",
    timestamps: false,    
});

module.exports = Usuarios;