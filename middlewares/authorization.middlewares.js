require('dotenv').config()

const jwt = require('jsonwebtoken')

const authorization = (role) => (req, res, next) => {
    try {
    
    const {authorization} = req.headers
    const token = authorization.split(" ")[1] 
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

   
    if (decoded.role !== role) {
        throw {
            code: 403,
            message: 'role tidak diijinkan'
        }
    }

    
    req.user_id = decoded.user_id
    req.role = decoded.role

    next()
    } catch (error) {
        next({code: error.code || 401, message: error.message || 'invalid token'})
    }
}

module.exports = {
    authorization
}