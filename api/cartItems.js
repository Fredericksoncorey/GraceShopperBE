const express = require('express');
const cartRouter = express.Router();
const authenticated = require('./auth');
const { deleteCartItem } = require('../db');

cartRouter.delete('/:productId', authenticated, async (req, res, next) => {
    try {
        const _product = await getProductById(req.params.productId);
        if (_product.creatorId === req.user.id) {
            const deleteProduct = await destroyProduct(_product.id);
            res.send(deleteProduct);
        }
    } catch (error) {
        next(error);
    }
});