const jwt = require('jsonwebtoken')
const User = require('../models/user')

// auth will find a user with the correct ID who has that
// authentication token still stored.
// The header in the request is Authorization with value 'Bearer [token]'
// If the user logs out, that means this token will be invalid.
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user // put the user info into req for the following route handler
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth
