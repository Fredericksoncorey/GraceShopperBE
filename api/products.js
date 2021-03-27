const express = require('express');
const productsRouter = express.Router();
const { getProductsByArtist, getAllProducts, getProductsByGenre, createProduct } = require('../db/products');
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
    const { productsId } = req.params;
    try {
        const products = await getAllProducts(productsId);
        const productsByGenre = await getProductsByGenre(products)
        res.send(
            productsByGenre
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.get('/:artist', async (req, res) => {
    const { productsId } = req.params;
    try {
        const products = await getAllProducts(productsId);
        const productsByArtist = await getProductsByArtist(products)
        res.send(
            productsByArtist
        );
    } catch (error) {
        next(error);
    }
});

productsRouter.post('/', admin, async (req, res, next) => {
    const { name, description, genre, artist} = req.body;
    try {
        const newProduct = { name, description, genre, artist };
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