import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { resetCart, checkout } from '../redux/actions/cartActions.js'
import { useEffect } from 'react'



export default function CartScreen() {

    const cartItems = useSelector(state => state.cart)
    const itemsId = Object.keys(cartItems)
    const dispatch = useDispatch();
    const checkoutUrl = useSelector(state => state.payment.destination)

    const checkoutHandler = () => {
        if (itemsId.length === 0) return alert("No item in your cart")

        dispatch(checkout())
    }

    useEffect(() => {
        if (checkoutUrl)
            window.location = checkoutUrl

    }, [checkoutUrl])

    return (
        <div className='cart-screen'>
            <div className='cart-screen-left'>
                <h2>Shopping Cart</h2>
                {itemsId.length > 0
                    ? itemsId.map((itemId => (<CartItem key={`${itemId}-cart-item`} itemId={itemId} />)))
                    : <h3>No item in your cart</h3>
                }
            </div>
            <div className='cart-screen-right'>
                <div className='cart-screen-info'>
                    <p>Subtotal ({itemsId.length}) items</p>
                    <p>{"$ " + Math.floor(itemsId.reduce((sum, itemId) => sum + cartItems[itemId].price, 0) * 100) / 100}</p>
                </div>
                <div className="btn reset-cart-btn" onClick={() => dispatch(resetCart())}>
                    <FontAwesomeIcon icon={['fas', 'trash']} />
                    Remove All from Cart
                </div>
                <div className="btn" onClick={checkoutHandler}>Proceed to checkout</div>
            </div>
        </div>
    )
}