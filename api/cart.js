const express = require('express');
const cartRouter = express.Router();
const authenticated = require('./auth');
const { getProductById, updateProduct } = require('../db');

routinesRouter.patch('/:productId', authenticated, async (req, res, next) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    const update = { id: productId };

    if (quantity) {
        update.quantity = quantity;
    }
    try {
        const { creatorId } = await getProductById(productId);
        if (creatorId === req.user.id) {
            const updatedProject = await updateProduct(update)
            res.send(updatedProject)
        }
    } catch (error) {
        next(error);
    }
});

module.exports = cartRouter;