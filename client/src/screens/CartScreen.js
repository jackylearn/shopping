import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { resetCart } from '../redux/actions/cartActions.js'


export default function CartScreen(props) {

    const cartItems = useSelector(state => state.cart)
    const itemsId = Object.keys(cartItems)
    const dispatch = useDispatch();


    return (
        <div className='cart-screen'>
            <div className='cart-screen-left'>
                <h2>Shopping Cart</h2>
                {itemsId.map((itemId => (<CartItem itemId={itemId} />)))}
            </div>
            <div className='cart-screen-right'>
                <div className='cart-screen-info'>
                    <p>Subtotal ({itemsId.length}) items</p>
                    <p>{"$ " + itemsId.reduce((sum, itemId) => sum + parseFloat(cartItems[itemId].price), 0)}</p>
                </div>
                <div className="btn reset-cart-btn" onClick={() => dispatch(resetCart())}>
                    <FontAwesomeIcon icon={['fas', 'trash']} />
                    Remove All from Cart
                </div>
                <div className="btn">Proceed to checkout</div>
            </div>
        </div>
    )
}