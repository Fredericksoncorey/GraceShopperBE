const express = require('express');
const productsRouter = express.Router();
const { getProductsByArtist, getProductsByGenre, createProduct, updateProduct, getProductById, destroyProduct, getAllProductsWithReviews} = require('../db/products');
const { getReviewsByProductId } = require('../db/reviews');
const admin = require('./administrator');

productsRouter.get('/', async (req, res) => {
    try {
        const products = await getAllProductsWithReviews();

        res.send(
            products
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.get('/genre/:genre', async (req, res) => {
    const { genre } = req.params;
    try {
        const productsByGenre = await getProductsByGenre(genre)
        res.send(
            productsByGenre
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.get('/artist/:artist', async (req, res) => {
    const { artist } = req.params;
    console.log(req.params)
    try {
        const productsByArtist = await getProductsByArtist(artist)
        res.send(
            productsByArtist
        );
    } catch (error) {
        next(error);
    }
});

/* productsRouter.get('/reviews/:reviews', async (req, res) => { -----------------Probably won't need.
    const { productId } = req.params;
    try {
        const product = await getProductById(productId)
        const getProductReviews = await getReviewsByProductId(product)
        res.send(
            getProductReviews
        );
    } catch (error) {
        next(error);
    }
}); */

productsRouter.post('/', admin, async (req, res, next) => {
    const { title, artist, genre, releaseDate, description, price, quantity} = req.body;
    try {
        const newProduct = { title, imageLink, artist, genre, releaseDate, description, price, quantity};
        const products = await createProduct(newProduct);
        res.send(products); // ------------------I was Working HERE!!!
    } catch (error) {
        next(error);
    }
});

productsRouter.patch('/update/:productId', admin, async (req, res, next) => {
    const { productId } = req.params;
    const { title, imageLink, artist, genre, releaseDate, description, price, quantity } = req.body;
    if(!title && !imageLink && !artist && !genre && !releaseDate && !description && !price && !quantity ){
        res.send({message: "Error: Something went wrong! No update Data Received"})
    }
    const update = { id: productId };

    if (description) {
        update.description = description;
    }
    if (title) {
        update.title = title;
    }
    if (genre) {
        update.genre = genre;
    }
    if (artist) {
        update.artist = artist;
    }
    if (price) {
        update.price = price;
    }
    if (imageLink) {
        update.imageLink = imageLink;
    }
    if (releaseDate) {
        update.releaseDate = releaseDate;
    }
    if (quantity) {
        update.releaseDate = releaseDate;
    } 

    try {
            const updatedProduct = await updateProduct(update)
            res.send(updatedProduct)
        
    } catch (error) {
        next(error);
    }
});

productsRouter.delete('/:productId', admin, async (req, res, next) => {
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

module.exports = productsRouter;