const Users = require('../model/user.js');

module.exports = async function getUserInfo(req, res) {
    const user = await Users.findById(req.params.id)
    res.json(user)
}