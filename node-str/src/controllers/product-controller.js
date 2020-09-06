'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');
const azure = require('azure-storage');
const guid = require('guid');
var config = require('../config');

// exports.get = (req, res, next) => {
//     repository.get()
//         .then((data) => {
//             res.status(200).send(data);
//         }).catch((err) => {
//             res.status(400).send(err);
//         });
// };

exports.get = async(req, res, next) => {
    try{
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

// exports.getBySlug = (req, res, next) => {
//     repository.getBySlug(req.params.slug)
//         .then((data) => {
//             res.status(200).send(data);
//         }).catch((err) => {
//             res.status(400).send(err);
//         });
// };

exports.getBySlug = async(req, res, next) => {
    try{
        let data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

// exports.getById = (req, res, next) => {
//     repository.getById(req.params.id)
//         .then((data) => {
//             res.status(200).send(data);
//         }).catch((err) => {
//             res.status(400).send(err);
//         });
// };

exports.getById = async(req, res, next) => {
    try{
        let data =  await repository.getById(req.params.id);    
        res.status(200).send(data);
    } catch (e) {    
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }    
};

// exports.getByTag = (req, res, next) => {
//     repository.getByTag(req.params.tag)
//         .then((data) => {
//             res.status(200).send(data);
//         }).catch((err) => {
//             res.status(400).send(err);
//         });
// }

exports.getByTag = async(req, res, next) => {
    try{
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    }catch (e) {    
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }    
};

// exports.post = (req, res, next) => {
//     let contract = new ValidationContract();
//     contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
//     contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
//     contract.hasMinLen(req.body.description, 3, 'O description deve conter pelo menos 3 caracteres');

//     // Se os dados forem inválidos
//     if (!contract.isValid()) {
//         res.status(400).send(contract.errors()).end();
//         return;
//     }

//     repository.create(req.body)
//         .then(() => {
//             res.status(201).send({
//                 message: 'Produto cadastrado com sucesso!'
//             });
//         }).catch((err) => {
//             res.status(400).send({
//                 message: 'Falha ao cadastrar o produto!',
//                 data: err
//             });
//         });
// };

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'O description deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        // Cria o Blob Service
        // const blobSvc = azure.createBlobService(config.containerConnectionString);

        // let filename = guid.raw().toSring() + '.jpg';
        // let rawdata = req.body.image;
        // let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        // let type = matches[1];
        // let buffer = new Buffer(matches[2], 'base64');

        // // Salva a imagem
        // await blobSvc.createBlockBlobFromText('product-images', filename, buffer, {
        //     contentType: type
        // }, function (error, result, response) {
        //     if (error) {
        //         filename = 'default-product.png'
        //     }
        // });

        // await repository.create(req.body);
        await repository.create({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: true,
            tags: req.body.tags,
            image: 'path do arquivo' + filename
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });    
    } catch (e) {    
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    } 
};

// exports.put = (req, res, next) => {
//     const id = req.params.id;
//     res.status(200).send({ 
//         id: id, 
//         item: req.body
//     });
// };

// exports.put = (req, res, next) => {
//     repository.update(req.params.id, req.body)
//         .then(x => {
//             res.status(200).send({
//                 message: 'Produto atualizado com sucesso!'
//             });
//         }).catch(e => {
//             res.status(400).send({
//                 message: 'Falha ao atualizar produto',
//                 data: e
//             });
//         });
// };

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {    
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    } 
};

// exports.delete = (req, res, next) => {
//     res.status(200).send(req.body);
// };

// exports.delete = (req, res, next) => {
//     repository.delete(req.body.id)
//         .then(x => {
//             res.status(200).send({
//                 message: 'Produto removido com sucesso!'
//             });
//         }).catch(e => {
//             res.status(400).send({
//                 message: 'Falha ao remover produto',
//                 data: e
//             });
//         });
// };

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {    
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    } 
};
