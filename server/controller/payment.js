const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const Books = require('../model/book.js')

module.exports = async function checkout(req, res) {
    try {
        // line_items for stripe
        const items = req.body.items.map(async itemId => {
            const bookInfo = await Books.findById(itemId)
            return {
                price_data: {
                    currency: bookInfo.currency.toLowerCase(),
                    product_data: {
                        name: bookInfo.title,
                    },
                    // stripe accept USD in cents
                    unit_amount: bookInfo.price * 100
                },
                quantity: 1
            }
        })

        const sessionRequirement =
        {
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: await Promise.all(items),
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
        }
        const session = await stripe.checkout.sessions.create(sessionRequirement)
        res.json({ paymentUrl: session.url })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}