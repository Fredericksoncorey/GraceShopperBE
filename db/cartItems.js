const client = require('./client.js');

async function createCartItem({cartId, product, quantity}){
    //console.log(id)
    try {
    const { rows: [ item ] } = await client.query(`
        INSERT INTO cart_items("cartId", product, quantity) 
        VALUES($1, $2, $3)
        RETURNING *;
    `, [cartId, product, quantity]);
    //console.log(id)
    return item
    } catch (error) {
    throw error;
    }

}

module.exports = {
    createCartItem
    }