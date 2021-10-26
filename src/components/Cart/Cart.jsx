import CartItemCard from './../CartItemCard/CartItemCard';

import './Cart.css'

const Cart = ({ cartItems, removeFromCart }) => {
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
        </div>
     );
}
 
export default Cart;