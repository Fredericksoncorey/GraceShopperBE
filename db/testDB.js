const {rebuildDB} = require('./seed')
const {getUser, getUserById, getUserByUsername} = require('./users')
const {getProductById, getProductsByGenre} = require('./products')
const client = require('./client')
const userObj = {username: 'albert', password: 'bertie99'}
 


const testSuite = async () => {
    try {
        await rebuildDB()
        /* .catch(console.error)
        .finally(() => client.end())  */
        console.log("getProductsByGenre('hardrock') is returning",await getProductsByGenre("hardrock"))
        
    } catch (error) {
        console.error(error)
    }   finally {
        client.end()
    }

    
}

testSuite()
