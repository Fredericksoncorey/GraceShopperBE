const express = require('express');
const productsRouter = express.Router();
const { getProductsByArtist, getAllProducts, getProductsByGenre, createProduct, updateProduct, getProductById, destroyProduct } = require('../db/products');
const admin = require('./administrator');

productsRouter.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();

        res.send(
            products
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.get('/:genre', async (req, res) => {
    const { genreId } = req.params;
    try {
        const productsByGenre = await getProductsByGenre(genreId)
        res.send(
            productsByGenre
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.get('/:artist', async (req, res) => {
    const { artistId } = req.params;
    try {
        const productsByArtist = await getProductsByArtist(artistId)
        res.send(
            productsByArtist
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.post('/', admin, async (req, res, next) => {
    const { title, artist, genre, releaseDate, description, price, quantity} = req.body;
    try {
        const newProduct = { title, artist, genre, releaseDate, description, price, quantity};
        const products = await createProduct(newProduct);
        res.send(products);
    } catch (error) {
        next(error);
    }
});

productsRouter.patch('/:productId', admin, async (req, res, next) => {
    const { productId } = req.params;
    const { description, name, genre, artist, price } = req.body;
    const update = { id: productId };

    if (description) {
        update.description = description;
    }
    if (name) {
        update.name = name;
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