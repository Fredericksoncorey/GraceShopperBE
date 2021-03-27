const express = require('express');
const ordersRouter = express.Router();
const authenticated = require('./auth');
const { getAllOrders } = require('../db/orders');

ordersRouter.get('/', authenticated, async (req, res) => {
    try {
        const orders = await getAllOrders();

        res.send(
            orders
        );
    } catch (error) {
        next(error);
    }
});

module.exports = ordersRouter;