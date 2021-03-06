const client = require('./client.js');
const {getProductPricebyId} = require('./products')

async function getCartItems({userId}) {
    try {
        const{rows: cartItems} = await client.query(`
        SELECT *
        FROM cart_items
        WHERE "cartId" = ${userId}
        `)

        cartItems.map(item => {
            console.log(item)
        })
        /* console.log(cartItems) 
        const productIds = cartItems.map(item=>{return item.product})
        const productIds.map(id=> )
        console.log(productIds) */
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

async function deleteCartItem(id) {
    //console.log(id)
    try {
        const {rows: [item] } = await client.query(`
        DELETE FROM cart_items
        WHERE id=${id}
        RETURNING *;
        `);
    return item 
    } catch (error) {
        throw error;
    }
}

async function updateQuantity(id, quantity) {
    /* console.log(id, quantity) */
    try {
        const { rows  } = await client.query(`
              UPDATE cart_items
              SET quantity=${quantity}
              WHERE id=${id}
              RETURNING *;
          `,);
        return rows
    } catch (error) {
        throw error;
    }
    
}



module.exports = {
    createCartItem,
    deleteCartItem,
    getCartItems,
    updateQuantity
    }