const express = require('express')
require('./db/mongoose')  // run the file and connect to database
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         return res.status(400).send('GET requests are disabled')
//     }
//     next()
// })

app.use((req, res, next) => {
    res.status(503).send('Website under maintenance...')
})

app.use(express.json()) // parse incoming json to an object (req.body)
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
