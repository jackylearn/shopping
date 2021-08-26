const express = require('express');
const router = express.Router();
const checkout = require('../controller/payment.js')

//@desc     POST cart items to checkout
//@route    GET /payment/checkout
//@access   public
router.post('/checkout', checkout)


module.exports = router