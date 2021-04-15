const express = require('express');
const ordersRouter = express.Router();
const authenticated = require('./auth');
const { getAllOrders, createOrders, createOrder, getOrderById } = require('../db/orders');

ordersRouter.get('/:Id', authenticated, async (req, res, next) => {
    console.log(req.params.Id)
    try {
        const orders = await getOrderById(req.params.Id);
        res.send(
            orders
        );
    } catch (error) {
        next(error);
    }
});

// authenticated,
ordersRouter.post('/', async (req, res, next) => {
    console.log(req.body)
    try {
        const order = await createOrder(req.body)
        res.send(order)
    } catch (error) {
        next(error)
    }
})

module.exports = ordersRouter;