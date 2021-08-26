import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'

//redux actions
import { logout } from '../redux/actions/authActions.js'

import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const loginStatus = useSelector(state => state.auth.login)
    const cartItems = Object.keys(useSelector(state => state.cart))

    const dispatch = useDispatch();
    const logoutHandler = () => dispatch(logout())

    return (
        <nav id="navbar">
            <Link to="/" id="logo">BookRental</Link>
            <div id="nav-links">
                {loginStatus
                    ?
                    <span onClick={logoutHandler}>Log Out</span>
                    :
                    <>
                        <span onClick={props.loginButton}>Login</span>
                        <span onClick={props.registerButton}>Register</span>
                    </>
                }


                <div id="cart-container" onClick={props.showCartPreview}>
                    <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                    <span>Cart</span>
                    <span id="cart-count">{cartItems.length}</span>
                </div>
            </div>
            <div id="menu" onClick={props.showSideDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

