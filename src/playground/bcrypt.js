const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red123!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red123!', hashedPassword)
    console.log(isMatch)
}

myFunction()
