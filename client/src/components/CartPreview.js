import './CartPreview.css'
import { Link } from 'react-router-dom'

export default function CartPreview(props) {

    return (
        <div id="cart-preview" className={props.status ? "cart-preview-active" : "cart-preview-hidden"}>
            <h2>Cart Preview</h2>
            <ul>
                <li>dfs</li>
                <li>dfs</li>
                <li>dfs</li>
            </ul>


            <Link to="/cart" className="btn checkout-btn" onClick={props.closeAll}>
                <span>Totals: $0.00</span>
                <span>Checkout</span>
            </Link>
        </div>
    )
}