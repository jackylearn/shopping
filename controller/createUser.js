const Users = require('../model/user.js')
const bcrypt = require('bcrypt')


module.exports = async function createUser(name, password) {

    try {
        const existing = await Users.findOne({ name: name }).exec()
        if (existing) throw new Error(`User ${name} already exists`)

        const hashed = await bcrypt.hashSync(password, 12)
        const newUser = new Users({
            name: name,
            password: hashed
        })

        await newUser.save()
        return { userId: newUser._id }

    } catch (err) {
        throw err
    }
}