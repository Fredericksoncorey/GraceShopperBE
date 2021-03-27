const express = require('express');
const cartRouter = express.Router();
const authenticated = require('./auth');
const { getProductById, updateProduct , destroyProduct} = require('../db/products');

cartRouter.patch('/:productId', authenticated, async (req, res, next) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    const update = { id: productId };

    if (quantity) {
        update.quantity = quantity;
    }
    try {
        const { creatorId } = await getProductById(productId);
        if (creatorId === req.user.id) {
            const updateCart = await updateProduct(update)
            res.send(updateCart)
        }
    } catch (error) {
        next(error);
    }
});

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

module.exports = cartRouter;