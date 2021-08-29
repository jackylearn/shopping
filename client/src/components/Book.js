import './Book.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
//redux actions
import { followBook, followBookCancel } from '../redux/actions/bookActions.js'
import { openLoginModal } from '../redux/actions/modalActions.js'
import { addToCart, removeFromCart } from '../redux/actions/cartActions.js'

export default function Book(props) {
    const followedBooks = useSelector(state => state.followedBooks)
    const cartItems = useSelector(state => state.cart)
    const loginStatus = useSelector(state => state.auth.login)

    const dispatch = useDispatch();

    const followBookHandler = () => {
        if (!loginStatus) return dispatch(openLoginModal())
        document.getElementById(`${props.item._id}-btn`).classList.toggle('followed')
        if (!followedBooks[props.item._id])
            dispatch(followBook(props.item._id))
        else
            dispatch(followBookCancel(props.item._id))
    }

    const addToCartHandler = () => {
        document.getElementById(`${props.item._id}-cart`).classList.toggle('in-cart')
        if (!cartItems[props.item._id])
            dispatch(addToCart(props.item._id))
        else
            dispatch(removeFromCart(props.item._id))
    }

    return (
        <div className='book'>
            <img src={props.item.imageUrl} alt={props.item.name} />

            <div className='book-info'>
                <p className='info-name'>
                    <span>{props.item.title}</span>
                    <span className='author'>{props.item.author}</span>
                    <span>
                        <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            id={`${props.item._id}-btn`}
                            className={followedBooks[props.item._id] ? 'follow-icon followed' : 'follow-icon'}
                            onClick={followBookHandler} />
                        <FontAwesomeIcon
                            icon={["fas", "shopping-cart"]}
                            id={`${props.item._id}-cart`}
                            className={cartItems[props.item._id] ? 'cart-icon in-cart' : 'cart-icon'}
                            onClick={addToCartHandler}
                        />
                    </span>
                </p>
                <p className='info-description'>{props.item.description.slice(0, 100) + "..."}</p>
                <p className='price'>Rent for 30 days: {props.item.price} {props.item.currency}</p>
            </div>

            <Link to={`/book/${props.item._id}`} className='info-button btn'>View Detail</Link>
        </div>
    )
}