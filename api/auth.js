const jwt  = require("jsonwebtoken")

const authenticated = async (req, res, next) => {
    const tokenHeader = req.headers['authorization']
    
    if(tokenHeader){
    bearerToken = tokenHeader.split(' ') //one space splits every character
    console.log(bearerToken[1])
    const response =jwt.verify(bearerToken[1], "Secret Code" )
    console.log(response)
    


    }else {
        next({ message: 'Please log in to continue' })
    }
    next();
}

module.exports = authenticated;