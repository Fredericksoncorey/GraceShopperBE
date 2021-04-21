const client = require('./client.js');
const {getReviewsByProductId} = require('./reviews');
const { getUserById } = require('./users.js');

async function createProduct({title, imageLink, artist, genre, releaseDate, description, price, quantity}){
    //console.log(id)
    try {
    const { rows: [ product ] } = await client.query(`
        INSERT INTO products(title, "imageLink", artist, genre, "releaseDate", description, price, quantity, active) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, true)
        RETURNING *;
    `, [title, imageLink, artist, genre, releaseDate, description, price, quantity]);
    //console.log(id)
    return product
    } catch (error) {
    throw error;
    }
}
    async function getProductById(id) {
      try {
        // first get the user (NOTE: Remember the query returns
        const {rows: [product]} = await client.query(`
          SELECT *
          FROM products
          WHERE id = $1
        `, [id]);
        for (const idx of products) {
          const productReviews = await getReviewsByProductId(idx.id)
          idx.reviews=productReviews;
          
          
        }
        
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
        for (const idx of products) {
          const productReviews = await getReviewsByProductId(idx.id)
          
          for(const key of productReviews){
            const user = await getUserById(key.userId)
            key.byUser = user.username
          }
          idx.reviews=productReviews;
        }
        return products
      }catch (error){
        throw(error)
      }

    } 

    const getProductsByArtist = async (artist) => {
      let newArtist = artist+"%"

      try {
        const {rows: products} = await client.query(`
          SELECT *
          FROM products
          WHERE artist LIKE $1
        `,[newArtist]);
        console.log(products)
        for (const idx of products) {
          const productReviews = await getReviewsByProductId(idx.id)
          
          for(const key of productReviews){
            const user = await getUserById(key.userId)
            key.byUser = user.username
          }
          idx.reviews=productReviews;
        }
        return products
      }catch (error){
        throw(error)
      }
    }

    const getProductsByTitle = async (title) => {
      const searchTitle = title + "%"
      try {
        const {rows: products} = await client.query(`
          SELECT *
          FROM products
          WHERE title LIKE $1
        `, [searchTitle]);
        console.log(products, "PRODUCT")
        for (const idx of products) {
          const productReviews = await getReviewsByProductId(idx.id)
          
          for(const key of productReviews){
            const user = await getUserById(key.userId)
            key.byUser = user.username
          }
          idx.reviews=productReviews;
        }
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
          WHERE active = true

        `);
          //console.log("before for statement", products)

          for (const idx of products) {
            const productReviews = await getReviewsByProductId(idx.id)
            
            for(const key of productReviews){
              const user = await getUserById(key.userId)
              key.byUser = user.username
            }
            idx.reviews=productReviews;
            
          }
          //console.log("after for statement", products)
          console.log(products.reviews)
        return products;
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
        UPDATE products
        SET active=FALSE
        WHERE id=$1;
        `, [id]);
        if(!product){return}
        return product;
    } catch (error) {
        throw({message :error.message});
    }
}

const makeGenreList = async () => {
  try {
    const {rows :genre} = await client.query(`
        SELECT DISTINCT genre 
        FROM products
    `);
    let genreList = []
    genre.forEach(genre=>genreList.push(genre.genre))
    return genreList;
} catch (error) {
    throw({message :error.message});
}
}

const getProductPricebyId = async (id) =>{
  try {
    const { rows: [price] } = await client.query(`
    SELECT price 
    FROM products
    WHERE id=$1;
    `, [id]);
    if(!price){return Error({message:"Nothing was returned"})}
    return price;
  } catch (error) {
      throw({message :error.message});
  }

}


    module.exports = {
        createProduct,
        getProductById,
        getProductsByGenre,
        getProductsByArtist,
        getProductsByTitle,
        getAllProductsWithReviews,
        updateProduct,
        destroyProduct,
        makeGenreList,
        getProductPricebyId
      }

