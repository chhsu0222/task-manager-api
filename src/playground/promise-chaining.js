require('../db/mongoose')
const User = require('../models/user')

User.findByIdAndUpdate('5c99f32fc58a33103459bd50', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
