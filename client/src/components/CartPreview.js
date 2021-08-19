import './CartPreview.css'
import { Link } from 'react-router-dom'

export default function CartPreview(props) {

    return (
        <div id="cart-preview" className={props.status ? "cart-preview-active" : "cart-preview-hidden"}>
            <ul>
                <li>dfs</li>
            </ul>


            <Link to="/cart" className="btn checkout-btn">
                Checkout
            </Link>
        </div>
    )
}