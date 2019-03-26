const express = require('express')
require('./db/mongoose')  // run the file and connect to database
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // parse incoming json to an object (req.body)

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
