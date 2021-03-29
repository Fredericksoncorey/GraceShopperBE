const client = require('./client.js');

async function createOrder({userId, productId, quantity}){
    //console.log(id)
    try {
    const { rows: [ order ] } = await client.query(`
        INSERT INTO orders("userId", "productId", quantity) 
        VALUES($1, $2, $3)
        RETURNING *;
    `, [userId, productId, quantity]);
    //console.log(id)
    return order
    } catch (error) {
    throw error;
    }

}

async function getOrderById(userId) {
    try {
      const {rows: [order]} = await client.query(`
        SELECT *
        FROM orders
        WHERE id = $1
      `, [userId]);
      return order
    }catch (error){
      throw(error)
    }
  }  

async function getAllOrders() {
    try {
      const { rows: orderIds } = await client.query(`
        SELECT id
        FROM orders;
      `);
  
      const orders = await Promise.all(orderIds.map(
        order => getOrderById( order.id )
      ));
  
      return orders;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById
    }