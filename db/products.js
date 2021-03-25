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

    module.exports = {
        createProduct
      }