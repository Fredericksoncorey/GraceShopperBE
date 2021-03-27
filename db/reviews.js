const client = require('./client.js');

async function createReview({userId, productId, rating, review}){
    //console.log(userId, productId, review)
    try {
    const { rows: [ newReview ] } = await client.query(`
        INSERT INTO reviews("userId", "productId", rating, review) 
        VALUES($1, $2, $3, $4)
        RETURNING *;
    `, [userId, productId, rating, review]);
    //console.log(id)
    return newReview
    } catch (error) {
    throw error;
    }

}

module.exports = {
    createReview
    }