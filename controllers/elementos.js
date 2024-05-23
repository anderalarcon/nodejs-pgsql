const Product = require('../models/elemento');

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.getProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    const { nombre, descripcion } = req.body;
    try {
        const newProduct = await Product.createProduct(nombre, descripcion);
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProducts,
    createProduct
};