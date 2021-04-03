const express = require('express');
const reviewsRouter = express.Router();
const { createReview } = require('../db/reviews');
const authenticated = require('./auth');


reviewsRouter.post('/', authenticated, async (req, res, next) => {
    const { rating, review} = req.body;
    try {
        const newReview = { rating, review};
        const reviews = await createReview(newReview);
        res.send(reviews);
    } catch (error) {
        next(error);
    }
});

//Need Create reviews

module.exports = reviewsRouter;