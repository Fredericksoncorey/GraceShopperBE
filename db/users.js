const client = require('./client.js');
const bcrypt = require('bcrypt');

async function createUser({username, password, email, isAdmin}) {
    const hashedPass = bcrypt.hashSync(password , 10)
    try {
        //console.log(username)
        //console.log(password)
        const { rows: [user] } = await client.query(`
        INSERT INTO users(username, password, email, "isAdmin")
        VALUES($1, $2, $3, $4)
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
        `, [username, hashedPass /* password */, email, isAdmin]); // Corey Changed
        //console.log(user)
        
        //delete user.password
        
        return user;
    } catch (error) {
        throw error;
    }
}

const getUser = async ({username, password}) => {
    try {
        const {rows} = await client.query(`
         SELECT *
         FROM users
         WHERE username = $1;
         
         `, [username])
         
         if(!rows||!rows.length){
             console.log("hit no user")
             return null
           }
          const [user] = rows
         
         if(bcrypt.compareSync(password, user.password)) {
             delete user.password;
             console.log(user, ":This is the user from getuser")
             return user;
         }else{
             return false       
         }

     } catch (error) {
         throw(error)
     } 
 

}

const getUserById = async (id) => {

    try {
      const {rows :[user]} = await client.query(`
        SELECT *
        FROM users
        WHERE id = $1;
        ` , [id]);
        if(!user){
            throw error("User does not exist by that ID");
        } 
        delete user.password;
        return user; 
    } catch (error) {
        throw (error)
    } 
    

}

const getUserByUsername = async (username)=>{
    try{
        const {rows: [user]} = await client.query(`
        SELECT * FROM users
        WHERE username = $1
        `, [username])

    return user
    
    }catch(error){
        throw error
    }
}

async function getAllUsers() {
    try {
      const { rows } = await client.query(`
        SELECT id, username, name, location, active 
        FROM users;
      `);
  
      return rows;
    } catch (error) {
      throw error;
    }
  }

const editProfile = async ({ id, username, address, phone }) => {
    try {
        const { rows: [user] } = await client.query(`
            UPDATE users
            SET username=$1, address=$2, phone=$3
            WHERE id=${id}
            RETURNING *;
        `, [username, address, phone]);
        return user;
    } catch (error) {
        throw error;
    }
}

const getUserByEmail = async (email)=>{
    try{
        const {rows: [user]} = await client.query(`
        SELECT * FROM users
        WHERE email = $1
        `, [email])

    return user
    
    }catch(error){
        throw error
    }
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    getUserByUsername,
    getAllUsers,
    editProfile,
    getUserByEmail
}