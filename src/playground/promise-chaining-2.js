require('../db/mongoose')
const Task = require('../models/task')

// Task.findByIdAndDelete('5c9ad26c9ec16b4ccca00f6a').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5c99d08c2271434878f84bfc').then((count) => {
    console.log('count:', count)
}).catch((e) => {
    console.log(e)
})
