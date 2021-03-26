const {rebuildDB} = require('./seed')
const {getUser, getUserById, getUserByUsername} = require('./users')
const {getProductById, getProductsByGenre, getProductsByArtist} = require('./products')
const client = require('./client')
const userObj = {username: 'albert', password: 'bertie99'}
 


const testSuite = async () => {
    try {
        await rebuildDB()
        /* .catch(console.error)
        .finally(() => client.end())  */
        console.log("getProductsByArtist('Best ever') is returning",await getProductsByArtist("Best ever"))
        
    } catch (error) {
        console.error(error)
    }   finally {
        client.end()
    }

    
}

testSuite()
