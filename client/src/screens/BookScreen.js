import './BookScreen.css'
import { useDispatch, useSelector } from 'react-redux'

//redux actions
import { followBook, followBookCancel } from '../redux/actions/bookActions.js'
import { addToCart, removeFromCart } from '../redux/actions/cartActions.js'
import { openLoginModal } from '../redux/actions/modalActions.js'

export default function BookScreen({ match }) {

    const loginStatus = useSelector(state => state.auth.login)
    const followedBooks = useSelector(state => state.followedBooks)
    const booksInCart = useSelector(state => state.cart)
    const purchasedBooks = useSelector(state => state.auth?.data?.purchasedBooks)

    const dispatch = useDispatch();
    const book = useSelector(state => state.getBooks.books).filter(book => book._id === match.params.id)[0]
    const purchased = purchasedBooks[book._id] || false

    const addToCartHandler = () => {
        document.querySelector(".add-cart-btn").classList.toggle('in-cart-btn')
        if (!booksInCart[book._id])
            dispatch(addToCart(book._id))
        else
            dispatch(removeFromCart(book._id))
    }

    const followBookHandler = () => {
        if (!loginStatus) return dispatch(openLoginModal())

        document.querySelector(".follow-btn").classList.toggle('followed-btn')
        if (!followedBooks[book._id])
            dispatch(followBook(book._id))
        else
            dispatch(followBookCancel(book._id))
    }

    return (
        <div className='book-screen'>
            <div className='book-screen-left'>
                <div className='left-img'>
                    <img src={book.imageUrl} alt={book.title}></img>
                </div>
                <div className="left-info">
                    <p className='left-name'>{book.title}</p>
                    <p className='left-author'>{book.author}</p>
                    <p className='left-price'>Rent for 30 days: {book.price} {book.currency}</p>
                    <p className='left-description'>{book.description}</p>
                </div>
            </div>
            <div className='book-screen-right'>
                <div className='right-buttons'>
                    {purchased
                        ? <div className='btn add-cart-btn purchased-btn'>Purchased</div>

                        : booksInCart[book._id]
                            ? <div className='btn add-cart-btn in-cart-btn' onClick={addToCartHandler} >In cart</div>
                            : <div className='btn add-cart-btn' onClick={addToCartHandler} >Add to Cart</div>
                    }
                    {followedBooks[book._id]
                        ? <div className='btn follow-btn followed-btn' onClick={followBookHandler} >Unfollow</div>
                        : <div className='btn follow-btn' onClick={followBookHandler} >Follow</div>
                    }
                </div>
            </div>
        </div>
    )
}