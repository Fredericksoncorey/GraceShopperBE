const client = require('./client.js');

async function createOrder({userId, guestEmail, productId, quantity}){
    //console.log(id)
    try {
    const { rows: [ order ] } = await client.query(`
        INSERT INTO orders("userId", "guestEmail", "productId", quantity) 
        VALUES($1, $2, $3, $4)
        RETURNING *;
    `, [userId, guestEmail, productId, quantity]);
    //console.log(id)
    return order
    } catch (error) {
    throw error;
    }

}

async function getOrderById(id) {
  console.log('in getOrderById')
    try {
      const {rows: order} = await client.query(`
        SELECT *
        FROM orders
        WHERE "userId" = ${id}
      `,);
      console.log(order)
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

  const getOrdersByUserId = async (userId) => {
    
    try {
      const {rows} = await client.query(`
      SELECT *
      FROM orders
      Where "userId" = $1;
      `, [userId])
      console.log(rows)
      if(!rows){
        return false
      }else{  
        const [orders] = rows
        return orders
      }
    } catch (error) {
      
    }


  } 

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrdersByUserId
    }