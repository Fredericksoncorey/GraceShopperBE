const client = require('./client.js');

async function createOrder({userId, productId, quantity}){
    //console.log(id)
    try {
    const { rows: [ order ] } = await client.query(`
        INSERT INTO orders("userId", "productId", quantity) 
        VALUES($1, $2, $3)
        RETURNING *;
    `, [userId, productId, quantity]);
    //console.log(id)
    return order
    } catch (error) {
    throw error;
    }

}

module.exports = {
    createOrder
    }