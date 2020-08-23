'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// exports.get = () => {
//     return Product.find({
//         active: true
//     }, 'title price slug');
// }

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

// exports.getBySlug = (slug) => {
//     return Product.findOne({ 
//         slug: slug,
//         active: true 
//     }, 'title description price slug tags');
// }

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({ 
        slug: slug,
        active: true 
    }, 'title description price slug tags');
    return res;
}

// exports.getById = (id) => {
//     return Product.findById(id);
// }

exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

// exports.getByTag = (tag) => {
//     return Product.find({
//         tags: tag,
//         active: true
//     }, 'title description price slug tags');
// }

exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,
        active: true
    }, 'title description price slug tags');
    return res;
}

// exports.create = (data) => {
//     let product = new Product(data);
//     return product.save();
// }

exports.create = async(data) => {
    let product = new Product(data);
    await product.save();
}

// exports.update = (id, data) => {
//     return Product.findByIdAndUpdate(id, {
//         $set: {
//             title: data.title,
//             description: data.description,
//             price: data.price,
//             slug: data.slug
//         }
//     });
// }

exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

// exports.delete = (id) => {
//     return Product.findOneAndRemove(id);
// }

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}