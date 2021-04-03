const express = require('express');
const cartItemsRouter = express.Router();
const authenticated = require('./auth');
const { deleteCartItem } = require('../db');

cartItemsRouter.delete('/:productId', authenticated, async (req, res, next) => {
    try {
        const _product = await deleteCartItem(req.params.productId);
        
        res.send(_product)
    } catch (error) {
        next(error);
    }
});

module.exports = cartItemsRouter