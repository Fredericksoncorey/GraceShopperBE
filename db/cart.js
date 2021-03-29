const client = require('./client.js');

async function createShoppingCart({userId}){
    //console.log(id)
    try {
    const { rows: [ cart ] } = await client.query(`
        INSERT INTO cart("userId") 
        VALUES($1)
        RETURNING *;
    `, [userId]);
    //console.log(id)
    return cart
    } catch (error) {
    throw error;
    }

}

async function getCartByUserId(id) {
    //console.log('in function')
    //console.log(id)
       try {
           const { rows: [cartId] } = await client.query(`
           SELECT id
           FROM cart
           WHERE "userId"=${id};
           `);
           //console.log(cartId)
           const {rows: cartItems } = await client.query(`
           SELECT *
           FROM cart_items
           WHERE "cartId"= ${cartId.id}
           `);
           //console.log(cartItems)
           return cartItems
       } catch (error) {
           throw error;    
       }
   }

module.exports = {
    createShoppingCart,
    getCartByUserId
    }