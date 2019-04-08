const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: 'MikePass123!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'CH Hsu',
        email: 'ch@example.com',
        password: 'MyPass123!'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login noexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'noOne@example.com',
        password: 'noPass5566!'
    }).expect(400)
})
