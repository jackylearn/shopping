import './Book.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
//redux actions
import { followBook, followBookCancel } from '../redux/actions/bookActions.js'
import { openLoginModal } from '../redux/actions/modalActions.js'
import { addToCart, removeFromCart } from '../redux/actions/cartActions.js'

export default function Book({ item }) {
    const followedBooks = useSelector(state => state.followedBooks)
    const cartItems = useSelector(state => state.cart)
    const loginStatus = useSelector(state => state.auth.login)

    const dispatch = useDispatch();

    const followBookHandler = () => {
        if (!loginStatus) return dispatch(openLoginModal())
        document.getElementById(`${item._id}-btn`).classList.toggle('followed')
        if (!followedBooks[item._id])
            dispatch(followBook(item._id))
        else
            dispatch(followBookCancel(item._id))
    }

    const addToCartHandler = () => {
        document.getElementById(`${item._id}-cart`).classList.toggle('in-cart')
        if (!cartItems[item._id])
            dispatch(addToCart(item._id))
        else
            dispatch(removeFromCart(item._id))
    }

    return (
        <div className='book'>
            <img src={item.imageUrl} alt={item.name} />

            <div className='book-info'>
                <p className='info-name'>
                    <span>{item.title}</span>
                    <span className='author'>{item.author}</span>
                    <span>
                        <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            id={`${item._id}-btn`}
                            className={followedBooks[item._id] ? 'follow-icon followed' : 'follow-icon'}
                            onClick={followBookHandler} />
                        <FontAwesomeIcon
                            icon={["fas", "shopping-cart"]}
                            id={`${item._id}-cart`}
                            className={cartItems[item._id] ? 'cart-icon in-cart' : 'cart-icon'}
                            onClick={addToCartHandler}
                        />
                    </span>
                </p>
                <p className='info-description'>{item.description.slice(0, 100) + "..."}</p>
                <p className='price'>Rent for 30 days: {item.price} {item.currency}</p>
            </div>

            <Link to={`/book/${item._id}`} className='info-button btn'>View Detail</Link>
        </div>
    )
}