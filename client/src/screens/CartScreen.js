import './CartScreen.css'

import CartItem from '../components/CartItem.js'

export default function CartScreen(props) {
    return (
        <div className='cart-screen'>
            <div className='cart-screen-left'>
                <h2>Shopping Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='cart-screen-right'>
                <div className='cart-screen-info'>
                    <p>Subtotal (1) items</p>
                    <p>$1</p>
                </div>
                <div className="btn">Proceed to checkout</div>
            </div>
        </div>
    )
}