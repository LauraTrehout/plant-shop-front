import { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa'

import CartItemCard from './../CartItemCard/CartItemCard';
import Checkout from './../Checkout/Checkout';

import './Cart.css'

const Cart = ({ cartItems, removeFromCart, createOrder }) => {
const [showCheckout, setShowCheckout] = useState(false)


    return ( 
        <div className='cart-container'>
            <h2 className='cart-title'>Shopping Cart</h2>
            {!cartItems.length ? <p>Cart is empty</p> : 
            cartItems.length === 1 ? <p> There is one item in your cart </p> :
            <p>There are {cartItems.length} items in your cart.</p>}
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItemCard key={item._id} cartItem={item} removeFromCart={removeFromCart} />
                ))}
            </div>
            {cartItems.length !== 0 && (
                <div className='cart-total'>
                <h2>Total: </h2>
                <div>
                    {cartItems.reduce((a,c) => a + c.price*c.count, 0)} €
                </div>
                <p>This way to checkout</p>
                <FaArrowAltCircleRight className='checkout' onClick={() => setShowCheckout(true)}/>
                </div>
            )}
            {showCheckout && (
              <Checkout cartItems={cartItems} createOrder={createOrder} />
            )}
                </div>
            
    );
}
 
export default Cart;