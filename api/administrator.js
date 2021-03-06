const admin = async (req, res, next) => {
    
    if (req.user.isAdmin === false) {
        next({ message: 'Please log in as an administrator to continue' })
    }
    next();
}

module.exports = admin;