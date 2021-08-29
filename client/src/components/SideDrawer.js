import './SideDrawer.css'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { logout } from '../redux/actions/authActions.js'
import BookPreview from '../components/BookPreview.js'

export default function SideDrawer({ closeAll, status, loginButton, registerButton, showCartPreview }) {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
        closeAll()
    }

    const loginStatus = useSelector(state => state.auth.login)
    const cartItems = useSelector(state => state.cart)
    const itemsId = Object.keys(cartItems)

    return (
        <div id="side-drawer" className={status ? 'side-drawer-active' : 'side-drawer-hidden'}>

            {loginStatus
                ? <div onClick={logoutHandler}>Log Out</div>
                : <>
                    <div onClick={loginButton}>Login</div>
                    <div onClick={registerButton}>Register</div>
                </>
            }

            <div id="side-drawer-cart-container" onClick={showCartPreview}>
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                <span>Cart</span>
                <span id="side-drawer-cart-count">{itemsId.length}</span>
            </div>
            <div id="side-drawer-cart-preview">
                {itemsId.map(itemId => (<BookPreview key={`${itemId}-book-preview`} itemId={itemId} />))}
                <Link to="/cart" className="btn checkout-btn" onClick={closeAll}>
                    <span>Totals: ${
                        Math.floor(itemsId.reduce((sum, itemId) => sum + cartItems[itemId].price, 0) * 100) / 100
                    }</span>
                    <span>Checkout</span>
                </Link>
            </div>

        </div>
    )
}