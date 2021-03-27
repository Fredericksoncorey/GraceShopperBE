const client = require('./client.js');

async function createReview({userId, productId, review}){
    //console.log(userId, productId, review)
    try {
    const { rows: [ newReview ] } = await client.query(`
        INSERT INTO reviews("userId", "productId", review) 
        VALUES($1, $2, $3)
        RETURNING *;
    `, [userId, productId, review]);
    //console.log(id)
    return newReview
    } catch (error) {
    throw error;
    }

}

module.exports = {
    createReview
    }