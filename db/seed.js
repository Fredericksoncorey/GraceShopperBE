const client = require('./client.js');
const {createUser } = require('./users.js')
const {createProduct} = require('./products.js')
const {createOrder} = require('./orders.js')
const {createReview} = require('./reviews.js')
const {createShoppingCart, getCartByUserId} = require('./cart.js')
const {createCartItem} = require('./cartItems.js');
const productsToCreate =require('./seedData')
//const { getMaxListeners } = require('node:process');


async function dropTables() {
    try {
        console.log('Dropping All Tables...');
        // drop all tables, in the correct order
        await client.query(`
        DROP TABLE IF EXISTS "cart_items";
        DROP TABLE IF EXISTS cart;
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
        "imageLink" varchar(255),
        artist TEXT NOT NULL,
        genre TEXT NOT NULL,
        "releaseDate" DATE NOT NULL,
        description TEXT NOT NULL,
        price MONEY NOT NULL,
        quantity INTEGER NOT NULL,
        active BOOLEAN NOT NULL
    );

    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "guestEmail" TEXT,
        "productId" INTEGER REFERENCES products(id),
        quantity INTEGER NOT NULL
    );
    
    CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES products(id),
        rating INTEGER NOT NULL,
        review TEXT NOT NULL
    );

    CREATE TABLE cart (
      id SERIAL PRIMARY KEY,
      "userId" INTEGER REFERENCES users(id)
    );

    CREATE TABLE cart_items (
      id SERIAL PRIMARY KEY,
      "cartId" INTEGER REFERENCES users(id),
      product INTEGER REFERENCES products(id),
      quantity INTEGER NOT NULL
  );

    `);
    console.log("Finished building tables!");
} catch (error) {
    console.error("Error building tables!");
    throw error;
}
}

//        UNIQUE ("userId", "productId")
// "cartId" INTEGER REFERENCES users(id),
// product INTEGER REFERENCES products(id),
//      price MONEY REFERENCES products(price)
//price INTEGER REFERENCES products(price) - add this back into the order table somehow

async function createInitialUsers() {
    console.log('Starting to create users...');
    try {
  
      const usersToCreate = [
        { username: 'albert', password: 'bertie99', email: 'albert@gmail.com', isAdmin: false },
        { username: 'sandra', password: 'sandra123', email: 'sandra@gmail.com', isAdmin: false},
        { username: 'ManFromTheBlarg', password: 'wetPotatoe123', email: 'fredericksoncorey@yahoo.com', isAdmin: true},
        { username: 'glamgal', password: 'glamgal123', email: 'glamgal@gmail.com', isAdmin: true},
        { username: 'imsocereal', password: 'Frootloops', email: 'Sugar@gmail.com', isAdmin: false},
        { username: 'PepsiMan', password: 'trainwreck', email: 'PepsiMan@gmail.com', isAdmin: false},
        { username: 'Gary', password: 'getinLoser', email: 'GarythheGreat@gmail.com', isAdmin: false},
        { username: 'Mr.Bubbles', password: 'OfTheSubject', email: 'BubbleTea@gmail.com', isAdmin: true},
        { username: 'Yugi Moto', password: 'HeartofTheCards', email: 'LittleKuribo@gmail.com', isAdmin: false},
        { username: 'Micheal Pizza', password: 'Mispellings', email: 'PizzaTime@gmail.com', isAdmin: false},
        { username: 'That Guy', password: 'WhatAJerk', email: 'H83R@yahoo.com', isAdmin: false},
        { username: 'FreakOnALeash12', password: 'ILikeKorn', email: 'KornFan32@gmail.com', isAdmin: false},
        { username: 'bob', password: 'bobbie99', email: 'bob@gmail.com', isAdmin: false },
        { username: 'sally', password: 'sallyjane1', email: 'sallyjane@gmail.com', isAdmin: false},
        { username: 'cooper', password: 'coopcoop2', email: 'coopcoop@gmail.com', isAdmin: true},
        { username: 'billy', password: 'bobbie99', email: 'billybob@gmail.com', isAdmin: false },
        { username: 'sue', password: 'suesue12', email: 'suesue@gmail.com', isAdmin: false},
        { username: 'debbie', password: 'debbiedeb2', email: 'debbie@gmail.com', isAdmin: true},
      ]
      const users = await Promise.all(usersToCreate.map(createUser));
  
/*       console.log('Users created:');
      console.log(users); */
      console.log('Finished creating users!');
    } catch (error) {
      console.error('Error creating users!');
      throw error;
    }
  }

  async function createInitialProducts() {
    try {
      console.log('Starting to create products...');
  
      /* const productsToCreate = [
        {title: 'Greatest Hits', imageLink: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg", artist: 'Best ever', genre: 'hardrock', releaseDate: '2021-03-24', description: "top hits 21", price: 105.99, quantity: 5},
        {title: 'Greatest Hits2', imageLink: "link to image", artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', genre: 'country', releaseDate: '2020-03-20', description: "top hits 20", price: 134.00, quantity: 10},
        {title: 'Greatest Hits3', imageLink: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png', artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', genre: 'country', releaseDate: '2012-09-20', description: "top hits 12", price: 100.49, quantity: 1},
        {title: 'Greatest Hits4', imageLink: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png', artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', description: "top hits 93", price: 124.02, quantity: 3}
      ] */
      const products = await Promise.all(productsToCreate.map(createProduct));
  
      /* console.log('products created:');
      console.log(products); */
  
      console.log('Finished creating products!');
    } catch (error) {
      console.error('Error creating products!');
      throw error;
    }
}

