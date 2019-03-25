const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').findOne({ _id: new ObjectID("5c987442bdec6042cc2350de") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 32 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5c987dc416f22a3a7863f110") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch task!')
    //     }

    //     console.log(task)
    // })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch tasks!')
        }

        console.log(tasks)
    })
})
