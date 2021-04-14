const express = require('express');
const productsRouter = express.Router();
const { getProductsByArtist, getProductsByTitle, getAllProductsWithReviews, getProductsByGenre, createProduct, updateProduct, getProductById, destroyProduct} = require('../db/products');
const { getReviewsByProductId } = require('../db/reviews');
const admin = require('./administrator');

productsRouter.get('/', async (req, res, next) => {
    try {
        const products = await getAllProductsWithReviews();
        console.log(products)
        res.send(
            products
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.get('/genre/:genre', async (req, res, next) => {
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

productsRouter.get('/artist/:artist', async (req, res, next) => {
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

productsRouter.get('/title/:title', async (req, res, next) => {
    const { title } = req.params;
    console.log(title)
    try {
        const productsByTitle = await getProductsByTitle(title)
        res.send(
            productsByTitle
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
    const { title, imageLink, artist, genre, releaseDate, description, price, quantity} = req.body;
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
    const update = {};

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
            const updatedProduct = await updateProduct(productId, update)
            res.send(updatedProduct)
        
    } catch (error) {
        next(error);
    }
});

productsRouter.delete('/:productId', admin, async (req, res, next) => {
    const {productId} = req.params
    try {
        //const productToDelete = await getProductById(productId);
        const deletedProduct = await destroyProduct(productId);
        if(!deletedProduct){
            res.send(
            {error: "PostNotFoundError",
            message: "Product by that ID does not exist"}
            )
        }
        res.send(deletedProduct);
    } catch (error) {
        next(error);
    }
});

module.exports = productsRouter;