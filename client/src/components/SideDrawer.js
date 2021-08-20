import './SideDrawer.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


export default function SideDrawer(props) {


    const [loginStatus, setLoginStatus] = useState(false)

    const logout = () => {
        setLoginStatus(false)
        // fetch to server /logout
    }
    return (
        <div id="side-drawer" className={props.status ? 'side-drawer-active' : 'side-drawer-hidden'}>

            <div onClick={logout}>Log Out</div>
            <div onClick={props.loginButton}>Login</div>
            <div onClick={props.registerButton}>Register</div>
            <div id="side-drawer-cart-container" onClick={props.showCartPreview}>
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                <span>Cart</span>
                <span id="side-drawer-cart-count">0</span>
            </div>
            <div id="side-drawer-cart-preview">
                <ul>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                </ul>
                <Link to="/cart" className="btn checkout-btn" onClick={props.closeAll}>
                    <span>Totals: $0.00</span>
                    <span>Checkout</span>
                </Link>
            </div>
        </div>
    )
}