const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true  // whether to always call .trim() on the value
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,  // whether to always call .toLowerCase() on the value
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: '   CH  ',
    email: 'CH@TEST.COM'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const cleanUp = new Task({
    description: 'Clean up the table',
    completed: false
})

// cleanUp.save().then(() => {
//     console.log(cleanUp)
// }).catch((error) => {
//     console.log('Error!', error)
// })
