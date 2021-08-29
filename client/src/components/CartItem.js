import './CartItem.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions.js'

export default function CartItem({ itemId }) {

    const dispatch = useDispatch();
    const deleteItemHandler = () => dispatch(removeFromCart(itemId))
    const cartItem = useSelector(state => state.cart)[itemId]

    return (
        <div className='cart-item'>
            <div className='cart-item-img'>
                <img
                    src={cartItem.imageUrl}
                    alt={cartItem.title}
                ></img>
            </div>
            <Link to={`/book/${itemId}`} className='cart-item-name'>{cartItem.title}</Link>
            <p className='cart-item-author'>{cartItem.author}</p>
            <p className='cart-item-price'>{cartItem.price + ' ' + cartItem.currency}</p>
            <FontAwesomeIcon icon={['fas', 'trash']} className='cart-item-delete' onClick={deleteItemHandler} />
        </div>
    )
}