require('../db/mongoose')
const Task = require('../models/task')

Task.findByIdAndDelete('5c9ad26c9ec16b4ccca00f6a').then(() => {
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
