const client = require('./client.js');
const {createUser} = require('./users.js')
const {createProduct} = require('./products.js')


async function dropTables() {
    try {
        console.log('Dropping All Tables...');
        // drop all tables, in the correct order
        await client.query(`
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS users;
        `);
        console.log("Finished dropping tables!");
    } catch (error) {
        console.log(error)
        console.error("Error dropping tables!");
        throw error;
    }
}

//Need to add photo/image to products table
async function createTables() {
try {
    console.log("Starting to build tables...");
    // create all tables, in the correct order
    await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        "isAdmin" BOOLEAN DEFAULT false
    );

    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) NOT NULL,
        artist TEXT NOT NULL,
        genre TEXT NOT NULL,
        "releaseDate" DATE NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        quantity INTEGER NOT NULL
    );

    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES products(id),
        quantity INTEGER NOT NULL,
        UNIQUE ("userId", "productId")
    );
    
    CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        product INTEGER REFERENCES products(id),
        "userId" INTEGER REFERENCES users(id),
        review TEXT NOT NULL,
        UNIQUE (product, "userId")
    );
    `);
    console.log("Finished building tables!");
} catch (error) {
    console.error("Error building tables!");
    throw error;
}
}
//price INTEGER REFERENCES products(price) - add this back into the order table somehow

async function createInitialUsers() {
    console.log('Starting to create users...');
    try {
  
      const usersToCreate = [
        { username: 'albert', password: 'bertie99', email: 'albert@gmail.com', isAdmin: false },
        { username: 'sandra', password: 'sandra123', email: 'sandra@gmail.com', isAdmin: false},
        { username: 'glamgal', password: 'glamgal123', email: 'glamgal@gmail.com', isAdmin: true},
      ]
      const users = await Promise.all(usersToCreate.map(createUser));
  
      console.log('Users created:');
      console.log(users);
      console.log('Finished creating users!');
    } catch (error) {
      console.error('Error creating users!');
      throw error;
    }
  }

  async function createInitialProducts() {
    try {
      console.log('Starting to create products...');
  
      const productsToCreate = [
         {title: 'Greatest Hits', artist: 'Best ever', genre: 'hardrock', releaseDate: '2021-03-24', description: "top hits 21", price: 105, quantity: 5},
        {title: 'Greatest Hits2', artist: 'Best ever', genre: 'country', releaseDate: '2020-03-20', description: "top hits 20", price: 134, quantity: 10},
        {title: 'Greatest Hits3', artist: 'Best ever', genre: 'country', releaseDate: '2012-09-20', description: "top hits 12", price: 100, quantity: 1},
        {title: 'Greatest Hits4', artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', description: "top hits 93", price: 124, quantity: 3}
      ]
      const products = await Promise.all(productsToCreate.map(createProduct));
  
      console.log('products created:');
      console.log(products);
  
      console.log('Finished creating products!');
    } catch (error) {
      console.error('Error creating products!');
      throw error;
    }
  }

//   title varchar(255) NOT NULL,
//   artist TEXT NOT NULL,
//   genre TEXT NOT NULL,
//   "releaseDate" DATE NOT NULL,
//   description TEXT NOT NULL,
//   price INTEGER NOT NULL,
//   quantity INTEGER NOT NULL

async function rebuildDB() {
try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
} catch (error) {
    console.log('Error during rebuildDB')
    throw error;
    }
}

/* rebuildDB()
.catch(console.error)
.finally(() => client.end()) */

module.exports = {
    rebuildDB
};