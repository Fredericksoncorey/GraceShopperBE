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
          FROM products;
        `);
    
        // const products = await Promise.all(productIds.map(
        //   product => getProductById( product.id ) //Should this just be (product) without the .id?
        // ));
        
        const productsAndReviews = await Promise.all(products.map(
          product => product.reviews = getReviewsByProductId(product.id)
        ))
  
        return productsAndReviews;
      } catch (error) {
        throw error;
      }
    }
 
    const updateProduct = async (id, fields = {} ) => {
      const setString = Object.keys(fields).map((key, index) => 
      `"${ key }"=$${ index + 1 }`).join(', ');
      
      if (setString.length === 0) {
        return;
      }
      
      try {
          const { rows: [product] } = await client.query(`
              UPDATE products
              SET ${setString}
              WHERE id=${id}
              RETURNING *;
          `, Object.values(fields));
          if(!product){throw Error({message: "No product by that ID was found"})}
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
        if(!product){return}
        return product;
    } catch (error) {
        throw({message :error.message});
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

