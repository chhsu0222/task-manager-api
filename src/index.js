const express = require('express')
require('./db/mongoose')  // run the file and connect to database
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json()) // parse incoming json to an object (req.body)
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
