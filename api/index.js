const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

const cartRouter = require('./cart');
apiRouter.use('/cart', cartRouter);

const productsRouter = require('./products');
apiRouter.use('/products', productsRouter);

const reviewsRouter = require('./reviews');
apiRouter.use('/reviews', reviewsRouter);

const ordersRouter = require('./orders');
apiRouter.use('/rorders', ordersRouter);