async function createInitialOrders() {
    try{
        console.log('Starting to create orders...');
    
        const ordersToCreate = [
            {userId: 2, productId: 1, quantity: 2},
            {userId: 1, productId: 2, quantity: 1},
            {guestEmail: "david@gmail.com", productId: 3, quantity: 1}
        ]
    
      const orders = await Promise.all(ordersToCreate.map(createOrder));
  
      /* console.log('orders created:');
      console.log(orders); */

      console.log('Finished creating orders!');
    } catch (error) {
      console.error('Error creating orders!');
      throw error;
    }
}

async function createInitialReviews() {
  try{
    console.log('Starting to create reviews...');

    const reviewsToCreate = [
        {userId: 1, productId: 1, rating: 5, review: "Best album ever!"},
        {userId: 11, productId: 9, rating: 1, review: "The absolute worse! I can't believe I spend money on this."},
        {userId: 3, productId: 2, rating: 3, review: "the second one is never as good as the first"},
        {userId: 8, productId: 8, rating: 5, review: "This truly is their Greatest Hits "},
        {userId: 6, productId: 2, rating: 5, review: "I am Pepsi Man and I approve of this album"},
        {userId: 10, productId: 4, rating: 1, review: "It sucks"},
        {userId: 9, productId: 5, rating: 4, review: "It was pretty good, Not the best quality of music I've personally listened to, but still good."},
        {userId: 2, productId: 6, rating: 2, review: "Wish I didn't purchase this one..."},
        {userId: 3, productId: 1, rating: 4, review: "Loved this one"},
        {userId: 12, productId: 1, rating: 5, review: "Sometimes it's my life I can taste"},
        {userId: 7, productId: 3, rating: 2, review: "YUCK GET OUTTA HERE! GAAAARROOOOSSSS!"},
        {userId: 5, productId: 2, rating: 5, review: "I put this one on eveyday!"},
        {userId: 9, productId: 8, rating: 5, review: "How Did I Get Here!?"},
        {userId: 2, productId: 2, rating: 4, review: "It was great."},
        {userId: 1, productId: 9, rating: 1, review: "I was not impressed with this album"},
        {userId: 3, productId: 2, rating: 3, review: "the second one is never as good as the first"},
        {userId: 1, productId: 8, rating: 5, review: "I can't stop listening to it!"},
        {userId: 2, productId: 1, rating: 4, review: "This was a hit at my party"},
        {userId: 2, productId: 4, rating: 1, review: "This was terrible"},
        {userId: 3, productId: 5, rating: 5, review: "Best Album ever!"},
        {userId: 1, productId: 6, rating: 1, review: "Hated it!"},
        {userId: 3, productId: 7, rating: 5, review: "loved it!"},
        {userId: 4, productId: 10, rating: 5, review: "Best album ever!"},
        {userId: 5, productId: 11, rating: 1, review: "I was not impressed with this album"},
        {userId: 6, productId: 12, rating: 3, review: "the second one is never as good as the first"},
        {userId: 7, productId: 13, rating: 5, review: "I can't stop listening to it!"},
        {userId: 7, productId: 14, rating: 4, review: "This was a hit at my party"},
        {userId: 5, productId: 15, rating: 1, review: "This was terrible"},
        {userId: 6, productId: 16, rating: 5, review: "Best Album ever!"},
        {userId: 4, productId: 17, rating: 1, review: "Hated it!"},
        {userId: 4, productId: 3, rating: 5, review: "loved it!"},
        {userId: 4, productId: 2, rating: 5, review: "Best album ever!"},
        {userId: 5, productId: 4, rating: 1, review: "I was not impressed with this album"},
        {userId: 6, productId: 5, rating: 3, review: "the second one is never as good as the first"},
        {userId: 7, productId: 6, rating: 5, review: "I can't stop listening to it!"},
        {userId: 7, productId: 7, rating: 4, review: "This was a hit at my party"},
        {userId: 5, productId: 8, rating: 1, review: "This was terrible"},
        {userId: 6, productId: 9, rating: 5, review: "Best Album ever!"},
        {userId: 4, productId: 10, rating: 1, review: "Hated it!"},
        {userId: 4, productId: 11, rating: 5, review: "loved it!"},
        {userId: 4, productId: 12, rating: 5, review: "Best album ever!"},
        {userId: 5, productId: 13, rating: 1, review: "I was not impressed with this album"},
        {userId: 6, productId: 14, rating: 3, review: "the second one is never as good as the first"},
        {userId: 7, productId: 15, rating: 5, review: "I can't stop listening to it!"},
        {userId: 7, productId: 16, rating: 4, review: "This was a hit at my party"},
        {userId: 5, productId: 17, rating: 1, review: "This was terrible"},
    ]
  
    const reviews = await Promise.all(reviewsToCreate.map(createReview));

    /* console.log('reviews created:');
    console.log(reviews); */

  }catch (error) {
    console.error('Error creating reviews!');
    throw error;
  }
}

