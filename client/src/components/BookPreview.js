import './BookPreview.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BookPreview({ itemId }) {

    const dispatch = useDispatch();
    const deleteItemHandler = () => dispatch(removeFromCart(itemId))

    const cartItem = useSelector(state => state.cart)[itemId]

    return (
        <div className='book-preview'>
            <div className='preview-img'>
                <img src={cartItem?.imageUrl} alt={cartItem?.title} />
            </div>
            <div className='preview-info'>
                <p>{cartItem?.title.length > 20 ? cartItem?.title.slice(0, 20) + '...' : cartItem?.title}</p>
                <p>{cartItem?.author}</p>
                <p>{cartItem?.price} {cartItem?.currency}</p>
            </div>
            <div className='preview-delete'>
                <FontAwesomeIcon icon={['fas', 'trash']} className='cart-item-delete' onClick={deleteItemHandler} />
            </div>
        </div>
    )
}