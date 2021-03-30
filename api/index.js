const express = require('express');
const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
    console.log("A request is being made to /api"); 
    next()
});

apiRouter.use(async (req, res, next) => { // for bearer token
    const prefix = 'Bearer ';
    const auth = req.header('Authorization');

    if (!auth) {
        next();
    } else if (auth.startsWith(prefix)) {
        const token = auth.slice(prefix.length);

        try {
            const { id } = jwt.verify(token, JWT_SECRET);

            if (id) {
                req.user = await getUserById(id);
                next();
            }
        } catch ({ name, message }) {
            next({ name, message });
        }
    } else {
        next({
            name: 'AuthorizationHeaderError',
            message: `Authorization token must start with ${prefix}`
        })
    }
})

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

module.exports = apiRouter
