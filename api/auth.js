const authenticated = async (req, res, next) => {
    if (!req.user) {
        next({ message: 'Please log in to continue' })
    }
    next();
}

module.exports = authenticated;