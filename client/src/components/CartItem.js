import './CartItem.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CartItem(props) {

    const deleteItem = (event) => {
        const item = event.target;
    }

    return (
        <div className='cart-item'>
            <div className='cart-item-img'>
                <img src="https://picsum.photos/id/15/300/200" alt="book-img"></img>
            </div>
            <Link to={`/book/${1}`} className='cart-item-name'>Book1</Link>
            <p className='cart-item-author'>Author</p>
            <p className='cart-item-price'>$1</p>
            <FontAwesomeIcon icon={['fas', 'trash']} className='cart-item-delete' onClick={deleteItem} />
        </div>
    )
}