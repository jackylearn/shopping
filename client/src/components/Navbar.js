import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'

//redux actions
import { logout } from '../redux/actions/authActions.js'
import { resetFollowBook } from '../redux/actions/bookActions.js'
import { resetCart } from '../redux/actions/cartActions.js'

import { Link } from 'react-router-dom'

export default function Navbar({ loginButton, registerButton, showCartPreview, showSideDrawer }) {

    const { login: loginStatus, data } = useSelector(state => state.auth)
    const cartItems = Object.keys(useSelector(state => state.cart))

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
        dispatch(resetCart())
    }

    return (
        <nav id="navbar">
            <Link to="/" id="logo">BooksRental</Link>
            <div id="nav-links">
                {loginStatus
                    ?
                    <>
                        <span>
                            <Link to="/user" id="user">
                                <span>{data.message}</span>
                                <span>{data.user || ""}</span>
                            </Link>
                        </span>
                        <span onClick={logoutHandler}>Log Out</span>
                    </>
                    :
                    <>
                        <span onClick={loginButton}>Login</span>
                        <span onClick={registerButton}>Register</span>
                    </>
                }


                <div id="cart-container" onClick={showCartPreview}>
                    <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                    <span>Cart</span>
                    <span id="cart-count">{cartItems.length}</span>
                </div>
            </div>
            <div id="menu" onClick={showSideDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

