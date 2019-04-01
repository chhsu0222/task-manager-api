const express = require('express')
require('./db/mongoose')  // run the file and connect to database
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // parse incoming json to an object (req.body)
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const User = require('./models/user')
const Task = require('./models/task')

const main = async () => {
    // const task = await Task.findById('5ca1af7e9582d45de817746c')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // Populate Virtuals
    const user = await User.findById('5ca1ada9a76c322b2447a2b3')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
