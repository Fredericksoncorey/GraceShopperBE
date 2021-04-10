const client = require('./client.js');

async function getCartItems({userId}) {
    try {
        const{rows: cartItems} = await client.query(`
        SELECT *
        FROM cart_items
        WHERE "cartId" = ${userId}
        `)
    return cartItems
    } catch (error) {
    throw error;
    }
}

async function createCartItem({userId, productId, quantity}){
    //console.log(id)
    try {
    const { rows: [ item ] } = await client.query(`
        INSERT INTO cart_items("cartId", product, quantity) 
        VALUES($1, $2, $3)
        RETURNING *;
    `, [userId, productId, quantity]);
    console.log(item)
    return item
    } catch (error) {
    throw error;
    }
}

async function deleteCartItem({id}) {
    //console.log(id)
    try {
        const {rows: [item] } = await client.query(`
        DELETE FROM cart_items
        WHERE id=$1
        RETURNING *;
        `);
    return item 
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCartItem,
    deleteCartItem,
    getCartItems
    }