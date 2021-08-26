import './CartPreview.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookPreview from '../components/BookPreview.js'

export default function CartPreview(props) {

    const cartItems = useSelector(state => state.cart)
    const itemsId = Object.keys(cartItems)

    return (
        <div id="cart-preview" className={props.status ? "cart-preview-active" : "cart-preview-hidden"}>
            <h2>Cart Preview</h2>
            <div className="book-preview-wrapper">
                {itemsId.map(itemId => (<BookPreview key={`${itemId}-preview`} itemId={itemId} />))}
            </div>

            <Link to="/cart" className="btn checkout-btn" onClick={props.closeAll}>
                <span>Totals: ${Math.floor(itemsId.reduce((sum, itemId) => sum + cartItems[itemId].price, 0) * 100) / 100}</span>
                <span>Checkout</span>
            </Link>
        </div>
    )
}