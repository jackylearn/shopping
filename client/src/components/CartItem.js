import './CartItem.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions.js'

export default function CartItem(props) {

    const dispatch = useDispatch();
    const deleteItemHandler = () => dispatch(removeFromCart(props.itemId))
    const cartItem = useSelector(state => state.cart)[props.itemId]

    return (
        <div className='cart-item'>
            <div className='cart-item-img'>
                <img
                    src={cartItem.imageUrl}
                    alt={cartItem.title}
                ></img>
            </div>
            <Link to={`/book/${props.itemId}`} className='cart-item-name'>{cartItem.title}</Link>
            <p className='cart-item-author'>{cartItem.author}</p>
            <p className='cart-item-price'>{cartItem.price + ' ' + cartItem.currency}</p>
            <FontAwesomeIcon icon={['fas', 'trash']} className='cart-item-delete' onClick={deleteItemHandler} />
        </div>
    )
}