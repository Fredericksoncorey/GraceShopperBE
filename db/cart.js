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

const updateCart = async ({ quantity }) => {
    try {
        const { rows: [cart] } = await client.query(`
            UPDATE cart
            SET quantity=$1
            WHERE id=${id}
            RETURNING *;
        `, [quantity]);
        return cart;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createShoppingCart,
    updateCart
    }