const {rebuildDB} = require('./seed')
const {getUser, getUserById, getUserByUsername} = require('./users')
const client = require('./client')
const userObj = {username: 'albert', password: 'bertie99'}
 


const testSuite = async () => {
    try {
        await rebuildDB()
        /* .catch(console.error)
        .finally(() => client.end())  */
        console.log("getUserByUsername('glamgal') is returning",await getUserByUsername("glamgal"))
        
    } catch (error) {
        console.error(error)
    }   finally {
        client.end()
    }

    
}

testSuite()
