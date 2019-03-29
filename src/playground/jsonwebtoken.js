const jwt = require('jsonwebtoken')

const token = jwt.sign({ _id: 'abc123'}, 'thisisnew', { expiresIn: '7 days' })
console.log(token)

const data = jwt.verify(token, 'thisisnew')
console.log(data)
