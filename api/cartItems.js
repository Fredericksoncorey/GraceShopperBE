const express = require('express');
const cartItemsRouter = express.Router();
const authenticated = require('./auth');
const { deleteCartItem, createCartItem, getCartItems } = require('../db');

console.log('request is being made to cartItemsRouter')

cartItemsRouter.get('/:userId', async (req, res, next ) => {
    console.log('req.params: ', req.params)
    try {
        const response = await getCartItems(req.params);
        console.log('cart items: ', response)
        res.send(response) 
    } catch (error) {
        next(error);
    }
})


cartItemsRouter.delete('/:id', authenticated, async (req, res, next) => {
    console.log(req.params)
    try {
        const _product = await deleteCartItem(req.params.id);
        
        res.send(_product)
    } catch (error) {
        next(error);
    }
});

cartItemsRouter.post('/', authenticated, async (req, res, next) => {
console.log("cartItemsRouter.post; req.body: ", req.body)
 const {userId, productId, quantity} = req.body
 try{
     const newCartItem = {userId, productId, quantity}
     const response = await createCartItem(newCartItem)
     res.send(response)
 }catch(error) {
  next(error)
 }
})

module.exports = cartItemsRouter
