import './CartPreview.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BookPreview from '../components/BookPreview.js'

export default function CartPreview(props) {

    const cartItems = useSelector(state => state.cart)
    const itemsId = Object.keys(cartItems)

    return (
        <div id="cart-preview" className={props.status ? "cart-preview-active" : "cart-preview-hidden"}>
            <h2>Cart Preview</h2>
            <div className="book-preview-wrapper">
                {itemsId.map(itemId => (<BookPreview itemId={itemId} />))}
            </div>

            <Link to="/cart" className="btn checkout-btn" onClick={props.closeAll}>
                <span>Totals: ${itemsId.reduce((sum, itemId) => sum + parseFloat(cartItems[itemId].price), 0)}</span>
                <span>Checkout</span>
            </Link>
        </div>
    )
}