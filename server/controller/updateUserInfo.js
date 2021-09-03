const Users = require('../model/user.js')

const updatePurchasedBooks = async (req, res, next) => {
    const purchasedBooks = req.body.purchasedBooks
    const userId = req.params.id
    if (!userId) return next()

    const user = await Users.findById(userId).exec()

    purchasedBooks.forEach(bookId => {
        user.purchased.set(
            bookId,
            Date.now() + 30 * 86400 * 1000
        )
    })
    await user.save()
    next()
}

const updateFollowedBooks = async (req, res, next) => {
    //expect receive [bookId, boolean], true for new follow, false for unfollowed
    const [bookId, operation] = req.body.followedBooks
    const userId = req.params.id
    const user = await Users.findById(userId).exec()
    operation ? user.follow.set(bookId, true)
        : user.follow.delete(bookId)

    await user.save()
    next()
}

module.exports = {
    updatePurchasedBooks,
    updateFollowedBooks
}