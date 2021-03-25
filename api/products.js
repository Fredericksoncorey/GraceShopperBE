const express = require('express');
const productsRouter = express.Router();
const { getAllProducts} = require('../db');

productsRouter.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();

        res.send(
            products
        );
    } catch (error) {
        next(error);
    }
});

module.exports = productsRouter;