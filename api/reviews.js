const express = require('express');
const reviewsRouter = express.Router();
const { getAllReviews } = require('../db/reviews');

reviewsRouter.get('/', async (req, res) => {
    try {
        const reviews = await getAllReviews();

        res.send(
            reviews
        );
    } catch (error) {
        next(error);
    }
});

//Need Create reviews

module.exports = reviewsRouter;