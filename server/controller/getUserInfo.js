const Users = require('../model/user.js');

module.exports = async function getUserInfo(req, res) {
    const user = await Users.findById(req.params.id)
    console.log('check user info')
    res.json(user)
}