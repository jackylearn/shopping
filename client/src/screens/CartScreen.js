import './CartScreen.css'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem.js'

export default function CartScreen(props) {

    const cartItems = useSelector(state => state.cart)
    const itemsId = Object.keys(cartItems)

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
                <div className="btn">Proceed to checkout</div>
            </div>
        </div>
    )
}