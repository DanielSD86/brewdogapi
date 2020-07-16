"use strict";

const repository = require("./usuarios.repository");
const jwt = require("../../services/jwt");

exports.login = async (req, res, next) => {
    const { login, senha } = req.body;

    try {
        const result = await repository.login(login, senha);

        if (!result) return res.status(400).json({ message: ["Usuário ou senha inválidos"] });
        
        const token = await jwt.generate({ login });

        return res.status(200).json({ token });
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const result = await repository.getAll();

        if (!result) return res.status(204).json([]);
        
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}

exports.getId = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await repository.getId(id);

        if (!result) return res.status(204).json([]);
        
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}

exports.create = async (req, res, next) => {
    const data = req.body;

    try {
        const result = await repository.create(data);        
        return res.status(201).json({ id: result.id });
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const result = await repository.update(id, data);     
        
        if (!result || result.length === 0) res.status(422).json();

        return res.status(200).json();
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}

exports.desactive = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await repository.desactive(id);     
        
        if (!result || result.length === 0) res.status(422).json();

        return res.status(200).json();
    } catch (e) {
        return res.status(500).json({ message: [e.message] });
    }
}