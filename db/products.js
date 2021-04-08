const client = require('./client.js');
const {getReviewsByProductId} = require('./reviews');

async function createProduct({title, imageLink, artist, genre, releaseDate, description, price, quantity}){
    //console.log(id)
    try {
    const { rows: [ product ] } = await client.query(`
        INSERT INTO products(title, "imageLink", artist, genre, "releaseDate", description, price, quantity) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
    `, [title, imageLink, artist, genre, releaseDate, description, price, quantity]);
    //console.log(id)
    return product
    } catch (error) {
    throw error;
    }
}
    async function getProductById(userId) {
      try {
        // first get the user (NOTE: Remember the query returns
        const {rows: [product]} = await client.query(`
          SELECT *
          FROM products
          WHERE id = $1
        `, [userId]);
        
        return product
      }catch (error){
        throw(error)
      }
    }    

    const getProductsByGenre = async (genre) => {

      try {
        const {rows: products} = await client.query(`
          SELECT *
          FROM products
          WHERE genre = $1
        `, [genre]);
        console.log(products)
        return products
      }catch (error){
        throw(error)
      }

    } 

    const getProductsByArtist = async (artist) => {

      try {
        const {rows: products} = await client.query(`
          SELECT *
          FROM products
          WHERE artist = $1
        `, [artist]);
        console.log(products)
        return products
      }catch (error){
        throw(error)
      }
    }

    async function getAllProductsWithReviews() {
      try { //could this just be select * from products vice id?
        const { rows: products } = await client.query(`
          SELECT *
          FROM products

        `);
          console.log("before for statement", products)

          for (const idx of products) {
            const productReviews = await getReviewsByProductId(idx.id)
            idx.reviews=productReviews;
          }
          console.log("after for statement", products)

        return products;
      } catch (error) {
        throw error;
      }
    }
 
    const updateProduct = async ({ id, title,  description, artist, genre, releaseDate, price, quantity }) => {
      try {
          const { rows: [product] } = await client.query(`
              UPDATE products
              SET title=$1, description=$2, artist=$3, genre=$4, "releaseDate"=$5, price=$6, quantity=$7
              WHERE id=${id}
              RETURNING *;
          `, [title,  description, artist, genre, releaseDate, price, quantity]);
          return product;
      } catch (error) {
          throw error;
      }
  }

  const destroyProduct = async id => {
    try {
        const { rows: [product] } = await client.query(`
            DELETE FROM products
            WHERE id=$1
            RETURNING *;
        `, [id]);
        return product;
    } catch (error) {
        throw error;
    }
}

    module.exports = {
        createProduct,
        getProductById,
        getProductsByGenre,
        getProductsByArtist,
        getAllProductsWithReviews,
        updateProduct,
        destroyProduct
      }

