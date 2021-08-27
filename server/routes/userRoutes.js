const express = require('express')
const router = express.Router()

const getUserInfo = require('../controller/getUserInfo.js')
const { updateFollowedBooks, updatePurchasedBooks } = require('../controller/updateUserInfo.js')

//@desc     GET user info from DB
//@route    GET /api/user/:id
//@access   public
router.get('/:id', getUserInfo)

//@desc     PUT following list of user into DB
//@route    PUT /api/user/:followedBooks
//@access   public
router.put('/:id/followedBooks', updateFollowedBooks, (req, res) => {
    res.send('success')
})

//@desc     PUT purchased list into DB
//@route    PUT /api/user/:id/purchasedBook after checkout
//@access   private
router.put('/:id/purchasedBook', updatePurchasedBooks, (req, res) => {
    res.send('success')
})

module.exports = router