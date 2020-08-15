'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({ active: true }, 'title price slug').then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(400).send(err);
    });
};

exports.post = (req, res, next) => {
    let product = new Product(req.body);
    product.save().then(() => {
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }).catch((err) => {
        res.status(400).send({
            message: 'Falha ao cadastrar o produto!',
            data: err
        });
    });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id, 
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};