async function createInitialShoppingCart() {
  try{
    console.log('Starting to create cart...');

    //not sure about this seed data
    const usersToCreate = [
      { userId: 1},
      { userId: 2},
      { userId: 3},    
    ]

    const carts = await Promise.all(usersToCreate.map(createShoppingCart));

    /* console.log('carts created:');
    console.log(carts); */

  }catch(error) {
    console.error('Error creating cart!');
    throw error;
  }
}

async function createInitialCartItems() {
  try{
    console.log('Starting to create cart items...');

    //not sure about this seed data
    const cartItemsToCreate = [
      { cartId: 2, product: 2, quantity: 1}, 
      { cartId: 1, product: 1, quantity: 3},  
      { cartId: 1, product: 2, quantity: 4}, 
    ]

    const items = await Promise.all(cartItemsToCreate.map(createCartItem));

    console.log('cart items created:');
    console.log(items);

  }catch(error) {
    console.error('Error creating cart items!');
    throw error;
  }
}

//test function for getCartByUserId
// async function getCart() {
//   try {
//     await getCartByUserId(1);
//   }catch(error){
//     throw error;
//   }
// }
//console.log(getCart())


async function rebuildDB() {
try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
    await createInitialOrders();
    await createInitialReviews();
    await createInitialShoppingCart();
    await createInitialCartItems();
    //await getCart();
} catch (error) {
    console.log('Error during rebuildDB')
    throw error;
    }
}



rebuildDB()
.catch(console.error)
.finally(() => client.end())

module.exports = rebuildDB;