import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [loginStatus, setLoginStatus] = useState(false)

    const logout = () => {
        setLoginStatus(false)
        // fetch to server /logout
    }

    return (
        <nav id="navbar">
            <Link to="/" id="logo">BookRental</Link>
            <div>
                <span onClick={logout}>Log Out</span>
                <span onClick={props.loginButton}>Login</span>
                <span onClick={props.registerButton}>Register</span>
                <div id="cart-container" onClick={props.showCartScreen}>
                    <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                    <span>Cart</span>
                    <span id="cart-count">0</span>
                </div>
            </div>
        </nav>
    )
}

