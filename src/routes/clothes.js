'use strict';

const express = require('express');

const { Clothes } = require('../models/index');

const clothesRouter = express.Router();

// RESTful Route Delectation 
clothesRouter.post('/clothes', createClothes);
clothesRouter.get('/clothes', getAllClothes);
clothesRouter.get('/clothes/:id', getClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);


async function createClothes(req, res) {
    let obj = req.body;
    let newClothes = await Clothes.create(obj );
    res.status(201).json(newClothes);
}


async function getAllClothes(req, res) {
    let allClothes = await Clothes.getAll();
    res.status(200).json(allClothes);
}


async function getClothes(req, res) {
    const id = parseInt(req.params.id);
    let findClothes = await Clothes.get(id);
    res.status(200).json(findClothes);
}




async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let obj = req.body;
    let updateClothes = await Clothes.update(id, obj);
    res.status(201).json(updateClothes);
}


async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let  deleteClothes = await Clothes.delete(id);
    res.status(204).json( deleteClothes);
}


module.exports = clothesRouter;


