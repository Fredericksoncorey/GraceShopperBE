module.exports = {
    ...require('./users'), 
    ...require('./client'), 
    ...require('./orders'),
    ...require('./products'),
    ...require('./reviews'),
    ...require('./cart'),
    ...require('./cartItems')
    //...require('./seed') 
  }