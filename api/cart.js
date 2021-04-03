const express = require('express');
const cartRouter = express.Router();
const authenticated = require('./auth');
const { getProductById, destroyProduct} = require('../db/products');
const { updateCart, getCartByUserId} = require('../db/cart');

cartRouter.get('/:userId', async (req, res, next) => {
    try {
      const users = await getCartByUserId(req.params.userId);
      res.send(
        users
      );
    } catch (error) {
      next(error)
    }
});

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
            const updatedCart = await updateCart(update)
            res.send(updatedCart)
        }
    } catch (error) {
        next(error);
    }
});



module.exports = cartRouter;