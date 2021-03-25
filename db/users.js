const client = require('./client.js');

async function createUser({username, password, email, isAdmin}) {
    try {
        //console.log(username)
        //console.log(password)
        const { rows: [user] } = await client.query(`
        INSERT INTO users(username, password, email, "isAdmin")
        VALUES($1, $2, $3, $4)
        RETURNING *;
        `, [username, password, email, isAdmin]);
        //console.log(user)
        //delete user.password
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser
}