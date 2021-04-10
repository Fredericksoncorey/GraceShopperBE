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

async function getReviewsByProductId(productId) {
    try {
      //do we need this one? or can we pass a product id in and match it to productId in reviews table below?
      // const { rows: [productId] } = await client.query(`
      // SELECT id
      // FROM products
      // WHERE "productId"=${id};
      // `);
      const {rows: reviews } = await client.query(`
      SELECT *
      FROM reviews
      WHERE "productId"= ${productId}
      `);
      //console.log(reviews)
      return reviews
    } catch (error) {
      throw error;
    }
}

module.exports = {
    createReview,
    getReviewsByProductId
    } 