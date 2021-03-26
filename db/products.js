const client = require('./client.js');

async function createProduct({title, artist, genre, releaseDate, description, price, quantity}){
    //console.log(id)
        try {
        const { rows: [ product ] } = await client.query(`
          INSERT INTO products(title, artist, genre, "releaseDate", description, price, quantity) 
          VALUES($1, $2, $3, $4, $5, $6, $7)
          RETURNING *;
        `, [title, artist, genre, releaseDate, description, price, quantity]);
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

    module.exports = {
        createProduct,
        getProductById,
        getProductsByGenre
      }